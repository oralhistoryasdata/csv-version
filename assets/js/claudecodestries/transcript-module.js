/**
 * Core functionality for transcript pages
 */
import { 
  getUrlParams,
  updateUrlParams,
  getElement,
  announceToScreenReader,
  resetElements
} from './transcript-utils.js';

// State variables
const params = getUrlParams();
let currentFilter = '';

// Cache DOM elements
const filtersSearch = getElement('filters-search');
const filterTab = getElement('filter-tab');
const upperElement = getElement('upper-content');
const step0 = getElement('step0');

/**
 * Filters visualization by highlighting specific rectangles
 * @param {string} filterClass - The class to filter by
 */
const vizFilter = (filterClass) => {
  // Skip URL update if just highlighting
  if (filterClass !== "hilite") {
    updateUrlParams(params, 'filter', filterClass);
    
    // Update filters dropdown if it exists
    if (getElement('filters')) {
      getElement('filters').value = filterClass;
    }
  }

  // Process all rectangles
  const rects = document.getElementsByTagName('rect');
  Array.from(rects).forEach(rect => {
    const classString = rect.classList;
    
    // First add dark class to all rectangles
    classString.add('dark');
    
    // Remove any existing primary classes
    Array.from(classString).forEach(item => {
      if (item.startsWith('primary')) {
        classString.remove(item);
      }
    });

    // Apply filtering logic
    if (filterClass === "all") {
      classString.remove('dark');
      resetFiltersAndSearch();
    } else if (classString.contains(filterClass)) {
      classString.remove('dark');
      classString.add(`primary-${filterClass}`);
    }
  });
};

/**
 * Search transcript lines for matching text
 * @param {string} searchQuery - Text to search for
 */
const searchLines = (searchQuery) => {
  resetFiltersAndSearch();
  
  const itemcontainer = getElement("contents-container");
  if (!itemcontainer) return;
  
  const lines = itemcontainer.getElementsByClassName("line");
  
  // Update URL parameters with search query
  updateUrlParams(params, 'q', searchQuery);
  
  const filter = searchQuery.toUpperCase();
  let searchResults = '<option>Select and scroll to a matching line</option>';
  let matchCount = 0;
  
  // Process each line
  Array.from(lines).forEach((line, i) => {
    const wordsElement = line.getElementsByClassName("words")[0];
    
    if (wordsElement) {
      if (wordsElement.innerHTML.toUpperCase().includes(filter)) {
        // Add featured class to matching line
        line.classList.add("featured");
        matchCount++;
        
        // Add line to dropdown options
        const truncatedText = wordsElement.innerHTML.substring(0, 125);
        searchResults += `<option class="text-truncate" style="max-width: 250px;" value="{{page.objectid}}${i}">Line ${i} -- ${truncatedText}...</option>`;
        
        // Highlight matching text
        wordsElement.innerHTML = wordsElement.innerHTML.replace(
          searchQuery, 
          `<span class='text-danger'>${searchQuery}</span>`
        );
        
        // Highlight corresponding rectangle in visualization if filters exist
        const rectal = `rect${i}`;
        const rectElement = getElement(rectal);
        if (rectElement) {
          rectElement.classList.add("hilite");
          vizFilter('hilite');
        }
      } else {
        wordsElement.classList.add("small", "text-muted");
      }
    }
  });
  
  // Reset filters dropdown if it exists
  if (getElement("filters")) {
    getElement("filters").selectedIndex = 0;
  }
  
  // Update UI with results
  const statusMessage = `${matchCount} lines match your query: ${searchQuery}`;
  announceToScreenReader(statusMessage);
  
  if (getElement("numberof")) {
    getElement("numberof").innerHTML = `${matchCount} lines match your query --><i> ${searchQuery}</i>`;
  }
  
  if (getElement("searchResults")) {
    getElement("searchResults").innerHTML = searchResults;
  }
  
  if (getElement("linecount")) {
    getElement("linecount").classList.remove("d-none");
  }
  
  if (getElement("filtersearch-dropdown")) {
    getElement("filtersearch-dropdown").classList.remove("d-none");
  }
  
  // Handle filter retraction animation timing
  if (filtersSearch && filtersSearch.classList.contains("retracted")) {
    setTimeout(() => filtersSearch.classList.add("retracted"), 300);
  }
};

/**
 * Filter transcript lines by a specific tag
 * @param {string} filterClass - Class to filter by
 */
const filterLines = (filterClass) => {
  resetFiltersAndSearch();
  
  const itemcontainer = getElement("contents-container");
  if (!itemcontainer) return;
  
  const lines = itemcontainer.getElementsByClassName("line");
  
  // Update visualization and URL
  vizFilter(filterClass);
  updateUrlParams(params, 'filter', filterClass);
  
  let searchResults = '<option>Select and scroll to a matching line</option>';
  let startLine = '';
  let startNumber = 0;
  
  // Process each line
  Array.from(lines).forEach((line, i) => {
    const wordsElement = line.getElementsByClassName("words")[0];
    
    if (wordsElement) {
      if (line.classList.contains(filterClass)) {
        // Mark line as featured
        line.classList.add("featured");
        
        // Get previous and next line indices
        const prevLine = i - 1;
        const nextLine = i + 1;
        
        // Create sections for dropdown navigation
        if (prevLine >= 0 && !lines[prevLine].classList.contains(filterClass)) {
          searchResults += `<option class="text-truncate" style="max-width: 250px;" value="{{page.objectid}}${i}">Line ${i}`;
          startLine = wordsElement.innerHTML.substring(0, 125);
          startNumber = i;
        } else if (
          nextLine < lines.length && lines[nextLine].classList.contains(filterClass) && 
          prevLine >= 0 && lines[prevLine].classList.contains(filterClass)
        ) {
          // Middle of a sequence - don't add to dropdown
        } else if (nextLine < lines.length && !lines[nextLine].classList.contains(filterClass)) {
          // End of a sequence - complete the dropdown entry
          const lineTotal = i - startNumber + 1;
          searchResults += ` to Line ${i} (${lineTotal} lines total) -- ${startLine}...</option>`;
        }
      } else {
        wordsElement.classList.add("small", "text-muted");
      }
    }
  });
  
  // Update UI
  if (getElement("quicksearch")) {
    getElement("quicksearch").value = "";
  }
  
  if (getElement("searchResults")) {
    getElement("searchResults").innerHTML = searchResults;
  }
  
  if (getElement("linecount")) {
    getElement("linecount").classList.remove("d-none");
  }
  
  if (getElement("filtersearch-dropdown")) {
    getElement("filtersearch-dropdown").classList.remove("d-none");
  }
  
  countForFilter(filterClass);
  
  // Handle filter retraction animation timing
  if (filtersSearch && filtersSearch.classList.contains("retracted")) {
    setTimeout(() => filtersSearch.classList.add("retracted"), 300);
  }
};

/**
 * Count and display the number of items matching a filter
 * @param {string} filterClass - Filter class to count
 */
const countForFilter = (filterClass) => {
  const matchCount = document.querySelectorAll(`.${filterClass}`).length;
  const sectionCount = document.getElementsByClassName('text-truncate').length;
  
  let sectionText = sectionCount === 1 
    ? `${sectionCount} section `
    : `${sectionCount} sections `;
  
  if (getElement("numberof")) {
    getElement("numberof").innerHTML = `${sectionText}(${matchCount} lines) are tagged as related to ${filterClass}`;
  }
};

/**
 * Scroll to a specific line in the transcript
 * @param {string} lineId - ID of the line to scroll to
 */
const scrollToLine = (lineId) => {
  // Add media scroll wrapper if enabled
  if (upperElement && site.data.theme.mediaScroll) {
    upperElement.classList.add("media-scroll-wrapper");
  }
  
  const targetElement = getElement(lineId);
  if (targetElement) {
    // Announce to screen readers
    const lineNum = lineId.replace(/[^0-9]/g, '');
    announceToScreenReader(`Navigated to line ${lineNum}`);
    
    // Highlight and make focusable
    targetElement.classList.add("border-featured");
    targetElement.setAttribute('tabindex', '0');
    
    // Smooth scroll to element
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
    
    // Focus the element
    targetElement.focus();
  }
  
  // Retract filters after scrolling if they're not already retracted
  if (filtersSearch && !filtersSearch.classList.contains("retracted")) {
    setTimeout(() => filtersSearch.classList.add("retracted"), 300);
  }
};

/**
 * Reset all filters and search states
 */
const resetFiltersAndSearch = () => {
  // Clear URL parameters
  updateUrlParams(params, 'q', null);
  updateUrlParams(params, 'filter', null);
  updateUrlParams(params, 'line', null);
  
  // Reset UI elements if they exist
  if (getElement("linecount")) {
    getElement("linecount").classList.add("d-none");
  }
  
  if (getElement("filtersearch-dropdown")) {
    getElement("filtersearch-dropdown").classList.add("d-none");
  }
  
  if (getElement("quicksearch")) {
    getElement("quicksearch").value = "";
  }
  
  if (getElement("filters")) {
    getElement("filters").selectedIndex = 0;
  }
  
  // Reset all word and line elements
  const words = document.querySelectorAll("p.words");
  const lines = document.querySelectorAll(".line");
  
  words.forEach(word => {
    word.classList.remove('text-muted', 'featured', 'border-featured', 'small');
    const danger = word.querySelector(".text-danger");
    if (danger) {
      danger.classList.remove('text-danger');
    }
  });
  
  lines.forEach(line => {
    line.classList.remove('text-muted', 'featured', 'border-featured', 'small');
  });
  
  // Reset visualization elements if they exist
  const svgContainer = getElement("colorViz");
  if (svgContainer) {
    const rects = svgContainer.getElementsByTagName('rect');
    Array.from(rects).forEach(rect => {
      rect.classList.remove('dark', 'hilite', 'primary-hilite');
    });
  }
};

/**
 * Initialize the page
 */
const init = () => {
  // Set up search input handler
  const searchInput = getElement("quicksearch");
  if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        const searchVal = searchInput.value;
        searchLines(searchVal);
      }
    });
  }
  
  // Initialize from URL parameters
  const dataFilter = params.get('q');
  const codeFilter = params.get('filter');
  const lineFilter = params.get('line');
  const hashFilter = decodeURIComponent(location.hash.substr(1));
  
  if (dataFilter) {
    // Handle search query parameter
    if (searchInput) searchInput.value = dataFilter;
    if (getElement('goButton')) getElement('goButton').click();
    updateUrlParams(params, 'filter', null);
    if (searchInput) searchInput.scrollIntoView();
  } else if (codeFilter) {
    // Handle filter parameter
    filterLines(codeFilter);
    if (getElement('colorViz')) getElement('colorViz').scrollIntoView();
    updateUrlParams(params, 'q', null);
    if (getElement('filters')) getElement('filters').value = codeFilter;
  } else if (hashFilter) {
    // Handle hash in URL
    if (getElement(hashFilter)) getElement(hashFilter).classList.add('featured');
    updateUrlParams(params, 'q', null);
    updateUrlParams(params, 'filter', null);
  } else if (lineFilter) {
    // Handle line parameter
    updateUrlParams(params, 'q', null);
    updateUrlParams(params, 'filter', null);
    scrollToLine(lineFilter);
  }
  
  // Set up DOM content loaded handler
  document.addEventListener('DOMContentLoaded', () => {
    // Set minimum height for step0 element
    if (upperElement && step0) {
      const upperHeight = upperElement.offsetHeight;
      step0.style.minHeight = upperHeight < 300 ? "350px" : `${upperHeight}px`;
    }
    
    // Set up filter tab click handler
    if (filterTab && filtersSearch) {
      filterTab.addEventListener('click', () => {
        filtersSearch.classList.toggle('retracted');
      });
    }
    
    // Set up scroll to top button handler
    if (getElement('scroll-to-top')) {
      getElement('scroll-to-top').addEventListener('click', () => {
        // Un-retract filters if they are retracted
        if (filtersSearch && filtersSearch.classList.contains("retracted")) {
          filtersSearch.classList.remove("retracted");
        }
        
        // Remove media scroll wrapper if it's applied
        if (upperElement && upperElement.classList.contains("media-scroll-wrapper")) {
          setTimeout(() => upperElement.classList.remove("media-scroll-wrapper"), 200);
        }
      });
    }
  });
};

// Initialize the page
init();

// Export public functions
export {
  vizFilter,
  searchLines,
  filterLines,
  scrollToLine,
  resetFiltersAndSearch
};