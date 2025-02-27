/**
 * Core functionality for visualization pages
 */
import { 
  getUrlParams,
  updateUrlParams,
  getElement,
  toggleVisibility,
  announceToScreenReader
} from './transcript-utils.js';

// Initialize state
const params = getUrlParams();
const urlCodeFilter = params.get('filter');
const urlPeepFilter = params.get('id');

/**
 * Filter visualization by code/tag
 * @param {string} filterClass - The filter class to apply
 */
const codeFilter = (filterClass) => {
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
  document.querySelectorAll(`rect.${filterClass}`).forEach(rect => {
    rect.classList.toggle("black");
    rect.classList.add(`primary-${filterClass}`);
  });

  // Show circles for the selected filter
  document.querySelectorAll(`circle.${filterClass}`).forEach(circle => {
    circle.classList.toggle("black");
    const parentSvg = circle.closest('svg');
    if (parentSvg) {
      parentSvg.setAttribute('aria-pressed', 'true');
    }
  });

  // Show table rows for the selected filter
  document.querySelectorAll(`tr.${filterClass}`).forEach(tr => {
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
      parentSection.setAttribute('aria-hidden', 'false');
    }
  });

  // Update URL parameters
  updateUrlParams(params, 'filter', filterClass);
  
  // Clear id parameter if not set
  if (!urlPeepFilter) {
    updateUrlParams(params, 'id', null);
  }

  // Update status for screen readers
  const filterNameElement = document.querySelector(`svg[data-id="${filterClass}"] text`);
  const filterName = filterNameElement ? filterNameElement.textContent : filterClass;
  const matchCount = document.querySelectorAll(`tr.${filterClass}`).length;
  const statusMessage = `Content filtered by ${filterName}. ${matchCount} matching segments found.`;

  const statusElement = getElement('filter-status');
  if (statusElement) {
    statusElement.textContent = statusMessage;
  }

  // Move focus to first result for keyboard users
  setTimeout(() => {
    const firstVisibleRow = document.querySelector('tr:not(.hidden)');
    if (firstVisibleRow) {
      const firstLink = firstVisibleRow.querySelector('a');
      if (firstLink) {
        firstLink.focus();
      } else {
        // If no link, focus the row itself
        firstVisibleRow.setAttribute('tabindex', '0');
        firstVisibleRow.focus();
      }
    } else {
      // If no results, focus the content area to announce no results
      const contentArea = getElement('transcript-contents');
      if (contentArea) {
        contentArea.setAttribute('tabindex', '-1');
        contentArea.focus();
      }
    }
  }, 100);
};

/**
 * Filter by interview
 * @param {string} interviewId - ID of the interview to filter
 */
const interviewFilter = (interviewId) => {
  // Show all tables and SVGs initially
  document.querySelectorAll("table, svg").forEach(el => {
    el.classList.remove("hidden");
    el.removeAttribute("aria-hidden");
  });
  
  // Hide non-matching elements
  document.querySelectorAll(`table:not(.${interviewId}), svg.chart:not(.${interviewId}), h3:not(.${interviewId})`).forEach(el => {
    el.classList.toggle("hidden");
    el.removeAttribute("aria-hidden");
  });
  
  // Update URL
  updateUrlParams(params, 'id', interviewId);
};

/**
 * Reset all filters
 */
const resetFilters = () => {
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
  setTimeout(() => {
    if (statusElement) {
      statusElement.textContent = "View reset. All transcript segments are now visible.";
    }
  }, 1000);
};

/**
 * Initialize page event handlers
 */
const initEventHandlers = () => {
  // Set up legend click handlers
  document.querySelectorAll(".legend").forEach(legend => {
    legend.addEventListener('click', () => {
      const cFilter = legend.getAttribute("data-id");
      codeFilter(cFilter);
    });
  });

  // Set up interview filter handlers
  document.querySelectorAll("h3.toggle_int").forEach(h3 => {
    h3.addEventListener('click', () => {
      const intFilter = h3.getAttribute("data-id");
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
    svg.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        svg.click();
      }
    });
  });
};

/**
 * Initialize the page
 */
const init = () => {
  // Set up event handlers
  document.addEventListener('DOMContentLoaded', initEventHandlers);
  
  // Initialize from URL parameters
  if (urlCodeFilter && urlPeepFilter) {
    // Both code and person filter
    codeFilter(urlCodeFilter);
    interviewFilter(urlPeepFilter);
  } else if (urlCodeFilter) {
    // Just code filter
    codeFilter(urlCodeFilter);
  } else if (urlPeepFilter) {
    // Just person filter
    interviewFilter(urlPeepFilter);
  }
};

// Initialize the page
init();

// Export public functions
export {
  codeFilter,
  interviewFilter,
  resetFilters
};