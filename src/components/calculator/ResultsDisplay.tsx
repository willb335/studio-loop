// src/components/calculator/ResultsDisplay.tsx

import React from 'react';
import { motion } from 'framer-motion';
import type { ChurnResults } from './types';
import { formatCurrency } from '../../utils/churnCalculations';
import { InfoTooltip } from './InfoTooltip';

interface ResultsDisplayProps {
  results: ChurnResults;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  return (
    <div
      className="bg-white rounded-xl p-5 sm:p-6 space-y-4 border-2"
      style={{ borderColor: 'rgb(252, 231, 243)' }}
    >
      {/* Annual Loss */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <p className="text-sm" style={{ color: 'rgb(82, 82, 91)' }}>
            Annual churn loss{' '}
            <span style={{ color: 'rgb(161, 161, 170)' }}>
              (37% dropout rate)
            </span>
          </p>
          <InfoTooltip
            content="This is how much revenue you're losing each year from members who sign up but never return after their first class. Based on the industry average 37% first-class dropout rate."
            position="left"
          />
        </div>
        <motion.div
          key={results.annualLoss}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl font-bold leading-tight"
          style={{ color: 'rgb(225, 29, 72)' }}
        >
          {formatCurrency(results.annualLoss)}
        </motion.div>
        <p className="text-xs mt-2" style={{ color: 'rgb(161, 161, 170)' }}>
          {results.churnedMembers} lost members × $
          {Math.round(results.annualLoss / results.churnedMembers)} avg LTV
        </p>
      </div>

      {/* Recovery Potential */}
      <div
        className="rounded-lg p-4 sm:p-5 border-2"
        style={{
          backgroundColor: 'rgb(240, 253, 244)',
          borderColor: 'rgb(187, 247, 208)',
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <p
            className="text-sm font-medium"
            style={{ color: 'rgb(63, 63, 70)' }}
          >
            With automated follow-ups
          </p>
          <InfoTooltip
            content="StudioLoop sends personalized text messages to members after their first class. Based on FitGrid case studies, this reduces churn by 35-46%, recovering thousands in lost revenue."
            position="left"
          />
        </div>
        <motion.div
          key={`${results.recoveryLow}-${results.recoveryHigh}`}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-xl sm:text-2xl font-semibold"
          style={{ color: 'rgb(21, 128, 61)' }}
        >
          Recover {formatCurrency(results.recoveryLow)} -{' '}
          {formatCurrency(results.recoveryHigh)}/year
        </motion.div>
        <div className="flex items-center gap-2 mt-3">
          <p
            className="text-xs flex items-center gap-2"
            style={{ color: 'rgb(22, 163, 74)' }}
          >
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">
              Your ROI: {results.roiLow}x-{results.roiHigh}x in year one
            </span>
          </p>
          <InfoTooltip
            content={`At $29/month ($348/year), StudioLoop pays for itself many times over. Your estimated return: ${results.roiLow}-${results.roiHigh} times your investment in the first year alone.`}
            position="left"
          />
        </div>
      </div>

      {/* Industry Data Attribution */}
      <p
        className="text-xs text-center pt-2 border-t"
        style={{
          color: 'rgb(161, 161, 170)',
          borderColor: 'rgb(228, 228, 231)',
        }}
      >
        Based on IHRSA industry data and FitGrid case studies
      </p>
    </div>
  );
};
