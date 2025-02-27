/**
 * Shared utility functions for transcript and visualization pages
 */

// URL parameter handling
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

// Initialize bootstrap tooltips
const initTooltips = () => {
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  return tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
};

// Safely get DOM element by ID with optional fallback
const getElement = (id, fallback = null) => {
  const element = document.getElementById(id);
  return element || fallback;
};

// Error handling wrapper for DOM operations
const safelyExecute = (fn, errorMsg = 'Operation failed') => {
  try {
    return fn();
  } catch (error) {
    console.error(`${errorMsg}: ${error.message}`);
    return null;
  }
};

// Screen reader announcements
const announceToScreenReader = (message, elementId = 'search-status-announcer') => {
  const announcer = document.getElementById(elementId);
  if (announcer) {
    announcer.textContent = message;
  }
};

// Toggle element visibility with proper accessibility attributes
const toggleVisibility = (element, isVisible) => {
  if (!element) return;
  
  if (isVisible) {
    element.classList.remove('hidden', 'd-none');
    element.removeAttribute('aria-hidden');
  } else {
    element.classList.add('hidden');
    element.setAttribute('aria-hidden', 'true');
  }
};

// Reset all elements matching a selector to their default state
const resetElements = (selector, classesToRemove) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    classesToRemove.forEach(className => {
      element.classList.remove(className);
    });
  });
};

export {
  getUrlParams,
  updateUrlParams,
  initTooltips,
  getElement,
  safelyExecute,
  announceToScreenReader,
  toggleVisibility,
  resetElements
};