import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for responsive behavior based on window width
 * @param {number} breakpoint - Window width breakpoint (default: 768)
 * @returns {boolean} True if window width > breakpoint
 */
export const useResponsive = (breakpoint = 768) => {
  const [isLarge, setIsLarge] = useState(window.innerWidth > breakpoint);
  const resizeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      // Debounce resize events for better performance
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        setIsLarge(window.innerWidth > breakpoint);
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [breakpoint]);

  return isLarge;
};
