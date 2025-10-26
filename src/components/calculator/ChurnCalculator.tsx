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
      {/* Calculator Card */}
      <div
        className="rounded-2xl shadow-2xl overflow-hidden border-2"
        style={{
          background: 'linear-gradient(to bottom right, rgb(253, 242, 248), rgb(255, 241, 242))',
          borderColor: 'rgb(252, 231, 243)',
          boxShadow: '0 20px 50px rgba(251, 113, 133, 0.15)',
        }}
      >
        {/* Input Section */}
        <div className="p-6 sm:p-8 space-y-6">
          <SliderInput
            label="New members per month"
            value={inputs.monthlyMembers}
            onChange={(value) =>
              setInputs({ ...inputs, monthlyMembers: value })
            }
            config={MEMBERS_CONFIG}
          />

          <SliderInput
            label="Average lifetime value per member"
            value={inputs.lifetimeValue}
            onChange={(value) => setInputs({ ...inputs, lifetimeValue: value })}
            config={LTV_CONFIG}
            prefix="$"
          />
        </div>

        {/* Results Section */}
        <div className="px-6 pb-6 sm:px-8 sm:pb-8">
          <ResultsDisplay results={results} />
        </div>

        {/* CTA Section */}
        <div className="px-6 pb-8 sm:px-8">
          <CTAButton
            recoveryLow={results.recoveryLow}
            recoveryHigh={results.recoveryHigh}
            onClick={handleCTAClick}
          />

          {/* Fine Print */}
          <p className="text-center text-xs mt-4" style={{ color: 'rgb(161, 161, 170)' }}>
            Based on 37% industry churn rate and 35-46% retention improvement
            with automated follow-ups
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChurnCalculator;
