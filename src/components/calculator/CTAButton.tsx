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
      className="w-full h-14 sm:h-16 px-8 text-white font-semibold text-lg rounded-2xl shadow-[0_14px_32px_rgba(244,63,94,0.35)] transition-all duration-200 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-200 bg-gradient-to-r from-rose-500 via-rose-500 to-rose-400 hover:shadow-[0_18px_40px_rgba(244,63,94,0.4)]"
      aria-label={`Recover ${formatCurrency(recoveryLow)} to ${formatCurrency(
        recoveryHigh
      )} annually`}
    >
      <span className="drop-shadow-sm">
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
