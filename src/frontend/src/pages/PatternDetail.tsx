import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, useParams } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  Brain,
  ChevronRight,
  Eye,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { FormationType, PatternCategory, Reliability } from "../backend.d";
import type { Pattern } from "../backend.d";
import { CandlestickDiagram } from "../components/CandlestickDiagram";
import { PatternBadge } from "../components/PatternBadge";
import { usePattern } from "../hooks/use-patterns";
import {
  CATEGORY_LABELS,
  FORMATION_LABELS,
  RELIABILITY_LABELS,
} from "../types/patterns";

// ─── Full Static Pattern Library ──────────────────────────────────────────────
const STATIC_PATTERNS: Record<string, Pattern> = {
  hammer: {
    id: "hammer",
    name: "Hammer",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.single,
    shortDescription:
      "Small body at top with a long lower shadow. Forms at downtrend bottoms.",
    formation:
      "Lower shadow must be at least 2× the real body length. Little or no upper shadow. The candle can be bullish or bearish — color is secondary to the structure.",
    psychology:
      "During the session, sellers pushed the price significantly lower. However, strong buying interest emerged, driving price back up to close near the open. This shows buyers are stepping in to defend the downtrend low.",
    strategy:
      "Wait for confirmation: the next candle should close higher. Enter long at the open of the candle after confirmation. Place stop-loss below the hammer's low. Target the next resistance level.",
    reliability: Reliability.high,
    warnings:
      "Must appear after a clearly defined downtrend. Higher trading volume on the hammer increases reliability. A doji or spinning top in the same position is less reliable.",
  },
  inverted_hammer: {
    id: "inverted_hammer",
    name: "Inverted Hammer",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.single,
    shortDescription:
      "Small body at bottom with long upper shadow, at end of downtrend.",
    formation:
      "Upper shadow is at least 2× the body length. Small real body at the low of the session's range. Appears after a downtrend.",
    psychology:
      "Buyers attempted to push price up significantly but sellers drove it back down. However, the sellers couldn't extend the downtrend further — a sign bearish momentum is exhausting.",
    strategy:
      "Requires confirmation with a bullish candle next session. Enter long after confirmation. Stop below the candle's low.",
    reliability: Reliability.medium,
    warnings:
      "Requires strong confirmation. Less reliable without volume surge. Often confused with shooting star — context (downtrend vs. uptrend) is the differentiator.",
  },
  bullish_marubozu: {
    id: "bullish_marubozu",
    name: "Bullish Marubozu",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.single,
    shortDescription:
      "Full bullish candle with no shadows — complete buyer dominance.",
    formation:
      "Open equals the session low; close equals the session high. No upper or lower wicks at all — bulls controlled every tick from open to close.",
    psychology:
      "Complete bullish control throughout the session. No opportunity for sellers to influence the price. Strongest single-candle bullish signal available.",
    strategy:
      "Enter long at next open. Stop below the marubozu open. Especially powerful when occurring at key support after a downtrend.",
    reliability: Reliability.high,
    warnings:
      "Even more powerful when combined with high volume. More reliable at clear support levels or after significant consolidation periods.",
  },
  spinning_top_bullish: {
    id: "spinning_top_bullish",
    name: "Bullish Spinning Top",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.single,
    shortDescription:
      "Small real body with equal-length upper and lower shadows indicating indecision.",
    formation:
      "Small real body (bullish) centered between near-equal upper and lower wicks. Neither buyers nor sellers dominated the session.",
    psychology:
      "A pause within the existing trend. Neither bulls nor bears could gain control. When appearing after a downtrend, suggests the selling pressure is waning.",
    strategy:
      "Requires confirmation. A bullish candle on the next session confirms the reversal. Stop below the spinning top's low.",
    reliability: Reliability.medium,
    warnings:
      "Never trade in isolation — must have clear trend context. More meaningful near key support levels.",
  },
  dragonfly_doji: {
    id: "dragonfly_doji",
    name: "Dragonfly Doji",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.single,
    shortDescription:
      "Open, high, and close at the top with a very long lower shadow.",
    formation:
      "Open ≈ high ≈ close. Very long lower shadow showing sellers tried and failed to hold the decline.",
    psychology:
      "Bears pushed price to new lows during the session but buyers completely overwhelmed them, pulling price all the way back to the open.",
    strategy:
      "Confirm with next bullish candle. Enter long above the doji high. Most powerful at major support.",
    reliability: Reliability.high,
    warnings:
      "Most powerful at key support levels after a sustained downtrend. Requires bullish confirmation.",
  },
  shooting_star: {
    id: "shooting_star",
    name: "Shooting Star",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.single,
    shortDescription:
      "Small body at bottom with long upper shadow, at uptrend peak.",
    formation:
      "Upper shadow is at least 2× the body length. Small real body near the day's low. Appears at the top of an uptrend. Body can be bullish or bearish.",
    psychology:
      "Buyers drove price sharply higher during the session, but sellers overwhelmed them and crushed the rally, closing near the open. Bears are taking control.",
    strategy:
      "Enter short on confirmation bearish candle. Stop above the shooting star's high. Target the nearest support level.",
    reliability: Reliability.high,
    warnings:
      "Must appear after an uptrend to be valid. Needs confirmation. More reliable with a gap between the star and prior candle.",
  },
  bearish_marubozu: {
    id: "bearish_marubozu",
    name: "Bearish Marubozu",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.single,
    shortDescription:
      "Full bearish candle with no shadows — complete seller dominance.",
    formation:
      "Open equals the session high; close equals the session low. No upper or lower wicks — bears controlled every tick.",
    psychology:
      "Complete bearish dominance from open to close with no recovery attempt. Strongest single-candle bearish signal.",
    strategy:
      "Enter short at next open. Stop above the marubozu open. Powerful at key resistance after an uptrend.",
    reliability: Reliability.high,
    warnings:
      "Even more powerful with high volume. Most reliable at clear resistance levels after extended uptrend.",
  },
  hanging_man: {
    id: "hanging_man",
    name: "Hanging Man",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.single,
    shortDescription:
      "Small body at top with a long lower shadow. Forms at uptrend peaks.",
    formation:
      "Identical structure to the Hammer but appears at the TOP of an uptrend. Lower shadow ≥ 2× body. Small real body at the high.",
    psychology:
      "The long lower shadow warns: sellers managed to push price significantly lower during the session. Even though bulls recovered, the bearish attempt is a warning sign.",
    strategy:
      "Enter short on confirmation bearish candle. Stop above the hanging man's high.",
    reliability: Reliability.high,
    warnings:
      "Context is CRITICAL: Hammer at bottom = bullish. Same candle at top = Hanging Man (bearish). Always check the prior trend direction.",
  },
  gravestone_doji: {
    id: "gravestone_doji",
    name: "Gravestone Doji",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.single,
    shortDescription:
      "Open, low, and close at the bottom with a very long upper shadow.",
    formation:
      "Open ≈ low ≈ close. Very long upper shadow showing bulls tried and failed to hold gains.",
    psychology:
      "Buyers pushed price to new highs during the session but sellers completely overwhelmed them, pulling price all the way back to the open.",
    strategy:
      "Confirm with next bearish candle. Enter short below the doji low. Most powerful at major resistance.",
    reliability: Reliability.high,
    warnings:
      "Most powerful at key resistance levels after sustained uptrend. Requires bearish confirmation candle.",
  },
  spinning_top_bearish: {
    id: "spinning_top_bearish",
    name: "Bearish Spinning Top",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.single,
    shortDescription:
      "Small bearish body with equal wicks — indecision at an uptrend top.",
    formation:
      "Small bearish body with near-equal upper and lower shadows. Open and close are close together. Appears after an uptrend.",
    psychology:
      "Bulls and bears are evenly matched. The bulls that drove the uptrend are losing conviction, making a reversal increasingly likely.",
    strategy:
      "Confirm with the next candle direction. Stop above the candle's high. Best used near strong resistance.",
    reliability: Reliability.medium,
    warnings:
      "Standalone signal is weak. Needs trend context and confirmation. Often precedes a more significant reversal pattern.",
  },
  doji: {
    id: "doji",
    name: "Doji",
    category: PatternCategory.indecision,
    formationType: FormationType.single,
    shortDescription:
      "Open and close at nearly the same level — cross shape. Market indecision.",
    formation:
      "Open equals or nearly equals close. Wicks can extend both above and below. Four varieties: standard, long-legged, gravestone, dragonfly.",
    psychology:
      "A perfect standoff between buyers and sellers. Neither side could gain ground. The market is at a decision point and awaiting a catalyst.",
    strategy:
      "Never trade a doji in isolation. Wait for the next candle to confirm direction. A doji after a long trend is more significant than one during consolidation.",
    reliability: Reliability.medium,
    warnings:
      "Doji alone is never a trading signal. Context, location (support/resistance), and confirmation are all mandatory before acting.",
  },
  long_legged_doji: {
    id: "long_legged_doji",
    name: "Long-Legged Doji",
    category: PatternCategory.indecision,
    formationType: FormationType.single,
    shortDescription:
      "Doji with unusually long upper and lower wicks — extreme indecision.",
    formation:
      "Open ≈ close with very long shadows extending in both directions. The longer the shadows, the more volatile the session was.",
    psychology:
      "Extreme volatility with neither side winning. The market experienced wild swings in both directions before returning to where it started — complete chaos.",
    strategy:
      "Strong reversal signal when appearing at trend extremes. Wait for directional confirmation before entering.",
    reliability: Reliability.medium,
    warnings:
      "The extreme wicks indicate high volatility — stops may need to be wider. Confirmation is essential.",
  },
  four_price_doji: {
    id: "four_price_doji",
    name: "Four Price Doji",
    category: PatternCategory.indecision,
    formationType: FormationType.single,
    shortDescription:
      "Open, high, low, and close are all identical — the rarest doji.",
    formation:
      "A single horizontal line: open = high = low = close. No wick, no body. Occurs in very thin markets.",
    psychology:
      "Perfect market paralysis. No trading activity created range movement. Extremely rare and signals total indecision in low-liquidity conditions.",
    strategy:
      "Rarely actionable on its own. Observe subsequent price action carefully. May indicate an impending volatility expansion.",
    reliability: Reliability.low,
    warnings:
      "Almost never seen in liquid markets. Treat it as a curiosity rather than a reliable signal.",
  },
  bullish_engulfing: {
    id: "bullish_engulfing",
    name: "Bullish Engulfing",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.two_candle,
    shortDescription:
      "Large bullish candle completely engulfs the prior bearish candle.",
    formation:
      "Second (bullish) candle opens below the first (bearish) candle's close and closes above its open. The bullish body completely contains the bearish body.",
    psychology:
      "Sellers were in control but buyers responded with overwhelming force, completely reversing the previous session's losses and more. Strong reversal signal.",
    strategy:
      "Enter long at the open of the next candle. Stop loss below the low of the engulfing candle. The larger the engulfing candle relative to the bearish candle, the stronger the signal.",
    reliability: Reliability.high,
    warnings:
      "Much more reliable with significantly higher volume on the engulfing candle. Best at major support levels or after a prolonged downtrend.",
  },
  bearish_engulfing: {
    id: "bearish_engulfing",
    name: "Bearish Engulfing",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.two_candle,
    shortDescription:
      "Large bearish candle completely engulfs the prior bullish candle.",
    formation:
      "Second (bearish) candle opens above the first (bullish) candle's close and closes below its open. The bearish body completely contains the bullish body.",
    psychology:
      "Buyers were in control but sellers responded with overwhelming force, completely reversing all gains from the prior session. Strong reversal signal.",
    strategy:
      "Enter short at the open of the next candle. Stop above the engulfing candle's high. Target next support level.",
    reliability: Reliability.high,
    warnings:
      "Higher volume on the engulfing candle greatly enhances reliability. Best at major resistance after a prolonged uptrend.",
  },
  piercing_line: {
    id: "piercing_line",
    name: "Piercing Line",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.two_candle,
    shortDescription:
      "Bearish candle followed by a bullish candle closing above the midpoint.",
    formation:
      "Day 1: Bearish candle. Day 2: Opens below Day 1's low, then closes above the midpoint of Day 1's body. Must close above the 50% mark.",
    psychology:
      "Bears seemed to accelerate the downtrend with a gap down, but bulls staged a powerful comeback, wiping out more than half of the previous losses.",
    strategy:
      "Enter long above Day 2's close. Stop below the Day 2 low. Better signal when Day 2 closes in the upper third of Day 1's range.",
    reliability: Reliability.high,
    warnings:
      "The deeper the penetration into Day 1's body, the stronger the signal. Less than 50% penetration is not a valid pattern.",
  },
  dark_cloud_cover: {
    id: "dark_cloud_cover",
    name: "Dark Cloud Cover",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.two_candle,
    shortDescription:
      "Bullish candle followed by a bearish candle that closes below the midpoint.",
    formation:
      "Day 1: Bullish candle. Day 2: Opens above Day 1's high (gap up), then closes below the midpoint of Day 1's body.",
    psychology:
      "After gapping up to new highs, sellers took over and pushed prices below the midpoint of the prior bullish candle — signaling a potential top.",
    strategy:
      "Enter short below Day 2's close. Stop above Day 2's open (gap). Target previous swing low.",
    reliability: Reliability.high,
    warnings:
      "The deeper the close into Day 1's body, the stronger the signal. Works best after an extended uptrend near resistance.",
  },
  bullish_harami: {
    id: "bullish_harami",
    name: "Bullish Harami",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.two_candle,
    shortDescription:
      "Small bullish candle contained within the prior large bearish candle.",
    formation:
      "Day 1: Large bearish candle. Day 2: Small bullish candle whose body is completely inside Day 1's body. (Harami means 'pregnant' in Japanese.)",
    psychology:
      "After a strong bearish session, the market's selling pressure dramatically decreased. The small bullish body inside the large bearish one signals indecision and potential reversal.",
    strategy:
      "Requires confirmation on Day 3. Enter long after confirmation. Stop below Day 1's low.",
    reliability: Reliability.medium,
    warnings:
      "Needs strong confirmation. Less reliable as a standalone signal. A doji as the second candle (Harami Cross) is even more powerful.",
  },
  bearish_harami: {
    id: "bearish_harami",
    name: "Bearish Harami",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.two_candle,
    shortDescription:
      "Small bearish candle contained within the prior large bullish candle.",
    formation:
      "Day 1: Large bullish candle. Day 2: Small bearish candle whose entire body fits inside Day 1's body.",
    psychology:
      "After a dominant bullish day, the market slows dramatically. The small size of Day 2 shows bulls are losing steam, suggesting a potential top.",
    strategy:
      "Confirm with a bearish candle on Day 3. Enter short after confirmation. Stop above Day 1's high.",
    reliability: Reliability.medium,
    warnings:
      "Confirmation is essential. Works best at significant resistance levels after an extended uptrend.",
  },
  tweezer_bottom: {
    id: "tweezer_bottom",
    name: "Tweezer Bottom",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.two_candle,
    shortDescription:
      "Two candles with equal lows at a downtrend bottom — double support test.",
    formation:
      "Two consecutive candles with near-identical lows. Day 1 is bearish, Day 2 is bullish. Both test the same support level and reject it.",
    psychology:
      "The market tested a support level twice and rejected it twice. This double rejection shows strong buying interest at that price, making further declines unlikely.",
    strategy:
      "Enter long above the second candle's high. Stop below the shared low. The more exact the matching lows, the stronger the signal.",
    reliability: Reliability.medium,
    warnings:
      "Best when occurring at known support levels. The pattern is stronger when part of a longer formation or when accompanied by increased volume.",
  },
  tweezer_top: {
    id: "tweezer_top",
    name: "Tweezer Top",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.two_candle,
    shortDescription:
      "Two candles with equal highs at an uptrend top — double resistance test.",
    formation:
      "Two consecutive candles with near-identical highs. Day 1 is bullish, Day 2 is bearish. Both test the same resistance level and fail.",
    psychology:
      "The market tested resistance twice and was rejected twice. Double rejection at the same level indicates strong selling at that price, making further advances unlikely.",
    strategy:
      "Enter short below the second candle's low. Stop above the shared high.",
    reliability: Reliability.medium,
    warnings:
      "Most reliable when appearing at well-known resistance levels. Combined with other indicators, becomes a strong reversal signal.",
  },
  on_neck: {
    id: "on_neck",
    name: "On-Neck Pattern",
    category: PatternCategory.bearish_continuation,
    formationType: FormationType.two_candle,
    shortDescription:
      "Small bullish candle closes at the low of the prior bearish candle.",
    formation:
      "Day 1: Large bearish candle. Day 2: Small bullish candle that opens below Day 1's low and closes at Day 1's close level.",
    psychology:
      "The weak recovery that closes near Day 1's low shows buyers cannot stage a meaningful bounce. This weak buying response suggests the downtrend will resume.",
    strategy:
      "Enter short below Day 2's low. Stop above Day 1's open. The continuation of the downtrend is highly probable.",
    reliability: Reliability.medium,
    warnings:
      "Must occur during a clear downtrend. A close above Day 1's midpoint would invalidate the bearish bias.",
  },
  morning_star: {
    id: "morning_star",
    name: "Morning Star",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.three_candle,
    shortDescription:
      "Three-candle reversal at a downtrend bottom: bearish, small-body, then strong bullish.",
    formation:
      "Day 1: Large bearish candle confirming downtrend. Day 2: Small-body candle (star) gapping below Day 1, showing indecision. Day 3: Large bullish candle closing at least halfway into Day 1's body.",
    psychology:
      "Bears dominate (Day 1), then the market pauses in indecision (Day 2), then bulls surge back with conviction (Day 3). A three-act story of trend reversal.",
    strategy:
      "Enter long after Day 3 closes. Stop loss below the Day 2 (star) low. Gap between Day 2 and adjacent candles strengthens the signal.",
    reliability: Reliability.high,
    warnings:
      "Gaps between the star and adjacent candles make the pattern much more reliable. Confirm with high volume on Day 3.",
  },
  evening_star: {
    id: "evening_star",
    name: "Evening Star",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.three_candle,
    shortDescription:
      "Three-candle top reversal: bullish, small-body star, then strong bearish candle.",
    formation:
      "Day 1: Large bullish candle confirming uptrend. Day 2: Small-body star gapping above Day 1. Day 3: Large bearish candle closing at least halfway into Day 1's body.",
    psychology:
      "Bulls dominate (Day 1), then indecision at the top (Day 2), then bears surge with conviction (Day 3). The three-act reversal story at the top.",
    strategy:
      "Enter short after Day 3 closes. Stop above the Day 2 (star) high. Target next support.",
    reliability: Reliability.high,
    warnings:
      "The star gapping away from both neighbors makes the pattern much stronger. Volume on Day 3 confirms bear conviction.",
  },
  morning_doji_star: {
    id: "morning_doji_star",
    name: "Morning Doji Star",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.three_candle,
    shortDescription:
      "Morning Star variant where the middle candle is a doji — maximum indecision.",
    formation:
      "Day 1: Large bearish candle. Day 2: Doji that gaps below Day 1 (open ≈ close). Day 3: Large bullish candle closing into Day 1's body.",
    psychology:
      "The doji in the middle represents an even cleaner turning point — the market hit a wall and froze completely before bulls surged on Day 3.",
    strategy:
      "Enter long after Day 3 close. Stop below Day 2 doji low. More powerful than Morning Star due to perfect indecision day.",
    reliability: Reliability.high,
    warnings:
      "A rare but highly reliable pattern. Gaps on both sides of the doji are ideal. Best at major support after a downtrend.",
  },
  evening_doji_star: {
    id: "evening_doji_star",
    name: "Evening Doji Star",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.three_candle,
    shortDescription:
      "Evening Star with a doji in the middle — powerful top reversal.",
    formation:
      "Day 1: Large bullish candle. Day 2: Doji gapping above Day 1. Day 3: Large bearish candle closing into Day 1's body.",
    psychology:
      "Bulls dominated (Day 1), the market froze at the peak in perfect equilibrium (Day 2 doji), then bears surged decisively (Day 3). One of the most reliable reversals.",
    strategy:
      "Enter short after Day 3 closes. Stop above Day 2 doji high. Volume confirmation on Day 3 is ideal.",
    reliability: Reliability.high,
    warnings:
      "The doji must gap above Day 1 for maximum reliability. A close candle on Day 2 weakens the signal.",
  },
  three_white_soldiers: {
    id: "three_white_soldiers",
    name: "Three White Soldiers",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.three_candle,
    shortDescription:
      "Three consecutive long bullish candles with ascending closes.",
    formation:
      "Three consecutive long bullish candles. Each opens within the prior candle's body and closes at or near the session high. Ascending closes with small or no upper shadows.",
    psychology:
      "Sustained, methodical buying pressure across three sessions. Bears have no opportunity to recover. Strong institutional buying often behind this pattern.",
    strategy:
      "Enter long on close of third soldier. Stop below first soldier's low. Powerful reversal from downtrend.",
    reliability: Reliability.high,
    warnings:
      "Be aware of overbought conditions if appearing after a very extended move. Better when emerging from consolidation rather than a short-term bounce.",
  },
  three_black_crows: {
    id: "three_black_crows",
    name: "Three Black Crows",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.three_candle,
    shortDescription:
      "Three consecutive long bearish candles with descending closes.",
    formation:
      "Three consecutive long bearish candles. Each opens within the prior body and closes at or near the session low. Descending closes with small or no lower shadows.",
    psychology:
      "Systematic, sustained selling across three sessions. Bulls have no recovery window. Reflects strong institutional selling pressure.",
    strategy:
      "Enter short on close of third crow. Stop above first crow's high. Powerful reversal from uptrend.",
    reliability: Reliability.high,
    warnings:
      "Beware oversold conditions if appearing after an extended move. More powerful when emerging from an extended uptrend at resistance.",
  },
  three_inside_up: {
    id: "three_inside_up",
    name: "Three Inside Up",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.three_candle,
    shortDescription:
      "Bullish Harami confirmed by a third bullish candle closing above Day 1's open.",
    formation:
      "Day 1: Large bearish candle. Day 2: Small bullish candle within Day 1's body (Bullish Harami). Day 3: Bullish candle closing above Day 1's open.",
    psychology:
      "Day 3 confirms the reversal signal of the Bullish Harami. The market has definitively shifted from selling to buying pressure.",
    strategy:
      "Enter long on Day 3 close. Stop below Day 1's low. More reliable than a simple Bullish Harami because Day 3 removes ambiguity.",
    reliability: Reliability.high,
    warnings:
      "A strong and reliable pattern. Most effective after an extended downtrend near key support.",
  },
  three_inside_down: {
    id: "three_inside_down",
    name: "Three Inside Down",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.three_candle,
    shortDescription:
      "Bearish Harami confirmed by a third bearish candle closing below Day 1's open.",
    formation:
      "Day 1: Large bullish candle. Day 2: Small bearish candle within Day 1's body (Bearish Harami). Day 3: Bearish candle closing below Day 1's open.",
    psychology:
      "Day 3 confirms the Bearish Harami signal. The transition from buyer control to seller control is complete.",
    strategy:
      "Enter short on Day 3 close. Stop above Day 1's high. Target next significant support level.",
    reliability: Reliability.high,
    warnings:
      "A confirmed, highly reliable bearish reversal. Best at known resistance levels after an extended uptrend.",
  },
  bullish_abandoned_baby: {
    id: "bullish_abandoned_baby",
    name: "Bullish Abandoned Baby",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.three_candle,
    shortDescription:
      "Rare pattern: bearish candle, then a gapped doji, then a gapped bullish candle.",
    formation:
      "Day 1: Bearish candle. Day 2: Doji that gaps below Day 1 (no overlap in shadows). Day 3: Bullish candle that gaps above the doji (no overlap). The doji is 'abandoned' — isolated from both neighbors.",
    psychology:
      "The complete isolation of the doji via gaps means there was absolutely no market consensus at the turn. This extreme exhaustion of sellers produces one of the most powerful reversal signals in candlestick analysis.",
    strategy:
      "Enter long on Day 3. Stop below the doji's low. Extremely rare but highly reliable.",
    reliability: Reliability.high,
    warnings:
      "Gaps must be true gaps — no shadow overlap with adjacent candles. Without real gaps, the pattern becomes a Morning Doji Star.",
  },
  bearish_abandoned_baby: {
    id: "bearish_abandoned_baby",
    name: "Bearish Abandoned Baby",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.three_candle,
    shortDescription:
      "Rare top-reversal: bullish candle, gapped doji, then gapped bearish candle.",
    formation:
      "Day 1: Bullish candle. Day 2: Doji gapping above Day 1 (no shadow overlap). Day 3: Bearish candle gapping below the doji (no shadow overlap).",
    psychology:
      "Complete isolation of the doji via gaps marks a perfect top. The market hit a ceiling, paused in total equilibrium, then collapsed — one of the strongest reversal patterns.",
    strategy:
      "Enter short on Day 3. Stop above the doji's high. Target previous swing low.",
    reliability: Reliability.high,
    warnings:
      "True gaps are mandatory — any shadow overlap invalidates the pattern. Relatively rare in modern markets due to after-hours trading.",
  },
  rising_three_methods: {
    id: "rising_three_methods",
    name: "Rising Three Methods",
    category: PatternCategory.bullish_continuation,
    formationType: FormationType.multi_candle,
    shortDescription:
      "Long bullish candle, three small bearish candles within its range, then bullish breakout.",
    formation:
      "Day 1: Large bullish candle. Days 2-4: Three small bearish candles contained within Day 1's range (profit-taking). Day 5: Large bullish candle closing above Day 1's close.",
    psychology:
      "Strong uptrend, temporary consolidation/profit-taking that doesn't break the trend, then bulls reassert with new highs. Classic pause-and-continue pattern.",
    strategy:
      "Enter long on Day 5 breakout above Day 1's high. Stop below the lowest point of the three middle candles.",
    reliability: Reliability.high,
    warnings:
      "The three middle candles MUST stay within Day 1's range. If they breach below Day 1's low, the pattern is invalidated.",
  },
  falling_three_methods: {
    id: "falling_three_methods",
    name: "Falling Three Methods",
    category: PatternCategory.bearish_continuation,
    formationType: FormationType.multi_candle,
    shortDescription:
      "Long bearish candle, three small bullish candles within its range, then bearish breakdown.",
    formation:
      "Day 1: Large bearish candle. Days 2-4: Three small bullish candles contained within Day 1's range (relief rally). Day 5: Large bearish candle closing below Day 1's close.",
    psychology:
      "Strong downtrend, brief relief rally that doesn't break the trend, then bears resume with new lows. Confirms the downtrend is intact.",
    strategy:
      "Enter short on Day 5 breakdown below Day 1's low. Stop above the highest of the three middle candles.",
    reliability: Reliability.high,
    warnings:
      "Middle candles must stay within the first candle's range to be valid. Breach of Day 1's high invalidates the pattern.",
  },
  upside_gap_two_crows: {
    id: "upside_gap_two_crows",
    name: "Upside Gap Two Crows",
    category: PatternCategory.bearish_continuation,
    formationType: FormationType.two_candle,
    shortDescription:
      "Two bearish candles that fail to close the gap — bears taking control of an uptrend.",
    formation:
      "Day 1: Bullish candle in uptrend. Day 2: Bearish candle that gaps above Day 1. Day 3: Larger bearish candle engulfing Day 2, still above Day 1.",
    psychology:
      "The gap up shows bull enthusiasm, but two consecutive bearish sessions follow. Bears are progressively taking control even as prices remain elevated.",
    strategy:
      "Enter short if price breaks below Day 1's close on Day 4. Stop above Day 2's high.",
    reliability: Reliability.medium,
    warnings:
      "Most reliable during an established uptrend. Less significant in choppy or sideways markets.",
  },
  mat_hold: {
    id: "mat_hold",
    name: "Mat Hold",
    category: PatternCategory.bullish_continuation,
    formationType: FormationType.multi_candle,
    shortDescription:
      "Bullish candle, brief bearish pullback staying above support, then bullish continuation.",
    formation:
      "Day 1: Large bullish candle. Days 2-4: Three small bearish candles (with a gap up on Day 2) that don't close Day 1's gap. Day 5: Strong bullish candle making new highs.",
    psychology:
      "Strong bull momentum creates a gap. The pullback is orderly and controlled — bears cannot close the gap. Bulls resume with full conviction on Day 5.",
    strategy: "Enter long on Day 5. Stop below the Day 2-4 pullback low.",
    reliability: Reliability.high,
    warnings:
      "The gap on Day 2 is a key distinguishing feature from Rising Three Methods. Without the gap, it is likely a different pattern.",
  },
};

// ─── Related Patterns Logic ────────────────────────────────────────────────────
function getRelatedPatterns(pattern: Pattern): Pattern[] {
  const all = Object.values(STATIC_PATTERNS);
  // Prefer same category, then same formation type
  const sameCategory = all.filter(
    (p) => p.id !== pattern.id && p.category === pattern.category,
  );
  const sameCategoryAndFormation = sameCategory.filter(
    (p) => p.formationType === pattern.formationType,
  );
  const pool =
    sameCategoryAndFormation.length >= 3
      ? sameCategoryAndFormation
      : sameCategory;
  return pool.slice(0, 3);
}

// ─── Reliability Config ────────────────────────────────────────────────────────
const RELIABILITY_CONFIG: Record<
  Reliability,
  { label: string; classes: string; dot: string }
> = {
  [Reliability.high]: {
    label: "High Reliability",
    classes:
      "bg-[oklch(0.92_0.08_150)] text-[oklch(0.32_0.18_150)] border border-[oklch(0.72_0.12_150)]",
    dot: "bg-[oklch(0.52_0.18_150)]",
  },
  [Reliability.medium]: {
    label: "Medium Reliability",
    classes:
      "bg-[oklch(0.94_0.07_65)] text-[oklch(0.42_0.14_65)] border border-[oklch(0.76_0.12_65)]",
    dot: "bg-[oklch(0.62_0.16_65)]",
  },
  [Reliability.low]: {
    label: "Low Reliability",
    classes: "bg-muted text-muted-foreground border border-border",
    dot: "bg-muted-foreground",
  },
};

// ─── Detail Section Config ──────────────────────────────────────────────────────
const DETAIL_SECTIONS = [
  {
    id: "formation" as const,
    label: "Formation Rules",
    icon: Eye,
    accentClass: "text-primary bg-primary/10",
    borderClass: "border-primary/20",
  },
  {
    id: "psychology" as const,
    label: "Market Psychology",
    icon: Brain,
    accentClass: "text-[oklch(0.5_0.15_280)] bg-[oklch(0.95_0.04_280)]",
    borderClass: "border-[oklch(0.82_0.08_280)]",
  },
  {
    id: "strategy" as const,
    label: "Trading Strategy",
    icon: Target,
    accentClass: "text-[oklch(0.42_0.18_150)] bg-[oklch(0.92_0.08_150)]",
    borderClass: "border-[oklch(0.75_0.12_150)]",
  },
  {
    id: "warnings" as const,
    label: "Common Mistakes & Warnings",
    icon: AlertTriangle,
    accentClass: "text-[oklch(0.52_0.18_55)] bg-[oklch(0.94_0.08_65)]",
    borderClass: "border-[oklch(0.78_0.12_65)]",
  },
] as const;

// ─── Skeleton ──────────────────────────────────────────────────────────────────
function DetailSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <Skeleton className="h-4 w-56" />
        </div>
      </div>
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-10 max-w-5xl">
          <Skeleton className="h-8 w-28 mb-6" />
          <div className="grid md:grid-cols-[auto_1fr] gap-10">
            <Skeleton className="w-[220px] h-[220px] rounded-2xl" />
            <div className="space-y-4 pt-2">
              <Skeleton className="h-10 w-72" />
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-20 w-full max-w-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background py-10">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-5">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-40 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Related Pattern Mini-Card ─────────────────────────────────────────────────
function RelatedPatternCard({ pattern }: { pattern: Pattern }) {
  return (
    <Link
      to="/patterns/$patternId"
      params={{ patternId: pattern.id }}
      data-ocid={`related-pattern-${pattern.id}`}
    >
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.18 }}
        className="group flex flex-col items-center gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-pointer"
      >
        <div className="p-4 rounded-xl bg-muted border border-border flex items-center justify-center">
          <CandlestickDiagram
            patternId={pattern.id}
            category={pattern.category}
            formationType={pattern.formationType}
            size="sm"
          />
        </div>
        <div className="text-center min-w-0 w-full">
          <p className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors truncate">
            {pattern.name}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5 font-body line-clamp-2">
            {pattern.shortDescription}
          </p>
        </div>
        <PatternBadge category={pattern.category} size="sm" />
      </motion.div>
    </Link>
  );
}

// ─── 404 State ────────────────────────────────────────────────────────────────
function PatternNotFound({ patternId }: { patternId: string }) {
  return (
    <div
      className="container mx-auto px-4 py-24 text-center max-w-md"
      data-ocid="pattern-not-found"
    >
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6 border border-border">
        <TrendingUp className="w-9 h-9 text-muted-foreground" />
      </div>
      <h2 className="font-display font-bold text-2xl text-foreground mb-3">
        Pattern not found
      </h2>
      <p className="text-muted-foreground font-body mb-8">
        The pattern{" "}
        <span className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded border border-border">
          {patternId}
        </span>{" "}
        doesn't exist in our library.
      </p>
      <Button asChild variant="outline" data-ocid="not-found-back">
        <Link to="/patterns">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Pattern Library
        </Link>
      </Button>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function PatternDetail() {
  const { patternId } = useParams({ from: "/patterns/$patternId" });
  const { data: backendPattern, isLoading } = usePattern(patternId);

  const pattern: Pattern | null =
    backendPattern ?? STATIC_PATTERNS[patternId] ?? null;

  if (isLoading && !pattern) return <DetailSkeleton />;
  if (!pattern) return <PatternNotFound patternId={patternId} />;

  const relatedPatterns = getRelatedPatterns(pattern);
  const reliabilityConfig = RELIABILITY_CONFIG[pattern.reliability];

  return (
    <div>
      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-3 max-w-5xl">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-muted-foreground font-body flex-wrap"
          >
            <Link
              to="/"
              className="hover:text-foreground transition-colors duration-200"
              data-ocid="breadcrumb-home"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-50" />
            <Link
              to="/patterns"
              className="hover:text-foreground transition-colors duration-200"
              data-ocid="breadcrumb-library"
            >
              Pattern Library
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-50" />
            <span className="text-foreground font-medium truncate max-w-[200px]">
              {pattern.name}
            </span>
          </nav>
        </div>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-10 max-w-5xl">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="-ml-2 mb-8 text-muted-foreground hover:text-foreground"
            data-ocid="back-btn"
          >
            <Link to="/patterns">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Library
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="grid md:grid-cols-[auto_1fr] gap-10 items-start"
          >
            {/* Diagram block */}
            <div className="flex flex-col items-center gap-4">
              <div
                className="p-8 rounded-2xl bg-background border border-border shadow-sm flex items-center justify-center"
                data-ocid="pattern-diagram"
                style={{ minWidth: 160 }}
              >
                <CandlestickDiagram
                  patternId={pattern.id}
                  category={pattern.category}
                  formationType={pattern.formationType}
                  size="lg"
                />
              </div>

              {/* Badges beneath diagram */}
              <div className="flex flex-col items-center gap-2">
                <PatternBadge category={pattern.category} />

                <Badge
                  variant="outline"
                  className="text-xs capitalize font-body"
                  data-ocid="formation-badge"
                >
                  {FORMATION_LABELS[pattern.formationType]}
                </Badge>
              </div>
            </div>

            {/* Title + meta + description */}
            <div className="min-w-0">
              {/* Category label in muted text */}
              <p className="text-xs uppercase tracking-widest font-body text-muted-foreground mb-2">
                {CATEGORY_LABELS[pattern.category]}
              </p>

              <h1
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4"
                data-ocid="pattern-name"
              >
                {pattern.name}
              </h1>

              <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed mb-6 max-w-xl">
                {pattern.shortDescription}
              </p>

              {/* Reliability indicator */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs text-muted-foreground font-body uppercase tracking-wide">
                  Signal Reliability:
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold font-body ${reliabilityConfig.classes}`}
                  data-ocid="reliability-indicator"
                >
                  <span
                    className={`w-2 h-2 rounded-full ${reliabilityConfig.dot}`}
                  />
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  {RELIABILITY_LABELS[pattern.reliability]}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Detail Sections ──────────────────────────────────────────────── */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-5">
            {DETAIL_SECTIONS.map(
              ({ id, label, icon: Icon, accentClass, borderClass }, idx) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.09 }}
                >
                  <Card
                    className="h-full border-border shadow-sm hover:shadow-md transition-shadow duration-200"
                    data-ocid={`section-${id}`}
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2.5 text-sm font-display font-semibold">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${accentClass}`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <span className={`border-b pb-0.5 ${borderClass}`}>
                          {label}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground font-body leading-relaxed">
                        {pattern[id]}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── Related Patterns ────────────────────────────────────────────── */}
      {relatedPatterns.length > 0 && (
        <section className="bg-muted/40 border-t border-border py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <h2 className="font-display font-bold text-lg text-foreground">
                      Related Patterns
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground font-body">
                    Similar patterns in the{" "}
                    <span className="font-medium">
                      {CATEGORY_LABELS[pattern.category]}
                    </span>{" "}
                    category
                  </p>
                </div>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                  data-ocid="view-all-related"
                >
                  <Link to="/patterns">
                    View full library
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </Button>
              </div>

              <div
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                data-ocid="related-patterns-grid"
              >
                {relatedPatterns.map((related, idx) => (
                  <motion.div
                    key={related.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.1 }}
                  >
                    <RelatedPatternCard pattern={related} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Footer Bar ──────────────────────────────────────────────────── */}
      <div className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-5 max-w-5xl flex items-center justify-between flex-wrap gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            data-ocid="footer-back-btn"
          >
            <Link to="/patterns">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Pattern Library
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground font-body">
            Educational candlestick reference by{" "}
            <span className="font-medium text-foreground">NK Prajapati</span>
          </p>
        </div>
      </div>
    </div>
  );
}
