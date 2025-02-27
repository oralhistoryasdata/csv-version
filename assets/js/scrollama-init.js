/**
 * Scrollama initialization and handlers for transcript pages
 */
import { getElement } from './transcript-utils.js';

/**
 * Initialize scrollama instance and handlers
 */
const initScrollama = () => {
  const scrolly = getElement('scrolly');
  if (!scrolly) return;
  
  const article = scrolly.querySelector('article');
  if (!article) return;
  
  const steps = article.querySelectorAll('.step');
  if (!steps.length) return;
  
  // Cache frequently used elements
  const filterTab = getElement('filter-tab');
  const upperElement = getElement('upper-content');
  const filtersSearch = getElement('filters-search');
  
  // Initialize the scrollama instance
  const scroller = scrollama();
  
  /**
   * Handle step enter events
   * @param {Object} response - Scrollama response object
   */
  const handleStepEnter = (response) => {
    const stepIndex = response.index;
    
    // Handle step 0 (top of page)
    if (stepIndex === 0) {
      if (filterTab) {
        filterTab.classList.add('d-none');
      }
      
      // Remove media-scroll-wrapper if enabled and present
      if (upperElement && 
          window.site && 
          window.site.data && 
          window.site.data.theme && 
          window.site.data.theme.mediaScroll) {
        upperElement.classList.remove('media-scroll-wrapper');
      }
      
      // Remove retracted class from filters if present
      if (filtersSearch && 
          window.site && 
          window.site.data && 
          window.site.data.theme && 
          window.site.data.theme.searchAndFilters !== false) {
        filtersSearch.classList.remove('retracted');
      }
    } 
    // Handle step 1 (scrolled down)
    else if (stepIndex === 1) {
      // Show filter tab if search and filters are enabled
      if (filterTab && 
          window.site && 
          window.site.data && 
          window.site.data.theme && 
          window.site.data.theme.searchAndFilters !== false &&
          window.site.data.theme.searchAndFiltersSticky !== false) {
        filterTab.classList.remove('d-none');
      }
      
      // Add media-scroll-wrapper if enabled
      if (upperElement && 
          window.site && 
          window.site.data && 
          window.site.data.theme && 
          window.site.data.theme.mediaScroll) {
        upperElement.classList.add('media-scroll-wrapper');
      }
    }
  };
  
  /**
   * Handle step exit events
   * @param {Object} response - Scrollama response object 
   */
  const handleStepExit = (response) => {
    // Currently not used but kept for future functionality
  };
  
  // Set up scrollama
  scroller
    .setup({
      step: '#scrolly article .step',
      debug: false,
      offset: 0.24
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);
    
  // Return the scroller instance for potential future use
  return scroller;
};

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', initScrollama);

export { initScrollama };