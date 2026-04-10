export { FormationType, PatternCategory, Reliability } from "../backend.d";
export type { Pattern } from "../backend.d";

export const CATEGORY_LABELS: Record<string, string> = {
  bullish_reversal: "Bullish Reversal",
  bearish_reversal: "Bearish Reversal",
  bullish_continuation: "Bullish Continuation",
  bearish_continuation: "Bearish Continuation",
  indecision: "Indecision",
};

export const FORMATION_LABELS: Record<string, string> = {
  single: "Single Candle",
  two_candle: "Two Candle",
  three_candle: "Three Candle",
  multi_candle: "Multi Candle",
};

export const RELIABILITY_LABELS: Record<string, string> = {
  high: "High Reliability",
  medium: "Medium Reliability",
  low: "Low Reliability",
};
