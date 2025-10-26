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

  return (
    <div className="slider-input-wrapper">
      <div className="flex items-center gap-2 mb-3">
        <label
          className="block text-sm font-medium"
          style={{ color: 'rgb(63, 63, 70)' }}
        >
          {label}
        </label>
        {tooltip && (
          <InfoTooltip content={tooltip} position={tooltipPosition} />
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
        {/* Slider Container */}
        <div className="flex-1 relative py-2">
          <input
            ref={sliderRef}
            type="range"
            min={config.min}
            max={config.max}
            step={config.step}
            value={value}
            onChange={handleSliderChange}
            className="calculator-slider w-full h-2 rounded-full appearance-none cursor-pointer
                       transition-all focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
            aria-label={label}
          />
        </div>

        {/* Number Input */}
        <div className="relative flex-shrink-0">
          {prefix && (
            <span
              className="absolute left-3 top-1/2 -translate-y-1/2 font-semibold text-sm"
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
            className={`w-full sm:w-28 text-center text-xl sm:text-2xl font-bold border-2 rounded-lg py-2.5 sm:py-2 transition-all
                       focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-1
                       hover:border-pink-400
                       ${prefix ? 'pl-6' : 'pl-3'} pr-3`}
            style={{
              borderColor: 'rgb(249, 168, 212)',
            }}
            aria-label={`${label} input`}
          />
          {suffix && (
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm"
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
