import { c as createLucideIcon, j as jsxRuntimeExports, a as cn, u as useNavigate, b as useSearch, r as reactExports, B as BookOpen, X, S as Skeleton, L as Link } from "./index-XR9C81Ts.js";
import { R as Reliability, F as FormationType, P as PatternCategory, B as Badge, a as Button, m as motion, C as Card, b as CardContent, c as CandlestickDiagram, d as PatternBadge, e as FORMATION_LABELS, f as RELIABILITY_LABELS } from "./PatternBadge-BxQZFxAa.js";
import { u as usePatterns } from "./use-patterns-D8IWowrm.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
];
const LayoutGrid = createLucideIcon("layout-grid", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
];
const List = createLucideIcon("list", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
const STATIC_PATTERNS = [
  // Single Bullish Reversal
  {
    id: "hammer",
    name: "Hammer",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.single,
    shortDescription: "Small body at top with a long lower shadow. Forms at downtrend bottoms.",
    formation: "Lower shadow ≥ 2× body length. Little or no upper shadow.",
    psychology: "Sellers pushed price down but buyers drove it back up before close.",
    strategy: "Buy confirmation candle. Stop below hammer low.",
    reliability: Reliability.high,
    warnings: "Needs uptrend confirmation candle. Volume adds confidence."
  },
  {
    id: "inverted_hammer",
    name: "Inverted Hammer",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.single,
    shortDescription: "Small body at bottom with long upper shadow, at end of downtrend.",
    formation: "Upper shadow ≥ 2× body. Small real body at the low of the range.",
    psychology: "Buyers tried to push price up but lost ground; however, sellers couldn't extend losses.",
    strategy: "Confirm with next bullish candle before entering long.",
    reliability: Reliability.medium,
    warnings: "Requires confirmation. Less reliable than hammer without gap."
  },
  {
    id: "bullish_marubozu",
    name: "Bullish Marubozu",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.single,
    shortDescription: "Full bullish candle with no shadows — complete buyer dominance.",
    formation: "Open = low, close = high. No upper or lower wicks.",
    psychology: "Bulls controlled the session from open to close with no pullback.",
    strategy: "Enter long immediately. Stop below the open of the marubozu.",
    reliability: Reliability.high,
    warnings: "Most effective when appearing after a downtrend or consolidation."
  },
  {
    id: "dragonfly_doji",
    name: "Dragonfly Doji",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.single,
    shortDescription: "Open, high, and close at the top with a very long lower shadow.",
    formation: "Open ≈ high ≈ close. Very long lower shadow.",
    psychology: "Sellers tried to push price down hard but buyers recovered all losses.",
    strategy: "Confirm with next bullish candle. Enter on close above doji high.",
    reliability: Reliability.high,
    warnings: "Most powerful at major support levels after a sustained downtrend."
  },
  {
    id: "spinning_top_bullish",
    name: "Spinning Top (Bullish)",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.single,
    shortDescription: "Small body with equal upper and lower shadows at downtrend bottom.",
    formation: "Small real body. Upper and lower shadows roughly equal in length.",
    psychology: "Neither buyers nor sellers won the session — momentum is waning.",
    strategy: "Wait for next candle to confirm bullish direction before entering.",
    reliability: Reliability.low,
    warnings: "Weak signal alone. Needs confirmation and trend context."
  },
  // Single Bearish Reversal
  {
    id: "hanging_man",
    name: "Hanging Man",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.single,
    shortDescription: "Small body at top with a long lower shadow. Forms at uptrend peaks.",
    formation: "Lower shadow ≥ 2× body. Small real body at the high of the range.",
    psychology: "Sellers pushed price down but bulls recovered; however, bearish warning issued.",
    strategy: "Enter short on next bearish confirmation candle. Stop above the high.",
    reliability: Reliability.high,
    warnings: "Looks like hammer but appears at the top of an uptrend. Context is critical."
  },
  {
    id: "shooting_star",
    name: "Shooting Star",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.single,
    shortDescription: "Small body at bottom with long upper shadow, at uptrend peak.",
    formation: "Upper shadow ≥ 2× body. Small body near the day's low.",
    psychology: "Buyers pushed price up sharply but sellers crushed the rally.",
    strategy: "Enter short on close below the next bearish candle. Stop above the star high.",
    reliability: Reliability.high,
    warnings: "Needs confirmation. More reliable with gap from prior candle."
  },
  {
    id: "bearish_marubozu",
    name: "Bearish Marubozu",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.single,
    shortDescription: "Full bearish candle with no shadows — complete seller dominance.",
    formation: "Open = high, close = low. No upper or lower wicks.",
    psychology: "Bears controlled the session completely from open to close.",
    strategy: "Enter short immediately. Stop above the open of the marubozu.",
    reliability: Reliability.high,
    warnings: "Most effective when appearing after an uptrend or consolidation period."
  },
  {
    id: "gravestone_doji",
    name: "Gravestone Doji",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.single,
    shortDescription: "Open, low, and close at the bottom with a long upper shadow.",
    formation: "Open ≈ low ≈ close. Very long upper shadow.",
    psychology: "Buyers pushed price high but sellers pulled it all the way back to the open.",
    strategy: "Confirm with bearish candle. Enter short below the doji low.",
    reliability: Reliability.high,
    warnings: "Most powerful at resistance levels after a sustained uptrend."
  },
  {
    id: "spinning_top_bearish",
    name: "Spinning Top (Bearish)",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.single,
    shortDescription: "Small body with equal wicks at uptrend peak — indecision warning.",
    formation: "Small real body at the high of an uptrend. Equal upper and lower shadows.",
    psychology: "Bulls are losing dominance — balance between buyers and sellers forming.",
    strategy: "Wait for bearish confirmation before shorting.",
    reliability: Reliability.low,
    warnings: "Very weak signal alone. Only valuable within a broader bearish context."
  },
  // Two-Candle Bullish
  {
    id: "bullish_engulfing",
    name: "Bullish Engulfing",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.two_candle,
    shortDescription: "Large bullish candle completely engulfs the prior bearish candle.",
    formation: "Second candle's body fully covers first candle's body. Opposite colors.",
    psychology: "Buyers overwhelm sellers with force — strong trend reversal signal.",
    strategy: "Enter long next open. Stop below the engulfing candle's low.",
    reliability: Reliability.high,
    warnings: "Higher volume on the engulfing candle makes the signal much stronger."
  },
  {
    id: "piercing_line",
    name: "Piercing Line",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.two_candle,
    shortDescription: "Bearish candle followed by bullish candle that closes above the midpoint.",
    formation: "Bullish candle opens below prior close and closes above the 50% midpoint.",
    psychology: "Initial selling is overcome by buyers who push price through the halfway point.",
    strategy: "Enter long after the piercing candle closes. Stop below its low.",
    reliability: Reliability.medium,
    warnings: "Must close above 50% of prior candle. Less reliable if it doesn't."
  },
  {
    id: "bullish_harami",
    name: "Bullish Harami",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.two_candle,
    shortDescription: "Small bullish candle completely contained within the prior large bearish candle.",
    formation: "Second candle's body is fully inside the first bearish candle's body.",
    psychology: "Strong selling gives way to hesitation — bearish momentum stalling.",
    strategy: "Wait for third candle confirmation before entering long.",
    reliability: Reliability.medium,
    warnings: "Weaker signal than engulfing. Needs confirmation candle for reliability."
  },
  {
    id: "tweezer_bottom",
    name: "Tweezer Bottom",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.two_candle,
    shortDescription: "Two candles with matching lows at a downtrend bottom — strong support level.",
    formation: "Two consecutive candles with equal or near-equal low prices.",
    psychology: "Price tested the same support twice without breaking it, confirming strong demand.",
    strategy: "Enter long above the second candle's high. Stop below the shared low.",
    reliability: Reliability.high,
    warnings: "More reliable at key support levels with high volume confirmation."
  },
  // Two-Candle Bearish
  {
    id: "bearish_engulfing",
    name: "Bearish Engulfing",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.two_candle,
    shortDescription: "Large bearish candle completely engulfs the prior bullish candle.",
    formation: "Second bearish candle body covers entire prior bullish candle body.",
    psychology: "Sellers overwhelm buyers with decisive force — strong reversal signal.",
    strategy: "Enter short on next open. Stop above the engulfing candle's high.",
    reliability: Reliability.high,
    warnings: "Most reliable with high volume and at major resistance levels."
  },
  {
    id: "dark_cloud_cover",
    name: "Dark Cloud Cover",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.two_candle,
    shortDescription: "Bearish candle that opens above prior close and closes below the midpoint.",
    formation: "Opens above prior high, closes below the 50% midpoint of prior bullish candle.",
    psychology: "Bullish momentum reverses as sellers overpower buyers and drive price down.",
    strategy: "Enter short after dark cloud closes. Stop above the candle's high.",
    reliability: Reliability.medium,
    warnings: "Must close below 50% of prior bullish candle to be valid."
  },
  {
    id: "bearish_harami",
    name: "Bearish Harami",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.two_candle,
    shortDescription: "Small bearish candle contained within the prior large bullish candle.",
    formation: "Second candle's body is fully inside the first bullish candle's body.",
    psychology: "Bullish momentum stalls as selling pressure emerges within prior range.",
    strategy: "Wait for confirmation candle before entering short.",
    reliability: Reliability.medium,
    warnings: "Weaker signal requiring confirmation. Context is very important."
  },
  {
    id: "tweezer_top",
    name: "Tweezer Top",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.two_candle,
    shortDescription: "Two candles with matching highs at an uptrend peak — strong resistance level.",
    formation: "Two consecutive candles reach the same or nearly equal high prices.",
    psychology: "Price failed to break the same resistance twice, confirming supply zone.",
    strategy: "Enter short below the second candle's low. Stop above the shared high.",
    reliability: Reliability.high,
    warnings: "More reliable at key resistance levels with volume confirmation."
  },
  // Three-Candle Bullish
  {
    id: "morning_star",
    name: "Morning Star",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.three_candle,
    shortDescription: "Three-candle reversal at a downtrend bottom: bearish, small-body, then strong bullish.",
    formation: "Large bearish, gapping small-body star, large bullish closing into first candle.",
    psychology: "Bears dominate, then indecision, then bulls take full decisive control.",
    strategy: "Enter long after third candle closes. Stop below middle candle low.",
    reliability: Reliability.high,
    warnings: "Gaps between candles strengthen the signal. More reliable with high volume."
  },
  {
    id: "three_white_soldiers",
    name: "Three White Soldiers",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.three_candle,
    shortDescription: "Three consecutive long bullish candles with ascending closes.",
    formation: "Each candle opens within prior body and closes at a new high.",
    psychology: "Sustained, methodical buying pressure overcoming persistent selling.",
    strategy: "Enter on close of third soldier. Stop below first soldier's low.",
    reliability: Reliability.high,
    warnings: "Beware of overbought conditions. Better when appearing after consolidation."
  },
  {
    id: "morning_doji_star",
    name: "Morning Doji Star",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.three_candle,
    shortDescription: "Variation of Morning Star where the middle candle is a doji.",
    formation: "Bearish candle, doji star, then strong bullish candle closing into first.",
    psychology: "Doji shows complete indecision after bearish move — then bulls surge.",
    strategy: "Enter long after the third candle confirms. Strong reversal signal.",
    reliability: Reliability.high,
    warnings: "Stronger than regular morning star due to doji's indecision signal."
  },
  {
    id: "three_inside_up",
    name: "Three Inside Up",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.three_candle,
    shortDescription: "Bullish harami followed by a confirming bullish candle closing above the first.",
    formation: "Large bearish, small bullish harami inside it, then bullish candle closing above day one.",
    psychology: "Downtrend pauses, bulls counter, then completely confirm reversal.",
    strategy: "Enter long on third candle close. Very reliable reversal confirmation.",
    reliability: Reliability.high,
    warnings: "One of the most reliable three-candle reversals. Confirmed harami pattern."
  },
  {
    id: "bullish_abandoned_baby",
    name: "Bullish Abandoned Baby",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.three_candle,
    shortDescription: "Doji gapping below prior bearish candle, then bullish candle gapping above doji.",
    formation: "Gap down doji followed by gap up bullish candle — no price overlap.",
    psychology: "Complete gap isolation of the star shows dramatic reversal of sentiment.",
    strategy: "Enter long immediately after third candle. Very rare, highly reliable.",
    reliability: Reliability.high,
    warnings: "Extremely rare pattern. Requires actual price gaps — not just inside bars."
  },
  // Three-Candle Bearish
  {
    id: "evening_star",
    name: "Evening Star",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.three_candle,
    shortDescription: "Three-candle top reversal: bullish, small-body star, then strong bearish candle.",
    formation: "Large bullish, gapping small-body star, large bearish closing into first candle.",
    psychology: "Bulls drive up, hesitation, then bears take complete decisive control.",
    strategy: "Enter short after third candle. Stop above middle candle high.",
    reliability: Reliability.high,
    warnings: "More reliable when the star gaps away from both adjacent candles."
  },
  {
    id: "three_black_crows",
    name: "Three Black Crows",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.three_candle,
    shortDescription: "Three consecutive long bearish candles with descending closes.",
    formation: "Each candle opens within prior body and closes at a new low.",
    psychology: "Sustained, methodical selling overwhelms buyers across three sessions.",
    strategy: "Enter short on close of third crow. Stop above first crow's high.",
    reliability: Reliability.high,
    warnings: "Beware oversold conditions. Better with high volume on all three candles."
  },
  {
    id: "evening_doji_star",
    name: "Evening Doji Star",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.three_candle,
    shortDescription: "Evening Star variation where the middle candle is a doji.",
    formation: "Bullish candle, gap up doji, then strong bearish candle closing into first.",
    psychology: "Doji's complete indecision at the top is a strong reversal warning.",
    strategy: "Enter short after third candle confirmation. Strong top reversal signal.",
    reliability: Reliability.high,
    warnings: "Stronger than regular evening star. Doji amplifies the indecision signal."
  },
  {
    id: "three_inside_down",
    name: "Three Inside Down",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.three_candle,
    shortDescription: "Bearish harami followed by a confirming bearish candle closing below the first.",
    formation: "Large bullish, small bearish harami inside, then bearish candle closing below day one.",
    psychology: "Uptrend pauses, bears counter, then completely confirm the reversal.",
    strategy: "Enter short on third candle close. Highly reliable confirmed reversal.",
    reliability: Reliability.high,
    warnings: "One of the most reliable bearish three-candle patterns. Confirmed harami."
  },
  {
    id: "bearish_abandoned_baby",
    name: "Bearish Abandoned Baby",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.three_candle,
    shortDescription: "Doji gapping above prior bullish candle, then bearish candle gapping below.",
    formation: "Gap up doji, then gap down bearish candle — no price overlap at all.",
    psychology: "Complete gap isolation signals dramatic, sudden reversal of bullish sentiment.",
    strategy: "Enter short immediately after third candle. Extremely rare, very reliable.",
    reliability: Reliability.high,
    warnings: "Requires actual price gaps. Very rare. Consider it a near-certain reversal signal."
  },
  // Bearish Continuation Two-Candle
  {
    id: "upside_gap_two_crows",
    name: "Upside Gap Two Crows",
    category: PatternCategory.bearish_continuation,
    formationType: FormationType.two_candle,
    shortDescription: "Two bearish candles that fail to close the gap — bears taking control of an uptrend.",
    formation: "Day 1: Bullish candle in uptrend. Day 2: Bearish candle gapping above Day 1. Day 3: Larger bearish candle engulfing Day 2, still above Day 1.",
    psychology: "Gap up shows bull enthusiasm, but two consecutive bearish sessions follow. Bears progressively take control while prices stay elevated.",
    strategy: "Enter short if price breaks below Day 1's close on Day 4. Stop above Day 2's high.",
    reliability: Reliability.medium,
    warnings: "Most reliable during an established uptrend. Less significant in choppy or sideways markets."
  },
  // Continuation
  {
    id: "rising_three_methods",
    name: "Rising Three Methods",
    category: PatternCategory.bullish_continuation,
    formationType: FormationType.multi_candle,
    shortDescription: "Long bullish candle, three small bearish candles within its range, then bullish breakout.",
    formation: "Large bull candle, 3 small bearish candles contained within it, then new bull high.",
    psychology: "Short-term profit taking within a strong uptrend before bulls resume control.",
    strategy: "Enter long on breakout above the first candle's high. Trend continuation.",
    reliability: Reliability.high,
    warnings: "The three middle candles must stay within the first candle's range."
  },
  {
    id: "falling_three_methods",
    name: "Falling Three Methods",
    category: PatternCategory.bearish_continuation,
    formationType: FormationType.multi_candle,
    shortDescription: "Long bearish candle, three small bullish candles within its range, then bearish breakdown.",
    formation: "Large bear candle, 3 small bullish candles within its range, then new bear low.",
    psychology: "Brief relief rally within a strong downtrend before bears resume selling.",
    strategy: "Enter short on breakdown below the first candle's low. Trend continuation.",
    reliability: Reliability.high,
    warnings: "Middle candles must stay within the first candle's range to be valid."
  },
  {
    id: "mat_hold",
    name: "Mat Hold",
    category: PatternCategory.bullish_continuation,
    formationType: FormationType.multi_candle,
    shortDescription: "Bullish candle, three-day pullback that holds above the first candle's low, then bullish breakout.",
    formation: "Large bull candle, small pullback candles above first open, then continuation.",
    psychology: "Strong uptrend pauses briefly without relinquishing significant ground.",
    strategy: "Enter long on the final continuation candle. Tight stop below the pattern low.",
    reliability: Reliability.high,
    warnings: "Distinguishes itself from Rising Three Methods by gap after first candle."
  },
  {
    id: "on_neck",
    name: "On-Neck Pattern",
    category: PatternCategory.bearish_continuation,
    formationType: FormationType.two_candle,
    shortDescription: "Bearish candle followed by a small bullish candle closing near the prior close.",
    formation: "Second candle closes at or near the low of the first bearish candle.",
    psychology: "Bulls briefly respond but fail to make meaningful progress — bears maintain control.",
    strategy: "Enter short when price breaks below the second candle's low.",
    reliability: Reliability.medium,
    warnings: "Requires trend context. Confusion with piercing line is common — check close level."
  },
  // Indecision
  {
    id: "doji",
    name: "Doji",
    category: PatternCategory.indecision,
    formationType: FormationType.single,
    shortDescription: "Open and close at nearly the same level — cross shape. Market indecision.",
    formation: "Open ≈ close. Wicks extend both above and below the body.",
    psychology: "Neither buyers nor sellers could gain control during the session.",
    strategy: "Wait for directional confirmation from the next candle before acting.",
    reliability: Reliability.medium,
    warnings: "Never trade a doji alone. Context and confirmation are mandatory."
  },
  {
    id: "long_legged_doji",
    name: "Long-Legged Doji",
    category: PatternCategory.indecision,
    formationType: FormationType.single,
    shortDescription: "Doji with unusually long upper and lower wicks — extreme indecision.",
    formation: "Open ≈ close with very long upper and lower shadows.",
    psychology: "Wild swings in both directions with neither side maintaining control.",
    strategy: "Strong reversal signal when appearing at trend extremes. Confirm next candle.",
    reliability: Reliability.medium,
    warnings: "The longer the shadows, the more volatile and uncertain the market is."
  },
  {
    id: "four_price_doji",
    name: "Four-Price Doji",
    category: PatternCategory.indecision,
    formationType: FormationType.single,
    shortDescription: "Open, high, low, and close all at the same price — complete market stasis.",
    formation: "All four prices are equal. No shadows whatsoever.",
    psychology: "Extremely rare. Market completely frozen — no movement in either direction.",
    strategy: "Usually indicates extremely low volume or trading halt. No trade signal.",
    reliability: Reliability.low,
    warnings: "Very rare outside low-liquidity situations. Generally not tradeable."
  }
];
const TOTAL_PATTERNS = STATIC_PATTERNS.length;
const CATEGORY_TABS = [
  { value: "all", label: "All" },
  { value: PatternCategory.bullish_reversal, label: "Bullish Reversal" },
  { value: PatternCategory.bearish_reversal, label: "Bearish Reversal" },
  {
    value: PatternCategory.bullish_continuation,
    label: "Bullish Continuation"
  },
  {
    value: PatternCategory.bearish_continuation,
    label: "Bearish Continuation"
  },
  { value: PatternCategory.indecision, label: "Indecision" }
];
const FORMATION_TABS = [
  { value: "all", label: "All" },
  { value: FormationType.single, label: "Single" },
  { value: FormationType.two_candle, label: "Two Candle" },
  { value: FormationType.three_candle, label: "Three Candle" },
  { value: FormationType.multi_candle, label: "Multi Candle" }
];
function ReliabilityBadge({ reliability }) {
  const colors = reliability === Reliability.high ? "border-[oklch(0.75_0.14_150)] text-[oklch(0.38_0.16_150)] bg-[oklch(0.97_0.04_150)]" : reliability === Reliability.medium ? "border-[oklch(0.78_0.14_60)] text-[oklch(0.42_0.14_60)] bg-[oklch(0.97_0.04_60)]" : "border-border text-muted-foreground bg-muted/50";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[10px] capitalize ${colors}`, children: RELIABILITY_LABELS[reliability] });
}
function PatternCard({ pattern, view }) {
  if (view === "list") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/patterns/$patternId",
        params: { patternId: pattern.id },
        "data-ocid": "pattern-list-row",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "hover:shadow-elevated hover:border-primary/30 transition-all duration-200 border-border group cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 rounded-lg bg-muted shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CandlestickDiagram,
            {
              patternId: pattern.id,
              category: pattern.category,
              formationType: pattern.formationType,
              size: "sm"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground group-hover:text-primary transition-colors duration-200 truncate", children: pattern.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(PatternBadge, { category: pattern.category, size: "sm" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body line-clamp-1", children: pattern.shortDescription })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 hidden sm:flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] capitalize", children: FORMATION_LABELS[pattern.formationType] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ReliabilityBadge, { reliability: pattern.reliability })
          ] })
        ] }) })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: "/patterns/$patternId",
      params: { patternId: pattern.id },
      "data-ocid": "pattern-grid-card",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full hover:shadow-elevated hover:border-primary/30 transition-all duration-200 hover:-translate-y-0.5 border-border group cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 rounded-lg bg-muted group-hover:bg-muted/70 transition-colors duration-200 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CandlestickDiagram,
            {
              patternId: pattern.id,
              category: pattern.category,
              formationType: pattern.formationType,
              size: "sm"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PatternBadge, { category: pattern.category, size: "sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground mb-1.5 group-hover:text-primary transition-colors duration-200", children: pattern.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body line-clamp-2 leading-relaxed mb-3", children: pattern.shortDescription }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] capitalize", children: FORMATION_LABELS[pattern.formationType] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ReliabilityBadge, { reliability: pattern.reliability })
        ] })
      ] }) })
    }
  );
}
function FilterTabs({
  options,
  value,
  onChange,
  label,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-wrap", "aria-label": label, children: options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: () => onChange(opt.value),
      "data-ocid": `${ocid}-${opt.value}`,
      className: `px-3 py-1.5 rounded-full text-xs font-body font-medium transition-all duration-200 border whitespace-nowrap ${value === opt.value ? "bg-primary text-primary-foreground border-primary shadow-sm" : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"}`,
      children: opt.label
    },
    opt.value
  )) });
}
function PatternLibrary() {
  const navigate = useNavigate();
  const urlParams = useSearch({ strict: false });
  const urlSearch = urlParams.q ?? "";
  const urlCategory = urlParams.category ?? "all";
  const urlFormation = urlParams.formation ?? "all";
  const [search, setSearch] = reactExports.useState(urlSearch);
  const [categoryFilter, setCategoryFilter] = reactExports.useState(urlCategory);
  const [formationFilter, setFormationFilter] = reactExports.useState(urlFormation);
  const [view, setView] = reactExports.useState("grid");
  const { data: backendPatterns, isLoading } = usePatterns();
  const patterns = backendPatterns && backendPatterns.length > 0 ? backendPatterns : STATIC_PATTERNS;
  function handleSearchChange(value) {
    setSearch(value);
    void navigate({
      to: "/patterns",
      search: {
        q: value || void 0,
        category: categoryFilter !== "all" ? categoryFilter : void 0,
        formation: formationFilter !== "all" ? formationFilter : void 0
      },
      replace: true
    }).catch(() => {
    });
  }
  function handleCategoryChange(value) {
    setCategoryFilter(value);
    void navigate({
      to: "/patterns",
      search: {
        q: search || void 0,
        category: value !== "all" ? value : void 0,
        formation: formationFilter !== "all" ? formationFilter : void 0
      },
      replace: true
    }).catch(() => {
    });
  }
  function handleFormationChange(value) {
    setFormationFilter(value);
    void navigate({
      to: "/patterns",
      search: {
        q: search || void 0,
        category: categoryFilter !== "all" ? categoryFilter : void 0,
        formation: value !== "all" ? value : void 0
      },
      replace: true
    }).catch(() => {
    });
  }
  const filtered = reactExports.useMemo(() => {
    return patterns.filter((p) => {
      const matchSearch = search === "" || p.name.toLowerCase().includes(search.toLowerCase()) || p.shortDescription.toLowerCase().includes(search.toLowerCase());
      const matchCategory = categoryFilter === "all" || p.category === categoryFilter;
      const matchFormation = formationFilter === "all" || p.formationType === formationFilter;
      return matchSearch && matchCategory && matchFormation;
    });
  }, [patterns, search, categoryFilter, formationFilter]);
  const hasActiveFilters = search !== "" || categoryFilter !== "all" || formationFilter !== "all";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-10 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-6 h-6 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold text-foreground", children: "All Candlestick Patterns" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary/10 text-primary border-primary/20 font-body font-semibold", children: [
            TOTAL_PATTERNS,
            "+ Patterns"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground font-body max-w-2xl leading-relaxed", children: [
          "The complete canonical library — formation rules, market psychology, and trading strategies for every major candlestick pattern. Curated by",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "NK Prajapati" }),
          " ",
          "as an educational reference."
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border sticky top-16 z-30 shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterTabs,
      {
        options: CATEGORY_TABS,
        value: categoryFilter,
        onChange: handleCategoryChange,
        label: "Filter by category",
        ocid: "cat-tab"
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 items-stretch sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Search patterns...",
              value: search,
              onChange: (e) => handleSearchChange(e.target.value),
              className: "pl-9 h-9 font-body",
              "data-ocid": "search-input"
            }
          ),
          search && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => handleSearchChange(""),
              className: "absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded text-muted-foreground hover:text-foreground transition-colors",
              "aria-label": "Clear search",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-body flex items-center gap-1 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-3 h-3" }),
            "Formation:"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FilterTabs,
            {
              options: FORMATION_TABS,
              value: formationFilter,
              onChange: handleFormationChange,
              label: "Filter by formation type",
              ocid: "form-tab"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border border-border rounded-md overflow-hidden shrink-0 ml-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: view === "grid" ? "secondary" : "ghost",
              size: "sm",
              className: "rounded-none h-9 px-2.5",
              onClick: () => setView("grid"),
              "aria-label": "Grid view",
              "data-ocid": "view-grid",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: view === "list" ? "secondary" : "ghost",
              size: "sm",
              className: "rounded-none h-9 px-2.5 border-l border-border",
              onClick: () => setView("list"),
              "aria-label": "List view",
              "data-ocid": "view-list",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body", children: isLoading ? "Loading patterns…" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Showing",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: filtered.length }),
          " ",
          "of",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
            patterns.length,
            "+"
          ] }),
          " ",
          "patterns"
        ] }) }),
        hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              setSearch("");
              setCategoryFilter("all");
              setFormationFilter("all");
              void navigate({
                to: "/patterns",
                search: {},
                replace: true
              }).catch(() => {
              });
            },
            className: "text-xs text-primary hover:text-primary/80 font-body font-medium flex items-center gap-1 transition-colors",
            "data-ocid": "clear-filters",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }),
              "Clear all filters"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-8 min-h-[400px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" : "flex flex-col gap-3",
        children: ["a", "b", "c", "d", "e", "f", "g", "h"].map((id) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Skeleton,
          {
            className: view === "grid" ? "h-52 rounded-xl" : "h-20 rounded-xl"
          },
          `sk-${id}`
        ))
      }
    ) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "text-center py-20",
        "data-ocid": "empty-state",
        initial: { opacity: 0, scale: 0.96 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.3 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4 border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-7 h-7 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-2 text-lg", children: "No patterns found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm mb-6 max-w-xs mx-auto", children: "Try adjusting your search query or clearing the active filters to browse all patterns." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: () => {
                setSearch("");
                setCategoryFilter("all");
                setFormationFilter("all");
                void navigate({
                  to: "/patterns",
                  search: {},
                  replace: true
                }).catch(() => {
                });
              },
              "data-ocid": "empty-clear-filters",
              children: "Clear all filters"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" : "flex flex-col gap-3",
        children: filtered.map((pattern, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 14 },
            animate: { opacity: 1, y: 0 },
            transition: {
              duration: 0.28,
              delay: Math.min(idx * 0.035, 0.5),
              ease: [0.25, 0.1, 0.25, 1]
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PatternCard, { pattern, view })
          },
          pattern.id
        ))
      }
    ) }) })
  ] });
}
export {
  PatternLibrary as default
};
