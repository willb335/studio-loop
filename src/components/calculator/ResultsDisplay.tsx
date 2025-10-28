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
    <div className="rounded-2xl border border-rose-100/80 bg-white/90 backdrop-blur-sm p-5 sm:p-6 space-y-5 shadow-[0_16px_38px_rgba(244,63,94,0.09)]">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">
            Annual churn loss
          </p>
          <InfoTooltip
            content="This is how much revenue you are losing each year from members who sign up but never return after their first class. Based on the industry average 37 percent first-class dropout rate."
            position="top"
          />
        </div>
        <motion.div
          key={results.annualLoss}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl font-bold leading-tight text-rose-600"
        >
          {formatCurrency(results.annualLoss)}
        </motion.div>
        <p className="text-xs text-neutral-500 leading-relaxed">
          {results.churnedMembers} lost members x $
          {Math.round(results.annualLoss / results.churnedMembers)} average LTV
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-xl border border-rose-100 bg-rose-50/80 px-4 py-4 space-y-1">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-rose-500">
            Members lost per year
          </p>
          <p className="text-xl font-semibold text-neutral-900">
            {results.churnedMembers}
          </p>
          <p className="text-xs text-rose-500/80">
            Calculated from your member volume
          </p>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-600">
              Revenue you can recover
            </p>
            <InfoTooltip
              content="FitnessFollowup sends personalized follow-ups after class. Based on FitGrid case studies, studios recover 35-46 percent of would-be churned revenue."
              position="top"
            />
          </div>
          <motion.p
            key={`${results.recoveryLow}-${results.recoveryHigh}`}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="text-lg sm:text-xl font-semibold text-emerald-600"
          >
            {formatCurrency(results.recoveryLow)} -{' '}
            {formatCurrency(results.recoveryHigh)} per year
          </motion.p>
          <p className="text-xs text-emerald-600/80">
            ROI range: {results.roiLow}x - {results.roiHigh}x in year one
          </p>
        </div>
      </div>

      <div className="flex items-start gap-2 text-[11px] text-neutral-400">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-[2px] flex-shrink-0"
          aria-hidden="true"
        >
          <path
            d="M12 7V12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
          <path
            d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <span>
          Calibrated using Health & Fitness Association churn benchmarks and
          FitGrid retention studies.
        </span>
      </div>
    </div>
  );
};
