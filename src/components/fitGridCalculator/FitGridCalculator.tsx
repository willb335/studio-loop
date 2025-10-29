import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const INPUT_LIMITS = {
  newClients: { min: 0, max: 500, step: 1, defaultValue: 100 },
  avgRevenue3m: { min: 0, step: 1, defaultValue: 150 },
};

const ASSUMPTIONS = {
  scenario: {
    label: 'Typical Scenario (+35%)',
    tooltip:
      "FitGrid Typical Scenario (+35%)\nThis calculator automatically applies FitGrid's typical benchmark, showing a 35% relative increase in first-visit return rate after instructor follow-ups.\nSource: FitGrid marketing benchmarks (average across published case studies).\nBaseline return = 33%; follow-up reach = 90%.",
  },
  baselineReturnRate: {
    label: 'Baseline return rate (P_base)',
    value: '33%',
    tooltip:
      'Percentage of new clients who return for 2+ visits within 30 days without follow-ups. Derived from FitGrid case baselines.',
  },
  followUpReach: {
    label: 'Follow-up reach (F_reach)',
    value: '90%',
    tooltip:
      'Percentage of first-time clients who receive a follow-up message. Assumes most instructors use FitGrid consistently.',
  },
  openRate: {
    label: 'Open rate',
    value: '81%',
    tooltip:
      'Average message open rate reported in FitGrid case studies — included for transparency; it does not affect revenue directly.',
  },
  timeframe: {
    label: 'Timeframe',
    value: '3 months',
    tooltip:
      "Revenue retained is calculated over a 3-month window to match the input revenue field and FitGrid's short-term metrics.",
  },
  //   probabilityCap: {
  //     label: 'Probability cap',
  //     value: '100%',
  //     tooltip:
  //       'Post-lift return probability is capped at 100% to avoid impossible values.',
  //   },
};

const MODEL_VALUES = {
  baselineReturnRate: 0.33,
  followUpReach: 0.9,
  openRate: 0.81,
  relativeLift: 0.35,
  probabilityCap: 1.0,
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const useAnimatedNumber = (target: number, duration = 600) => {
  const [value, setValue] = useState(target);
  const previous = useRef(target);

  useEffect(() => {
    const startValue = previous.current;
    if (typeof window === 'undefined' || typeof performance === 'undefined') {
      setValue(target);
      previous.current = target;
      return;
    }

    const difference = target - startValue;
    const startTime = performance.now();
    let animationFrame: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setValue(startValue + difference * eased);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      } else {
        previous.current = target;
      }
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration]);

  return value;
};

const clampNumber = (value: number, min: number, max: number) => {
  if (Number.isNaN(value)) return min;
  return Math.min(Math.max(value, min), max);
};

interface InfoPopoverProps {
  title: string;
  text: string;
}

const InfoPopover: React.FC<InfoPopoverProps> = ({ title, text }) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const dialogId = useId();

  useEffect(() => {
    if (!open) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    const handleClick = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        buttonRef.current &&
        !dialogRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKey);
    document.addEventListener('mousedown', handleClick);

    dialogRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [open]);

  return (
    <div className="relative inline-flex">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? dialogId : undefined}
        aria-label={`More information: ${title}`}
        className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 transition hover:border-slate-400 hover:text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 cursor-pointer"
      >
        <span className="text-xs font-semibold">i</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            id={dialogId}
            tabIndex={-1}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute right-0 top-full z-30 mt-2 w-72 origin-top-right rounded-lg border border-slate-200 bg-white p-4 text-left shadow-lg focus:outline-none"
          >
            <p className="text-sm font-semibold text-neutral-900">{title}</p>
            <p className="mt-2 whitespace-pre-line text-xs leading-relaxed text-neutral-600">
              {text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AssumptionsDialogProps {
  onClose: () => void;
}

const AssumptionsDialog: React.FC<AssumptionsDialogProps> = ({ onClose }) => {
  const titleId = useId();
  const descriptionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKey);
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <div
        className="fixed inset-0 bg-slate-900/40 cursor-pointer"
        aria-hidden="true"
        onClick={onClose}
      />
      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-[420px] max-h-[calc(100vh-3rem)] overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2
                id={titleId}
                className="text-lg font-semibold text-neutral-900"
              >
                How this is calculated
              </h2>
              <p
                id={descriptionId}
                className="mt-2 text-sm leading-relaxed text-neutral-600"
              >
                We apply FitGrid's published typical benchmark to estimate the
                incremental revenue retained when instructors follow up with new
                members.
              </p>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close assumptions dialog"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 cursor-pointer"
            >
              <span aria-hidden="true" className="text-lg font-semibold">
                ×
              </span>
            </button>
          </div>
          <div className="mt-5 space-y-4">
            <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Fixed Typical Scenario
              </p>
              <p className="mt-2 text-sm text-neutral-700">
                Relative uplift of <strong>+35%</strong> to first-visit return
                rate with <strong>90%</strong> follow-up reach. Baseline return
                rate is <strong>33%</strong>
              </p>
            </div>
            <ul className="space-y-3 text-sm text-neutral-700">
              <li>
                <strong className="font-medium text-neutral-900">
                  Baseline return rate:
                </strong>{' '}
                33% — {ASSUMPTIONS.baselineReturnRate.tooltip}
              </li>
              <li>
                <strong className="font-medium text-neutral-900">
                  Follow-up reach:
                </strong>{' '}
                90% — {ASSUMPTIONS.followUpReach.tooltip}
              </li>
              <li>
                <strong className="font-medium text-neutral-900">
                  Open rate:
                </strong>{' '}
                81% — {ASSUMPTIONS.openRate.tooltip}
              </li>
              <li>
                <strong className="font-medium text-neutral-900">
                  Timeframe:
                </strong>{' '}
                3 months — {ASSUMPTIONS.timeframe.tooltip}
              </li>
              {/* <li>
                <strong className="font-medium text-neutral-900">
                  Probability cap:
                </strong>{' '}
                100% — {ASSUMPTIONS.probabilityCap.tooltip}
              </li> */}
            </ul>
          </div>
          {/* <p className="mt-6 text-xs text-neutral-500">
            Conservative (+30%) and aggressive (3×) scenarios are available in
            our full methodology breakdown.
          </p> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Math.round(value));
};

const formatMembers = (value: number) => Math.max(Math.round(value), 0);

const calculateRevenueRetained = (newClients: number, avgRevenue3m: number) => {
  const { baselineReturnRate, followUpReach, relativeLift, probabilityCap } =
    MODEL_VALUES;

  const returnsBefore = newClients * baselineReturnRate;
  const postReturnRate = Math.min(
    baselineReturnRate * (1 + relativeLift),
    probabilityCap
  );
  const returnsAfter =
    newClients *
    (followUpReach * postReturnRate + (1 - followUpReach) * baselineReturnRate);
  const incrementalReturns = returnsAfter - returnsBefore;
  const revenueRetained = incrementalReturns * avgRevenue3m;

  return {
    returnsBefore,
    returnsAfter,
    incrementalReturns,
    revenueRetained,
  };
};

export const FitGridCalculator: React.FC = () => {
  const [newClients, setNewClients] = useState(
    INPUT_LIMITS.newClients.defaultValue
  );
  const [avgRevenue3m, setAvgRevenue3m] = useState(
    INPUT_LIMITS.avgRevenue3m.defaultValue
  );
  const [assumptionsOpen, setAssumptionsOpen] = useState(false);

  const results = useMemo(
    () => calculateRevenueRetained(newClients, avgRevenue3m),
    [newClients, avgRevenue3m]
  );

  const animatedRevenue = useAnimatedNumber(results.revenueRetained);
  const animatedMembers = useAnimatedNumber(results.incrementalReturns);

  const formattedRevenue = formatCurrency(animatedRevenue);
  const formattedMembers = formatMembers(animatedMembers);

  const handleCTA = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'fitgrid_calculator_cta_click', {
        inputs: {
          new_clients: newClients,
          avg_revenue_3m: avgRevenue3m,
        },
        results: {
          incremental_returns: results.incrementalReturns,
          revenue_retained: results.revenueRetained,
        },
      });
    }
  };

  const handleNewClientsChange = (value: number) => {
    setNewClients(
      clampNumber(
        value,
        INPUT_LIMITS.newClients.min,
        INPUT_LIMITS.newClients.max
      )
    );
  };

  const handleAvgRevenueChange = (value: number) => {
    setAvgRevenue3m(Math.max(0, Number.isNaN(value) ? 0 : value));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mx-auto w-full max-w-[640px]"
    >
      <div className="relative rounded-[24px] border border-[var(--pink-200)] bg-white shadow-[0_24px_60px_rgba(2,6,23,0.06)]">
        <div className="relative flex flex-col gap-6 rounded-[24px] p-6 sm:p-7 lg:p-8">
          <header className="space-y-2">
            <p className="text-[22px] font-semibold text-neutral-900">
              FitGrid Retention Impact
            </p>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              See how much revenue stays when instructors follow up.
            </p>
          </header>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between gap-3">
                <label
                  htmlFor="new-clients-slider"
                  className="text-sm font-medium text-neutral-900"
                >
                  New first-time clients / month
                </label>
                <InfoPopover
                  title="New first-time clients / month"
                  text={
                    "New first-time clients are unique individuals who visit your studio for the first time in a month.\nIf you don't track this, estimate it from trial sign-ups or first-class purchases.\nDefault = 100 to represent a typical mid-size boutique studio."
                  }
                />
              </div>
              <div className="mt-4 flex items-center gap-4">
                <input
                  id="new-clients-slider"
                  type="range"
                  min={INPUT_LIMITS.newClients.min}
                  max={INPUT_LIMITS.newClients.max}
                  step={INPUT_LIMITS.newClients.step}
                  value={newClients}
                  onChange={(event) =>
                    handleNewClientsChange(Number(event.target.value))
                  }
                  aria-describedby="new-clients-helper"
                  className="flex-1 h-11 cursor-pointer"
                  style={{ accentColor: 'var(--pink-400)' }}
                />
                <div className="flex w-20 flex-col text-right">
                  <input
                    type="number"
                    inputMode="numeric"
                    min={INPUT_LIMITS.newClients.min}
                    max={INPUT_LIMITS.newClients.max}
                    step={INPUT_LIMITS.newClients.step}
                    value={newClients}
                    onChange={(event) =>
                      handleNewClientsChange(Number(event.target.value))
                    }
                    aria-label="New first-time clients (numeric input)"
                    className="h-11 rounded-lg border border-slate-200 px-3 text-right text-sm font-medium text-neutral-900 focus:border-[var(--pink-400)] focus:outline-none focus:ring-2 focus:ring-[rgba(251,113,133,0.25)]"
                  />
                  <span
                    id="new-clients-helper"
                    className="mt-1 text-[11px] text-slate-500"
                  >
                    0–500
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between gap-3">
                <label
                  htmlFor="avg-revenue-input"
                  className="text-sm font-medium text-neutral-900"
                >
                  Average revenue per new member (first 3 months)
                </label>
                <InfoPopover
                  title="Average revenue per new member"
                  text={
                    "Average revenue per new member (first 3 months) is how much you earn from a new client during their first 90 days — including intro packs, trial memberships, or early renewals.\nWe use a 3-month window because FitGrid's retention studies measure short-term impact over similar periods.\nDefault = $150, typical for studios with class packs or intro offers."
                  }
                />
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="relative flex-1">
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm font-semibold text-slate-500">
                    $
                  </span>
                  <input
                    id="avg-revenue-input"
                    type="number"
                    inputMode="decimal"
                    min={INPUT_LIMITS.avgRevenue3m.min}
                    step={INPUT_LIMITS.avgRevenue3m.step}
                    value={avgRevenue3m}
                    onChange={(event) =>
                      handleAvgRevenueChange(Number(event.target.value))
                    }
                    aria-describedby="avg-revenue-helper"
                    className="h-11 w-full rounded-lg border border-slate-200 pl-8 pr-4 text-sm font-medium text-neutral-900 focus:border-[var(--pink-400)] focus:outline-none focus:ring-2 focus:ring-[rgba(251,113,133,0.25)]"
                  />
                </div>
                <div className="w-20 text-right">
                  <span
                    id="avg-revenue-helper"
                    className="text-[11px] text-slate-500"
                  >
                    USD
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#E6EEF2]" />

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-neutral-900">
                Estimated monthly revenue retained
              </p>
              <InfoPopover
                title={ASSUMPTIONS.scenario.label}
                text={ASSUMPTIONS.scenario.tooltip}
              />
            </div>
            <p className="text-[28px] font-semibold text-neutral-900">
              {formattedRevenue}
            </p>
            <p className="text-sm text-slate-500">
              ≈ {formattedMembers} newcomers who would’ve churned now book
              repeat classes.
            </p>

            <button
              type="button"
              onClick={handleCTA}
              className="mt-2 flex h-11 w-full items-center justify-center rounded-lg bg-[var(--pink-400)] text-sm font-semibold text-white shadow-[0_12px_20px_rgba(251,113,133,0.25)] transition hover:bg-[var(--pink-300)] hover:shadow-[0_14px_24px_rgba(251,113,133,0.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pink-400)] cursor-pointer"
            >
              Retain {formattedRevenue}/month
            </button>

            <button
              type="button"
              onClick={() => setAssumptionsOpen(true)}
              className="mt-4 block w-full text-center text-sm font-medium text-[var(--pink-500)] underline-offset-4 transition hover:text-[var(--pink-400)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pink-400)] cursor-pointer"
            >
              How is this calculated?
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {assumptionsOpen && (
          <AssumptionsDialog
            key="assumptions"
            onClose={() => setAssumptionsOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default FitGridCalculator;
