import { useState, useEffect } from 'react';

/**
 * Custom hook for detecting scroll position
 * @param {number} threshold - Scroll Y position to trigger true (default: 50)
 * @returns {boolean} True if scrolled past threshold
 */
export const useScrollDetection = (threshold = 50) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Run on mount to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};
