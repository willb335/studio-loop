// src/components/calculator/SliderInput.tsx

import React, { useRef, useEffect } from 'react';
import type { SliderConfig } from './types';
import { InfoTooltip } from './InfoTooltip';

interface SliderInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  config: SliderConfig;
  prefix?: string;
  suffix?: string;
  tooltip?: string;
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
}

export const SliderInput: React.FC<SliderInputProps> = ({
  label,
  value,
  onChange,
  config,
  prefix = '',
  suffix = '',
  tooltip,
  tooltipPosition = 'top',
}) => {
  const sliderRef = useRef<HTMLInputElement>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue >= config.min && newValue <= config.max) {
      onChange(newValue);
    }
  };

  // Calculate percentage for slider fill
  const percentage = ((value - config.min) / (config.max - config.min)) * 100;

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.setProperty('--value-percent', `${percentage}%`);
    }
  }, [percentage]);

  const formatWithAffixes = (val: number) => {
    const formatted = val.toLocaleString();
    return `${prefix}${formatted}${suffix}`;
  };

  return (
    <div className="slider-input-wrapper space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <label className="text-xs font-semibold uppercase tracking-wide text-rose-500">
          {label}
        </label>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-rose-500"
              aria-hidden="true"
            >
              <path
                d="M12 6V12"
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
            {formatWithAffixes(value)}
          </span>
          {tooltip && (
            <InfoTooltip content={tooltip} position={tooltipPosition} />
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
        {/* Slider Container */}
        <div className="flex-1">
          <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-wide text-neutral-400 mb-2">
            <span>{formatWithAffixes(config.min)}</span>
            <span>{formatWithAffixes(config.max)}</span>
          </div>
          <input
            ref={sliderRef}
            type="range"
            min={config.min}
            max={config.max}
            step={config.step}
            value={value}
            onChange={handleSliderChange}
            className="calculator-slider w-full h-2 rounded-full appearance-none cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
            aria-label={label}
          />
        </div>

        {/* Number Input */}
        <div className="relative flex-shrink-0 w-full sm:w-auto">
          {prefix && (
            <span
              className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-sm"
              style={{ color: 'rgb(82, 82, 91)' }}
            >
              {prefix}
            </span>
          )}
          <input
            type="number"
            min={config.min}
            max={config.max}
            step={config.step}
            value={value}
            onChange={handleInputChange}
            className={`w-full sm:w-32 md:w-36 min-h-[52px] text-center text-xl font-bold border-2 rounded-2xl transition-all focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-1 hover:border-pink-400 ${
              prefix ? 'pl-8' : 'pl-3'
            } pr-4 bg-white/90`}
            style={{
              borderColor: 'rgb(249, 168, 212)',
            }}
            aria-label={`${label} input`}
          />
          {suffix && (
            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm"
              style={{ color: 'rgb(82, 82, 91)' }}
            >
              {suffix}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
