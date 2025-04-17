'use client';

import { useEffect } from 'react';

export const ScrollLock = () => {
  useEffect(() => {
    // Store original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    // Function to prevent horizontal scrolling but allow vertical
    const preventHorizontalScroll = (e: TouchEvent) => {
      // Don't block multi-touch gestures completely
      if (e.touches.length > 1) {
        return;
      }
      
      // Store initial touch position
      const touchStartX = e.touches[0].clientX;
      const touchStartY = e.touches[0].clientY;
      
      // Add touchmove event listener
      const handleTouchMove = (moveEvent: TouchEvent) => {
        // Don't prevent default for all touch moves
        if (moveEvent.touches.length !== 1) return;
        
        // Calculate distance moved
        const touchMoveX = moveEvent.touches[0].clientX;
        const touchMoveY = moveEvent.touches[0].clientY;
        
        const xDiff = Math.abs(touchMoveX - touchStartX);
        const yDiff = Math.abs(touchMoveY - touchStartY);
        
        // If horizontal movement is significantly greater than vertical, prevent default
        // Use a threshold to avoid blocking diagonal scrolls
        if (xDiff > yDiff && xDiff > 10 && yDiff < 30) {
          moveEvent.preventDefault();
        }
      };
      
      // Add and remove touchmove listener for this touch sequence
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      
      const handleTouchEnd = () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
      
      document.addEventListener('touchend', handleTouchEnd, { once: true });
    };
    
    // Less aggressive overflow handling
    const preventHorizontalOverflow = () => {
      // Reset horizontal scroll if needed
      if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY);
      }
    };
    
    // Add event listener for touchstart
    document.addEventListener('touchstart', preventHorizontalScroll, { passive: true });
    
    // Add listener for scroll to reset horizontal position, but allow vertical
    window.addEventListener('scroll', preventHorizontalOverflow);
    
    // Set viewport height
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    // Set viewport height initially and on resize
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    
    // Apply minimal custom styling
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      html, body {
        max-width: 100vw;
        overflow-x: hidden;
        overscroll-behavior-x: none;
      }
    `;
    document.head.appendChild(styleElement);
    
    // Clean up
    return () => {
      document.removeEventListener('touchstart', preventHorizontalScroll);
      window.removeEventListener('scroll', preventHorizontalOverflow);
      window.removeEventListener('resize', setViewportHeight);
      document.head.removeChild(styleElement);
    };
  }, []);
  
  return null;
};

export default ScrollLock; 