import { useRef, useCallback } from 'react';

/**
 * Custom hook for debouncing function calls
 * @param {function} callback - Function to debounce
 * @param {number} delay - Debounce delay in ms (default: 100)
 * @returns {function} Debounced callback function
 */
export const useDebounce = (callback, delay = 100) => {
  const timeoutRef = useRef(null);

  return useCallback((...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
};
