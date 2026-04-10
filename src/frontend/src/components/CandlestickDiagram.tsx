import { FormationType, PatternCategory } from "../backend.d";

interface CandleSpec {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  bullish: boolean;
}

interface CandlestickDiagramProps {
  patternId: string;
  category: PatternCategory;
  formationType: FormationType;
  size?: "sm" | "md" | "lg";
}

// Coordinate system: Y=0 is top, Y=100 is bottom (candle body coords)
const BULLISH_COLOR = "oklch(0.52 0.18 150)";
const BEARISH_COLOR = "oklch(0.52 0.22 25)";
const NEUTRAL_COLOR = "oklch(0.5 0.01 230)";

function CandleShape({
  candle,
  width = 16,
}: { candle: CandleSpec; width?: number }) {
  const color = candle.bullish ? BULLISH_COLOR : BEARISH_COLOR;
  const bodyTop = Math.min(candle.open, candle.close);
  const bodyBottom = Math.max(candle.open, candle.close);
  const bodyHeight = Math.max(bodyBottom - bodyTop, 2);
  const midX = candle.x + width / 2;

  return (
    <g>
      {/* Wick */}
      <line
        x1={midX}
        y1={candle.high}
        x2={midX}
        y2={candle.low}
        stroke={color}
        strokeWidth={1.5}
      />
      {/* Body */}
      <rect
        x={candle.x}
        y={bodyTop}
        width={width}
        height={bodyHeight}
        fill={color}
        rx={1}
      />
    </g>
  );
}

function DojiShape({
  x,
  y,
  width = 14,
}: { x: number; y: number; width?: number }) {
  const midX = x + width / 2;
  return (
    <g>
      <line
        x1={midX}
        y1={y - 22}
        x2={midX}
        y2={y + 22}
        stroke={NEUTRAL_COLOR}
        strokeWidth={1.5}
      />
      <rect
        x={x}
        y={y - 2}
        width={width}
        height={4}
        fill={NEUTRAL_COLOR}
        rx={1}
      />
    </g>
  );
}

// Pattern configurations: each pattern id maps to candle specs within 100x80 viewBox
const PATTERN_CANDLES: Record<string, CandleSpec[]> = {
  // Single bullish reversal patterns
  hammer: [{ x: 35, open: 35, close: 25, high: 22, low: 70, bullish: true }],
  inverted_hammer: [
    { x: 35, open: 55, close: 45, high: 20, low: 58, bullish: true },
  ],
  bullish_marubozu: [
    { x: 35, open: 65, close: 15, high: 15, low: 65, bullish: true },
  ],
  dragonfly_doji: [
    { x: 35, open: 30, close: 30, high: 28, low: 72, bullish: true },
  ],
  spinning_top_bullish: [
    { x: 35, open: 45, close: 35, high: 22, low: 58, bullish: true },
  ],

  // Single bearish reversal
  hanging_man: [
    { x: 35, open: 25, close: 35, high: 22, low: 70, bullish: false },
  ],
  shooting_star: [
    { x: 35, open: 55, close: 65, high: 15, low: 58, bullish: false },
  ],
  bearish_marubozu: [
    { x: 35, open: 15, close: 65, high: 15, low: 65, bullish: false },
  ],
  gravestone_doji: [
    { x: 35, open: 58, close: 58, high: 18, low: 60, bullish: false },
  ],
  spinning_top_bearish: [
    { x: 35, open: 35, close: 45, high: 22, low: 58, bullish: false },
  ],

  // Two-candle bullish
  bullish_engulfing: [
    { x: 18, open: 30, close: 50, high: 25, low: 55, bullish: false },
    { x: 46, open: 55, close: 22, high: 18, low: 58, bullish: true },
  ],
  piercing_line: [
    { x: 18, open: 28, close: 58, high: 22, low: 62, bullish: false },
    { x: 46, open: 62, close: 35, high: 30, low: 65, bullish: true },
  ],
  bullish_harami: [
    { x: 16, open: 25, close: 65, high: 20, low: 70, bullish: false },
    { x: 46, open: 55, close: 38, high: 33, low: 58, bullish: true },
  ],
  tweezer_bottom: [
    { x: 18, open: 30, close: 60, high: 25, low: 65, bullish: false },
    { x: 46, open: 55, close: 28, high: 22, low: 65, bullish: true },
  ],
  on_neck: [
    { x: 18, open: 25, close: 55, high: 20, low: 58, bullish: false },
    { x: 46, open: 60, close: 50, high: 44, low: 62, bullish: true },
  ],

  // Two-candle bearish
  bearish_engulfing: [
    { x: 18, open: 55, close: 30, high: 25, low: 58, bullish: true },
    { x: 46, open: 22, close: 60, high: 18, low: 65, bullish: false },
  ],
  dark_cloud_cover: [
    { x: 18, open: 55, close: 25, high: 20, low: 58, bullish: true },
    { x: 46, open: 18, close: 45, high: 15, low: 50, bullish: false },
  ],
  bearish_harami: [
    { x: 16, open: 65, close: 22, high: 18, low: 68, bullish: true },
    { x: 46, open: 32, close: 52, high: 28, low: 55, bullish: false },
  ],
  tweezer_top: [
    { x: 18, open: 58, close: 28, high: 22, low: 62, bullish: true },
    { x: 46, open: 25, close: 55, high: 22, low: 58, bullish: false },
  ],

  // Three-candle bullish
  morning_star: [
    { x: 8, open: 28, close: 52, high: 24, low: 55, bullish: false },
    { x: 36, open: 58, close: 55, high: 50, low: 62, bullish: true },
    { x: 64, open: 55, close: 25, high: 20, low: 58, bullish: true },
  ],
  three_white_soldiers: [
    { x: 8, open: 62, close: 45, high: 42, low: 65, bullish: true },
    { x: 36, open: 50, close: 30, high: 27, low: 52, bullish: true },
    { x: 64, open: 35, close: 18, high: 15, low: 38, bullish: true },
  ],
  morning_doji_star: [
    { x: 8, open: 28, close: 52, high: 24, low: 55, bullish: false },
    { x: 36, open: 58, close: 58, high: 50, low: 65, bullish: true },
    { x: 64, open: 55, close: 25, high: 20, low: 58, bullish: true },
  ],
  bullish_abandoned_baby: [
    { x: 8, open: 28, close: 55, high: 24, low: 58, bullish: false },
    { x: 36, open: 65, close: 65, high: 58, low: 70, bullish: true },
    { x: 64, open: 55, close: 25, high: 20, low: 58, bullish: true },
  ],
  three_inside_up: [
    { x: 8, open: 25, close: 65, high: 20, low: 68, bullish: false },
    { x: 36, open: 55, close: 38, high: 33, low: 58, bullish: true },
    { x: 64, open: 42, close: 18, high: 15, low: 45, bullish: true },
  ],

  // Three-candle bearish
  evening_star: [
    { x: 8, open: 55, close: 30, high: 25, low: 58, bullish: true },
    { x: 36, open: 24, close: 22, high: 18, low: 28, bullish: true },
    { x: 64, open: 28, close: 55, high: 24, low: 58, bullish: false },
  ],
  three_black_crows: [
    { x: 8, open: 18, close: 38, high: 15, low: 42, bullish: false },
    { x: 36, open: 35, close: 55, high: 32, low: 58, bullish: false },
    { x: 64, open: 52, close: 68, high: 48, low: 72, bullish: false },
  ],
  evening_doji_star: [
    { x: 8, open: 55, close: 28, high: 24, low: 58, bullish: true },
    { x: 36, open: 22, close: 22, high: 15, low: 28, bullish: false },
    { x: 64, open: 28, close: 55, high: 24, low: 58, bullish: false },
  ],
  bearish_abandoned_baby: [
    { x: 8, open: 55, close: 28, high: 24, low: 58, bullish: true },
    { x: 36, open: 20, close: 20, high: 14, low: 26, bullish: false },
    { x: 64, open: 28, close: 58, high: 24, low: 62, bullish: false },
  ],
  three_inside_down: [
    { x: 8, open: 65, close: 25, high: 20, low: 68, bullish: true },
    { x: 36, open: 35, close: 52, high: 30, low: 55, bullish: false },
    { x: 64, open: 48, close: 65, high: 44, low: 68, bullish: false },
  ],

  // Continuation patterns
  rising_three_methods: [
    { x: 4, open: 62, close: 28, high: 24, low: 65, bullish: true },
    { x: 26, open: 35, close: 42, high: 32, low: 45, bullish: false },
    { x: 44, open: 38, close: 44, high: 35, low: 48, bullish: false },
    { x: 62, open: 36, close: 45, high: 32, low: 48, bullish: false },
    { x: 80, open: 48, close: 18, high: 15, low: 52, bullish: true },
  ],
  falling_three_methods: [
    { x: 4, open: 28, close: 65, high: 24, low: 68, bullish: false },
    { x: 26, open: 55, close: 48, high: 44, low: 58, bullish: true },
    { x: 44, open: 52, close: 45, high: 42, low: 55, bullish: true },
    { x: 62, open: 50, close: 42, high: 38, low: 52, bullish: true },
    { x: 80, open: 42, close: 72, high: 38, low: 75, bullish: false },
  ],
  upside_gap_two_crows: [
    { x: 18, open: 58, close: 28, high: 24, low: 62, bullish: true },
    { x: 46, open: 22, close: 32, high: 18, low: 35, bullish: false },
  ],
  mat_hold: [
    { x: 4, open: 62, close: 28, high: 24, low: 65, bullish: true },
    { x: 26, open: 35, close: 44, high: 30, low: 48, bullish: false },
    { x: 46, open: 40, close: 46, high: 36, low: 50, bullish: false },
    { x: 66, open: 44, close: 22, high: 18, low: 48, bullish: true },
  ],

  // Indecision
  doji: [], // special rendering
  long_legged_doji: [],
  four_price_doji: [],
};

function buildCandlesForPattern(
  patternId: string,
  category: PatternCategory,
  formationType: FormationType,
): CandleSpec[] | "doji" {
  const key = patternId.toLowerCase().replace(/-/g, "_");
  if (PATTERN_CANDLES[key] !== undefined) {
    if (PATTERN_CANDLES[key].length === 0) return "doji";
    return PATTERN_CANDLES[key];
  }

  // Fallback based on category + formation
  const isBullish =
    category === PatternCategory.bullish_reversal ||
    category === PatternCategory.bullish_continuation;

  if (category === PatternCategory.indecision) return "doji";

  if (formationType === FormationType.single) {
    return [
      {
        x: 35,
        open: isBullish ? 60 : 20,
        close: isBullish ? 20 : 60,
        high: 12,
        low: 68,
        bullish: isBullish,
      },
    ];
  }
  if (formationType === FormationType.two_candle) {
    return isBullish
      ? [
          { x: 18, open: 28, close: 55, high: 22, low: 58, bullish: false },
          { x: 50, open: 58, close: 22, high: 18, low: 62, bullish: true },
        ]
      : [
          { x: 18, open: 55, close: 25, high: 20, low: 58, bullish: true },
          { x: 50, open: 20, close: 58, high: 16, low: 62, bullish: false },
        ];
  }
  if (formationType === FormationType.three_candle) {
    return isBullish
      ? [
          { x: 8, open: 28, close: 55, high: 22, low: 58, bullish: false },
          { x: 36, open: 58, close: 55, high: 50, low: 62, bullish: true },
          { x: 64, open: 52, close: 22, high: 18, low: 55, bullish: true },
        ]
      : [
          { x: 8, open: 55, close: 28, high: 22, low: 58, bullish: true },
          { x: 36, open: 22, close: 25, high: 18, low: 28, bullish: false },
          { x: 64, open: 28, close: 58, high: 22, low: 62, bullish: false },
        ];
  }
  // multi
  return isBullish
    ? [
        { x: 4, open: 62, close: 28, high: 24, low: 65, bullish: true },
        { x: 26, open: 35, close: 45, high: 30, low: 48, bullish: false },
        { x: 48, open: 42, close: 50, high: 38, low: 53, bullish: false },
        { x: 70, open: 46, close: 18, high: 14, low: 50, bullish: true },
      ]
    : [
        { x: 4, open: 28, close: 62, high: 24, low: 65, bullish: false },
        { x: 26, open: 55, close: 48, high: 44, low: 58, bullish: true },
        { x: 48, open: 50, close: 42, high: 38, low: 52, bullish: true },
        { x: 70, open: 46, close: 72, high: 42, low: 75, bullish: false },
      ];
}

const SIZE_MAP = {
  sm: { width: 60, height: 60, vb: "0 0 100 100" },
  md: { width: 88, height: 80, vb: "0 0 100 90" },
  lg: { width: 140, height: 120, vb: "0 0 100 90" },
};

export function CandlestickDiagram({
  patternId,
  category,
  formationType,
  size = "md",
}: CandlestickDiagramProps) {
  const { width, height, vb } = SIZE_MAP[size];
  const result = buildCandlesForPattern(patternId, category, formationType);

  return (
    <svg
      width={width}
      height={height}
      viewBox={vb}
      role="img"
      aria-label={`Candlestick diagram for ${patternId}`}
      className="shrink-0"
    >
      <title>{`Candlestick diagram for ${patternId}`}</title>
      {/* Grid lines */}
      {[20, 40, 60, 80].map((y) => (
        <line
          key={`grid-${y}`}
          x1={0}
          y1={y}
          x2={100}
          y2={y}
          stroke="currentColor"
          strokeOpacity={0.06}
          strokeWidth={0.8}
        />
      ))}

      {result === "doji" ? (
        <DojiShape x={43} y={45} width={14} />
      ) : (
        (result as CandleSpec[]).map((c, idx) => (
          <CandleShape
            key={`candle-${idx}-${c.x}`}
            candle={c}
            width={formationType === FormationType.multi_candle ? 14 : 16}
          />
        ))
      )}
    </svg>
  );
}
