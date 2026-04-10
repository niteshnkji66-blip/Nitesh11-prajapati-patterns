import { PatternCategory } from "../backend.d";
import { CATEGORY_LABELS } from "../types/patterns";

interface PatternBadgeProps {
  category: PatternCategory;
  size?: "sm" | "md";
}

const CATEGORY_STYLES: Record<PatternCategory, string> = {
  [PatternCategory.bullish_reversal]:
    "bg-[oklch(0.92_0.08_150)] text-[oklch(0.35_0.18_150)] border border-[oklch(0.75_0.14_150)]",
  [PatternCategory.bearish_reversal]:
    "bg-[oklch(0.95_0.06_25)] text-[oklch(0.38_0.22_25)] border border-[oklch(0.78_0.18_25)]",
  [PatternCategory.bullish_continuation]:
    "bg-[oklch(0.9_0.06_150)] text-[oklch(0.32_0.16_150)] border border-[oklch(0.72_0.12_150)]",
  [PatternCategory.bearish_continuation]:
    "bg-[oklch(0.95_0.05_25)] text-[oklch(0.4_0.2_25)] border border-[oklch(0.8_0.16_25)]",
  [PatternCategory.indecision]:
    "bg-muted text-muted-foreground border border-border",
};

const SIZE_STYLES = {
  sm: "text-[10px] px-1.5 py-0.5 font-medium tracking-wide",
  md: "text-xs px-2.5 py-1 font-semibold tracking-wide",
};

export function PatternBadge({ category, size = "md" }: PatternBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full uppercase ${SIZE_STYLES[size]} ${CATEGORY_STYLES[category]}`}
      data-ocid="pattern-badge"
    >
      {CATEGORY_LABELS[category]}
    </span>
  );
}
