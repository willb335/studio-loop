// src/components/calculator/types.ts

export interface CalculatorInputs {
  monthlyMembers: number;
  lifetimeValue: number;
}

export interface ChurnResults {
  annualMembers: number;
  churnedMembers: number;
  annualLoss: number;
  recoveryLow: number;
  recoveryHigh: number;
  roiLow: number;
  roiHigh: number;
}

export interface SliderConfig {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
}
