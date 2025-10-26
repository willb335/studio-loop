// src/components/calculator/SliderInput.tsx

import React from 'react';
import type { SliderConfig } from './types';

interface SliderInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  config: SliderConfig;
  prefix?: string;
  suffix?: string;
}

export const SliderInput: React.FC<SliderInputProps> = ({
  label,
  value,
  onChange,
  config,
  prefix = '',
  suffix = '',
}) => {
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue >= config.min && newValue <= config.max) {
      onChange(newValue);
    }
  };

  return (
    <div className="slider-input-wrapper">
      <label
        className="block text-sm font-medium mb-3"
        style={{ color: 'rgb(63, 63, 70)' }}
      >
        {label}
      </label>

      <div className="flex items-center gap-4">
        {/* Slider */}
        <input
          type="range"
          min={config.min}
          max={config.max}
          step={config.step}
          value={value}
          onChange={handleSliderChange}
          className="flex-1 h-2 rounded-lg appearance-none cursor-pointer calculator-slider
                     transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            background: 'rgb(251, 207, 232)',
            accentColor: 'rgb(244, 114, 182)',
          }}
          aria-label={label}
        />

        {/* Number Input */}
        <div className="relative">
          {prefix && (
            <span
              className="absolute left-3 top-1/2 -translate-y-1/2 font-semibold"
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
            className={`w-28 text-center text-2xl font-bold border-2 rounded-lg py-2 transition-all
                       focus:outline-none focus:ring-2
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
