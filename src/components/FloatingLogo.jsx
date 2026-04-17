import React, { useCallback, memo } from 'react';
import headerImg from '../assets/img/header-img.svg';

const FloatingLogo = memo(({ isVisible }) => {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`floating-logo-container ${isVisible ? 'show' : ''}`}>
      <img
        src={headerImg}
        className="floating-logo-img"
        alt="Scroll to top"
        onClick={handleScrollToTop}
      />
    </div>
  );
});

FloatingLogo.displayName = 'FloatingLogo';

export default FloatingLogo;