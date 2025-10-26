// src/components/calculator/CTAButton.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { formatCurrency } from '../../utils/churnCalculations';

interface CTAButtonProps {
  recoveryLow: number;
  recoveryHigh: number;
  onClick: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  recoveryLow,
  recoveryHigh,
  onClick,
}) => {
  // Format amounts to show as "16K" instead of "$16,472"
  const formatShort = (amount: number) => {
    if (amount >= 1000) {
      return `$${Math.round(amount / 1000)}K`;
    }
    return formatCurrency(amount);
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="w-full py-4 px-8 text-white font-semibold text-lg
                 rounded-full shadow-lg hover:shadow-xl
                 transition-all duration-200 flex items-center justify-center gap-3
                 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        backgroundColor: 'rgb(244, 114, 182)',
        boxShadow: '0 4px 14px rgba(244, 114, 182, 0.3)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgb(219, 39, 119)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(244, 114, 182, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgb(244, 114, 182)';
        e.currentTarget.style.boxShadow = '0 4px 14px rgba(244, 114, 182, 0.3)';
      }}
      aria-label={`Recover ${formatCurrency(recoveryLow)} to ${formatCurrency(
        recoveryHigh
      )} annually`}
    >
      <span>
        Recover My {formatShort(recoveryLow)}-{formatShort(recoveryHigh)}
      </span>
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </motion.button>
  );
};
