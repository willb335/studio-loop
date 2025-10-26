// src/utils/churnCalculations.ts

import type {
  CalculatorInputs,
  ChurnResults,
} from '../components/calculator/types';

const CHURN_RATE = 0.37; // 37% industry average
const RECOVERY_LOW = 0.35; // 35% churn reduction
const RECOVERY_HIGH = 0.46; // 46% churn reduction
const ANNUAL_COST = 348; // $29/month × 12

export function calculateChurnImpact(inputs: CalculatorInputs): ChurnResults {
  const { monthlyMembers, lifetimeValue } = inputs;

  // Annual calculations
  const annualMembers = monthlyMembers * 12;
  const churnedMembers = Math.round(annualMembers * CHURN_RATE);
  const annualLoss = churnedMembers * lifetimeValue;

  // Recovery potential
  const recoveryLow = Math.round(annualLoss * RECOVERY_LOW);
  const recoveryHigh = Math.round(annualLoss * RECOVERY_HIGH);

  // ROI calculations (net recovery / annual cost)
  const roiLow = Math.round((recoveryLow - ANNUAL_COST) / ANNUAL_COST);
  const roiHigh = Math.round((recoveryHigh - ANNUAL_COST) / ANNUAL_COST);

  return {
    annualMembers,
    churnedMembers,
    annualLoss,
    recoveryLow,
    recoveryHigh,
    roiLow,
    roiHigh,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
