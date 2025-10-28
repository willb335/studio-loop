// src/components/calculator/ChurnCalculator.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SliderInput } from './SliderInput';
import { ResultsDisplay } from './ResultsDisplay';
import { CTAButton } from './CTAButton';
import { calculateChurnImpact } from '../../utils/churnCalculations';
import type { CalculatorInputs, SliderConfig } from './types';

const MEMBERS_CONFIG: SliderConfig = {
  min: 10,
  max: 200,
  step: 5,
  defaultValue: 50,
};

const LTV_CONFIG: SliderConfig = {
  min: 100,
  max: 500,
  step: 10,
  defaultValue: 212,
};

export const ChurnCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlyMembers: MEMBERS_CONFIG.defaultValue,
    lifetimeValue: LTV_CONFIG.defaultValue,
  });

  const results = calculateChurnImpact(inputs);

  const handleCTAClick = () => {
    // Smooth scroll to waitlist form
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Track analytics event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'calculator_cta_click', {
        monthly_members: inputs.monthlyMembers,
        lifetime_value: inputs.lifetimeValue,
        annual_loss: results.annualLoss,
        recovery_amount: results.recoveryHigh,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-3xl mx-auto"
    >
      <div className="relative">
        <div className="relative rounded-[28px] border border-rose-100 bg-white/95 shadow-[0_22px_48px_rgba(244,63,94,0.16)]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
            <span className="absolute -top-24 right-[-3rem] h-56 w-56 rounded-full bg-rose-100/70 blur-3xl"></span>
            <span className="absolute -bottom-28 left-[-3rem] h-56 w-56 rounded-full bg-orange-100/60 blur-3xl"></span>
            <span className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-2xl"></span>
          </div>

          <div className="relative flex flex-col gap-6 sm:gap-8 lg:gap-9 p-6 sm:p-8 lg:p-10">
            <header className="space-y-3 text-center sm:text-left">
              <span className="inline-flex items-center justify-center gap-2 self-center sm:self-start px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-100">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-rose-500"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2L20 6V18L12 22L4 18V6L12 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 7V12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="16" r="1" fill="currentColor" />
                </svg>
                Churn impact calculator
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 leading-tight">
                Tailor the sliders to match your studio. Your revenue impact
                updates instantly.
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                We estimate how many members quietly churn and how much
                FitnessFollowups could recover using proven Health & Fitness
                Association and FitGrid benchmarks.
              </p>
            </header>

            <div className="rounded-2xl border border-rose-100/70 bg-white/85 px-4 py-5 sm:px-5 sm:py-6 shadow-[0_12px_30px_rgba(244,63,94,0.08)] space-y-6">
              <SliderInput
                label="New members per month"
                value={inputs.monthlyMembers}
                onChange={(value) =>
                  setInputs({ ...inputs, monthlyMembers: value })
                }
                config={MEMBERS_CONFIG}
                tooltip="How many new members sign up at your studio each month on average. This helps calculate your total annual churn."
                tooltipPosition="bottom"
              />

              <SliderInput
                label="Average lifetime value per member"
                value={inputs.lifetimeValue}
                onChange={(value) =>
                  setInputs({ ...inputs, lifetimeValue: value })
                }
                config={LTV_CONFIG}
                prefix="$"
                tooltip="Total revenue from one member across all purchases: memberships, packages, retail, etc. Industry average: $212 (Health & Fitness Association data). Your number depends on pricing and how long members stay."
                tooltipPosition="bottom"
              />
            </div>

            <ResultsDisplay results={results} />

            <div className="space-y-4">
              <CTAButton
                recoveryLow={results.recoveryLow}
                recoveryHigh={results.recoveryHigh}
                onClick={handleCTAClick}
              />

              <p className="text-center text-xs leading-relaxed text-neutral-400">
                Based on a 37 percent industry churn rate and 35-46 percent
                retention lift from automated post-class follow-ups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChurnCalculator;
