// src/components/calculator/InfoTooltip.tsx

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InfoTooltipProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({
  content,
  position = 'top',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 -mt-1 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-neutral-800',
    bottom:
      'bottom-full left-1/2 -translate-x-1/2 -mb-1 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-neutral-800',
    left: 'left-full top-1/2 -translate-y-1/2 -ml-1 border-t-[6px] border-b-[6px] border-l-[6px] border-t-transparent border-b-transparent border-l-neutral-800',
    right:
      'right-full top-1/2 -translate-y-1/2 -mr-1 border-t-[6px] border-b-[6px] border-r-[6px] border-t-transparent border-b-transparent border-r-neutral-800',
  };

  const handleOpen = () => {
    if (!isTouchDevice) {
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    if (!isTouchDevice) {
      setIsOpen(false);
    }
  };

  const handleToggle = () => {
    if (isTouchDevice) {
      setIsOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const handleChange = (event: MediaQueryListEvent) => {
      setIsTouchDevice(!event.matches);
    };

    setIsTouchDevice(!mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    if (!isTouchDevice || !isOpen) {
      return;
    }

    const handleOutsideInteraction = (event: MouseEvent | TouchEvent) => {
      if (
        tooltipRef.current &&
        event.target instanceof Node &&
        !tooltipRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('touchstart', handleOutsideInteraction);
    document.addEventListener('click', handleOutsideInteraction);

    return () => {
      document.removeEventListener('touchstart', handleOutsideInteraction);
      document.removeEventListener('click', handleOutsideInteraction);
    };
  }, [isTouchDevice, isOpen]);

  return (
    <div ref={tooltipRef} className="relative inline-block">
      <button
        type="button"
        onClick={handleToggle}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onFocus={handleOpen}
        onBlur={handleClose}
        className="inline-flex items-center justify-center w-5 h-5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-1"
        style={{ color: 'rgb(161, 161, 170)' }}
        aria-label="More information"
        aria-expanded={isOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          color="currentColor"
          fill="none"
          className="hover:scale-110 transition-transform"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></circle>
          <path
            d="M12 8V12.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12 15.9883V15.9983"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`absolute ${positionClasses[position]} z-50 w-56 sm:w-64 pointer-events-none`}
          >
            <div
              className="bg-neutral-800 text-white text-xs leading-relaxed rounded-lg p-3 shadow-xl"
              style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)' }}
            >
              {content}
              <div className={`absolute ${arrowClasses[position]}`}></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
