// Updated Visualization JavaScript that works with the optimized template

// Utility functions
const getUrlParams = () => {
  const url = new URL(window.location);
  return url.searchParams;
};

const updateUrlParams = (params, key, value) => {
  if (value) {
    params.set(key, value);
  } else {
    params.delete(key);
  }
  const paramString = params.toString();
  window.history.replaceState({}, '', 
    paramString ? `${location.pathname}?${paramString}` : location.pathname
  );
  return params;
};

const getElement = (id, fallback = null) => {
  const element = document.getElementById(id);
  return element || fallback;
};

// Transcript data cache
let transcriptCache = {};
let transcriptIndex = null;

// Get base URL for assets
const baseUrl = document.querySelector('base') ? document.querySelector('base').href : '';

// Initialize state
const params = getUrlParams();
const urlCodeFilter = params.get('filter');
const urlPeepFilter = params.get('id');

/**
 * Load a transcript JSON file
 */
async function loadTranscript(transcriptId) {
  // Check if already in cache
  if (transcriptCache[transcriptId]) {
    return transcriptCache[transcriptId];
  }
  
  try {
    const response = await fetch(`${baseUrl}/assets/data/transcripts/${transcriptId}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load transcript: ${response.status}`);
    }
    
    const data = await response.json();
    transcriptCache[transcriptId] = data;
    return data;
  } catch (error) {
    console.error(`Error loading transcript ${transcriptId}:`, error);
    return null;
  }
}

/**
 * Load all available transcripts
 */
async function loadAllTranscripts() {
  if (!window.availableTranscripts || window.availableTranscripts.length === 0) {
    console.error('No available transcripts defined.');
    return;
  }
  
  for (const transcriptId of window.availableTranscripts) {
    await loadTranscript(transcriptId);
  }
}

/**
 * Update tooltips with content from JSON
 */
async function updateTooltipsFromJson() {
  // Make sure all transcripts are loaded
  await loadAllTranscripts();
  
  // For each chart in the page
  document.querySelectorAll('svg.chart').forEach(async (svgChart) => {
    const transcriptId = svgChart.getAttribute('data-transcript-id');
    if (!transcriptId) return;
    
    const data = transcriptCache[transcriptId];
    if (!data || !data.segments) return;
    
    // Update tooltip text for all rectangles in this transcript
    const rectangles = svgChart.querySelectorAll('rect');
    rectangles.forEach((rect) => {
      const segmentIndex = parseInt(rect.getAttribute('data-segment-index'));
      if (isNaN(segmentIndex) || segmentIndex >= data.segments.length) return;
      
      const segment = data.segments[segmentIndex];
      if (!segment) return;
      
      // Format the tooltip text
      let tooltipText = segment.words;
      if (segment.tags && segment.tags.length > 0) {
        tooltipText += ` (Subjects: ${segment.tags.join(', ')})`;
      }
      
      // Set the tooltip title
      rect.setAttribute('title', tooltipText);
      
      // Make sure aria-label is properly set on the parent link
      const parentLink = rect.closest('a');
      if (parentLink) {
        parentLink.setAttribute('aria-label', `Jump to this line (starting with '${segment.words.substring(0, 20)}...') in the webpage for this transcript`);
      }
    });
  });
  
  // Reinitialize tooltips
  if (window.bootstrap && typeof bootstrap.Tooltip === 'function') {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
}

/**
 * Generate and populate transcript content area from JSON data
 */
async function populateTranscriptContent() {
  const contentContainer = document.getElementById('transcript-content-container');
  if (!contentContainer) return;
  
  // Make sure all transcripts are loaded
  await loadAllTranscripts();
  
  // Start building content
  let html = '';
  
  // For each transcript, create the content area
  for (const transcriptId of window.availableTranscripts) {
    const data = transcriptCache[transcriptId];
    if (!data || !data.segments) continue;
    
    html += `
      <section class="contentsdiv">
        <h3 class="my-4 ${transcriptId}"><a href="/items/${transcriptId}.html">${data.interviewee || data.title}</a></h3>
        <table class="my-4 p-2 border bg-light  ${transcriptId}">
    `;
    
    // Add rows for each segment
    data.segments.forEach(segment => {
      const tagClasses = segment.tags && segment.tags.length > 0 
        ? segment.tags.map(tag => tag.trim().toLowerCase().replace(/\s+/g, '-')).join(' ')
        : '';
      
      html += `
        <tr id="${transcriptId}row${segment.index}" class="${tagClasses}">
          <td class="p-2" style="width:10%;vertical-align:top">
            <a href="/items/${transcriptId}.html?line=${segment.index}" 
               aria-label="jump to Line ${segment.index} from ${transcriptId}'s interview, opens in new tab" 
               class="small btn-link text-dark" tabindex="-1">Line ${segment.index}</a>
          </td>
          <td class="words p-2">
            <div id="spoken">${segment.speaker ? segment.speaker.replace(':', '') + ': ' : ''}${segment.words}</div>
          </td>
        </tr>
      `;
    });
    
    html += '</table></section>';
  }
  
  // Update the DOM
  contentContainer.innerHTML = html;
}

/**
 * Filter visualization by code/tag
 */
function codeFilter(filterClass) {
  // Reset all rectangles and set them to black
  document.querySelectorAll("rect").forEach(rect => {
    // Remove any existing primary classes
    rect.classList.forEach(className => {
      if (className.startsWith("primary-")) {
        rect.classList.remove(className);
      }
    });
    rect.classList.add("black");
  });

  // Reset aria-pressed state for SVGs
  document.querySelectorAll('svg[aria-pressed="true"]').forEach(svg => {
    svg.setAttribute('aria-pressed', 'false');
  });

  // Reset all circles to black
  document.querySelectorAll("circle").forEach(circle => {
    circle.classList.add("black");
  });

  // Hide all table rows initially
  document.querySelectorAll("tr").forEach(tr => {
    const focusableLink = tr.querySelector('a[tabindex="0"]');
    if (focusableLink) {
      focusableLink.setAttribute('tabindex', -1);
    }
    tr.classList.add("hidden");
    tr.removeAttribute("aria-hidden");
  });

  // Hide all sections initially
  document.querySelectorAll("section.contentsdiv, section.vizdiv").forEach(section => {
    section.classList.add("hidden");
    section.removeAttribute("aria-hidden");
  });

  // Show rectangles for the selected filter
  document.querySelectorAll("rect." + filterClass).forEach(rect => {
    rect.classList.toggle("black");
    rect.classList.add("primary-" + filterClass);
  });

  // Show circles for the selected filter
  document.querySelectorAll("circle." + filterClass).forEach(circle => {
    circle.classList.toggle("black");
    const parentSvg = circle.closest('svg');
    if (parentSvg) {
      parentSvg.setAttribute('aria-pressed', 'true');
    }
  });

  // Show table rows for the selected filter
  document.querySelectorAll("tr." + filterClass).forEach(tr => {
    tr.classList.toggle("hidden");
    tr.setAttribute('aria-hidden', 'false');
  });

  // Make sections visible for the filtered content
  document.querySelectorAll("tr:not(.hidden)").forEach(tr => {
    const parentSection = tr.closest('section.contentsdiv');
    if (parentSection) {
      parentSection.classList.remove("hidden");
      parentSection.setAttribute('aria-hidden', 'false');
    }
    
    const focusableLink = tr.querySelector('a[tabindex="-1"]');
    if (focusableLink) {
      focusableLink.setAttribute('tabindex', 0);
    }
  });

  // Show visualization section for the filtered content
  document.querySelectorAll("rect:not(.black)").forEach(rect => {
    const parentSection = rect.closest('section.vizdiv');
    if (parentSection) {
      parentSection.classList.remove("hidden");
    }
  });

  // Update URL parameters
  updateUrlParams(params, 'filter', filterClass);
  
  // Clear id parameter if not set
  if (!urlPeepFilter) {
    updateUrlParams(params, 'id', null);
  }

  // Update status for screen readers
  const filterNameElement = document.querySelector('svg[data-id="' + filterClass + '"] text');
  const filterName = filterNameElement ? filterNameElement.textContent : filterClass;
  const matchCount = document.querySelectorAll('tr.' + filterClass).length;
  const statusMessage = 'Content filtered by ' + filterName + '. ' + matchCount + ' matching segments found.';

  const statusElement = getElement('filter-status');
  if (statusElement) {
    statusElement.textContent = statusMessage;
  }

  // Move focus to first result for keyboard users
  setTimeout(function() {
    const firstVisibleRow = document.querySelector('tr:not(.hidden)');
    if (firstVisibleRow) {
      const firstLink = firstVisibleRow.querySelector('a');
      if (firstLink) {
        firstLink.focus({ preventScroll: true });
      } else {
        // If no link, focus the row itself
        firstVisibleRow.setAttribute('tabindex', '0');
        firstVisibleRow.focus({ preventScroll: true });
      }
    } else {
      // If no results, focus the content area to announce no results
      const contentArea = getElement('transcript-contents');
      if (contentArea) {
        contentArea.setAttribute('tabindex', '-1');
        contentArea.focus({ preventScroll: true });
      }
    }
  }, 100);
}

/**
 * Filter by interview
 */
function interviewFilter(interviewId) {
  // Show all tables and SVGs initially
  document.querySelectorAll("table, svg").forEach(el => {
    el.classList.remove("hidden");
    el.removeAttribute("aria-hidden");
  });
  
  // Hide non-matching elements
  document.querySelectorAll('table:not(.' + interviewId + '), svg.chart:not(.' + interviewId + '), h3:not(.' + interviewId + ')').forEach(el => {
    el.classList.toggle("hidden");
    el.removeAttribute("aria-hidden");
  });
  
  // Update URL
  updateUrlParams(params, 'id', interviewId);
}

/**
 * Reset all filters
 */
function resetFilters() {
  // Reset all visual elements
  document.querySelectorAll("rect, circle, tr, table, svg, h3, div, section").forEach(el => {
    el.classList.remove("black", "hidden", "dark");
    el.removeAttribute("aria-hidden");
  });

  // Reset all tabindex values
  document.querySelectorAll('a[tabindex="0"]').forEach(a => {
    if (a.querySelector('rect')) {
      a.setAttribute('tabindex', -1);
    }
  });

  // Reset all svg buttons
  document.querySelectorAll('svg[aria-pressed="true"]').forEach(svg => {
    svg.setAttribute('aria-pressed', 'false');
  });

  // Clear URL parameters
  updateUrlParams(params, 'id', null);
  updateUrlParams(params, 'filter', null);

  // Update status for screen readers
  const statusElement = getElement('filter-status');
  if (statusElement) {
    statusElement.textContent = "All filters have been reset. Showing all content.";
  }

  // Return focus to the reset button or another appropriate element
  const contentsElement = getElement('transcript-contents');
  if (contentsElement) {
    contentsElement.setAttribute('tabindex', '-1');
  }
  
  const resetButton = getElement('reset');
  if (resetButton) {
    resetButton.focus();
  }

  // Announce the reset action
  setTimeout(function() {
    if (statusElement) {
      statusElement.textContent = "View reset. All transcript segments are now visible.";
    }
  }, 1000);
}

/**
 * Initialize the page
 */
document.addEventListener('DOMContentLoaded', async function() {
  console.log('Initializing transcript visualization...');
  
  // Set up legend click handlers
  document.querySelectorAll(".legend").forEach(legend => {
    legend.addEventListener('click', function() {
      const cFilter = this.getAttribute("data-id");
      codeFilter(cFilter);
    });
  });

  // Set up interview filter handlers
  document.querySelectorAll("h3.toggle_int").forEach(h3 => {
    h3.addEventListener('click', function() {
      const intFilter = this.getAttribute("data-id");
      interviewFilter(intFilter);
    });
  });

  // Set up reset button handler
  const resetButton = getElement("reset");
  if (resetButton) {
    resetButton.addEventListener('click', resetFilters);
  }

  // Handle keyboard interactions for SVG buttons
  document.querySelectorAll('svg[role="button"]').forEach(svg => {
    svg.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ' || event.keyCode === 13 || event.keyCode === 32) {
        event.preventDefault();
        this.click();
      }
    });
  });
  
  // Initialize tooltips (temporary)
  if (window.bootstrap && typeof bootstrap.Tooltip === 'function') {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
  
  try {
    // Load and update tooltips
    await updateTooltipsFromJson();
    
    // Load and populate transcript content
    if (document.getElementById('transcript-content-container')) {
      await populateTranscriptContent();
    }
    
    console.log('Transcript data loaded successfully');
    
    // Apply any URL filters after content is loaded
    if (urlCodeFilter && urlPeepFilter) {
      codeFilter(urlCodeFilter);
      interviewFilter(urlPeepFilter);
    } else if (urlCodeFilter) {
      codeFilter(urlCodeFilter);
    } else if (urlPeepFilter) {
      interviewFilter(urlPeepFilter);
    }
  } catch (error) {
    console.error('Error initializing transcript visualization:', error);
    const contentContainer = document.getElementById('transcript-content-container');
    if (contentContainer) {
      contentContainer.innerHTML = '<div class="alert alert-danger">Error loading transcript data. Please try refreshing the page.</div>';
    }
  }
});