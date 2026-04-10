import { c as createLucideIcon, j as jsxRuntimeExports, L as Link, T as TrendingUp, B as BookOpen } from "./index-XR9C81Ts.js";
import { m as motion, B as Badge, a as Button, R as Reliability, F as FormationType, P as PatternCategory, C as Card, b as CardContent, c as CandlestickDiagram, d as PatternBadge } from "./PatternBadge-BxQZFxAa.js";
import { C as ChevronRight, B as Brain, T as Target } from "./target-Jx5Fz48I.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
];
const ChartLine = createLucideIcon("chart-line", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
];
const Layers = createLucideIcon("layers", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const FEATURED_PATTERNS = [
  {
    id: "doji",
    name: "Doji",
    category: PatternCategory.indecision,
    formationType: FormationType.single,
    shortDescription: "Open and close at nearly the same level, forming a cross shape. Signals market indecision at critical turning points.",
    formation: "Open equals or nearly equals close. Wicks extend both above and below.",
    psychology: "Neither buyers nor sellers gained control — equilibrium and indecision in the market.",
    strategy: "Wait for directional confirmation from the next candle before acting.",
    reliability: Reliability.medium,
    warnings: "Doji alone is not actionable. Always wait for the next candle to confirm direction."
  },
  {
    id: "hammer",
    name: "Hammer",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.single,
    shortDescription: "A single candle with a small body and long lower shadow, forming at the bottom of a downtrend.",
    formation: "Small real body at the top of the trading range with a lower shadow at least 2x the body length.",
    psychology: "Sellers pushed price down but buyers stepped in strongly, closing near the open.",
    strategy: "Enter long on the next candle's open with a stop below the hammer's low.",
    reliability: Reliability.high,
    warnings: "Requires confirmation from the next candle. More reliable with high volume."
  },
  {
    id: "bullish_engulfing",
    name: "Bullish Engulfing",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.two_candle,
    shortDescription: "A large bullish candle that completely engulfs the prior bearish candle's body.",
    formation: "Second bullish candle's body fully covers the first bearish candle's body.",
    psychology: "Buyers overpower sellers with overwhelming force, reversing momentum.",
    strategy: "Enter long on next open with stop below the bullish candle's low.",
    reliability: Reliability.high,
    warnings: "Higher volume on the engulfing candle strengthens the signal significantly."
  },
  {
    id: "morning_star",
    name: "Morning Star",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.three_candle,
    shortDescription: "Three-candle reversal at a downtrend bottom: bearish, small-body, then strong bullish candle.",
    formation: "Large bearish candle, followed by a small-bodied candle gapping down, then a large bullish candle.",
    psychology: "Bears dominate, then indecision, then bulls take full control signaling trend reversal.",
    strategy: "Enter long after the third candle closes. Stop below the middle candle's low.",
    reliability: Reliability.high,
    warnings: "Gaps between candles strengthen the signal. Confirm with volume."
  },
  {
    id: "three_white_soldiers",
    name: "Three White Soldiers",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.three_candle,
    shortDescription: "Three consecutive large bullish candles each closing higher, signaling strong trend reversal.",
    formation: "Three long-bodied bullish candles, each opening within the previous body and closing near the high.",
    psychology: "Persistent and sustained buying pressure over three sessions signals a major bullish reversal.",
    strategy: "Enter long after the third candle confirms. Trail stops below each candle's low.",
    reliability: Reliability.high,
    warnings: "Watch for overextension. Candles with very long bodies may signal exhaustion."
  },
  {
    id: "evening_star",
    name: "Evening Star",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.three_candle,
    shortDescription: "Three-candle top reversal: bullish, small-body star, then strong bearish candle.",
    formation: "Large bullish candle, gapping small-body star, then large bearish candle closing into the first.",
    psychology: "Bulls drive price up, then hesitation, then bears take full control.",
    strategy: "Enter short after third candle. Stop above the middle candle's high.",
    reliability: Reliability.high,
    warnings: "More reliable when the star gaps away from both adjacent candles."
  }
];
const STATS = [
  { icon: Layers, value: "30+", label: "Patterns" },
  { icon: TrendingUp, value: "Bullish & Bearish", label: "Both Directions" },
  { icon: Zap, value: "Beginner to Advanced", label: "All Skill Levels" }
];
const HOW_TO_USE = [
  {
    icon: BookOpen,
    step: "01",
    title: "Browse the Library",
    description: "Explore our complete collection of 30+ canonical candlestick patterns, organized by category — bullish reversals, bearish reversals, continuations, and indecision signals."
  },
  {
    icon: Brain,
    step: "02",
    title: "Study the Formation",
    description: "Each pattern includes a detailed SVG diagram, formation rules, and the market psychology behind it. Understand what traders are thinking when these patterns appear."
  },
  {
    icon: Target,
    step: "03",
    title: "Apply the Strategy",
    description: "Learn entry and exit strategies, reliability ratings, and key warnings for each pattern. Build confidence before applying these tools in a live trading environment."
  }
];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-card border-b border-border overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/4 blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "secondary",
                className: "mb-5 font-body text-xs tracking-widest uppercase px-3 py-1",
                children: "NK Prajapati · Educational Reference"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5", children: [
              "Candlestick",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Pattern Library" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:block" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/70 text-3xl md:text-4xl lg:text-5xl", children: "by NK Prajapati" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground font-body leading-relaxed mb-8 max-w-xl", children: "A comprehensive visual reference covering all 30+ canonical candlestick patterns — formation rules, market psychology, and actionable trading strategies for every skill level." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  size: "lg",
                  className: "font-display font-semibold",
                  "data-ocid": "cta-library",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/patterns", children: [
                    "Browse All Patterns ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  variant: "outline",
                  size: "lg",
                  className: "font-display",
                  "data-ocid": "cta-how-to",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#how-to-use", children: [
                    "How to Use ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-1 w-4 h-4" })
                  ] })
                }
              )
            ] })
          ]
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 divide-x divide-border", children: STATS.map(({ icon: Icon, value, label }, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: idx * 0.08 },
        className: "flex flex-col items-center py-4 gap-1 px-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary mb-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-base md:text-xl text-foreground text-center leading-tight", children: value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-body tracking-wide text-center", children: label })
        ]
      },
      label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "mb-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-2", children: "Essential Patterns" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body", children: "Start with the most reliable and widely-used candlestick patterns" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: FEATURED_PATTERNS.map((pattern, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: idx * 0.07 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/patterns/$patternId",
              params: { patternId: pattern.id },
              "data-ocid": "pattern-card",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full hover:shadow-elevated transition-all duration-200 hover:-translate-y-0.5 border-border group cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 rounded-lg bg-muted group-hover:bg-muted/70 transition-colors duration-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-1.5 group-hover:text-primary transition-colors duration-200", children: pattern.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body line-clamp-2 leading-relaxed", children: pattern.shortDescription }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "outline",
                    className: `text-[10px] font-medium capitalize ${pattern.reliability === Reliability.high ? "border-[oklch(0.75_0.14_150)] text-[oklch(0.42_0.16_150)]" : pattern.reliability === Reliability.medium ? "border-[oklch(0.78_0.14_60)] text-[oklch(0.45_0.14_60)]" : "border-border text-muted-foreground"}`,
                    children: [
                      pattern.reliability,
                      " reliability"
                    ]
                  }
                ) })
              ] }) })
            }
          )
        },
        pattern.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          asChild: true,
          variant: "outline",
          size: "lg",
          className: "font-display",
          "data-ocid": "cta-all-patterns",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/patterns", children: [
            "View All 30+ Patterns ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
          ] })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "how-to-use",
        className: "bg-muted/30 border-t border-border py-16 md:py-20",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "mb-12 text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-2", children: "How to Use This Library" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body max-w-xl mx-auto", children: "Three simple steps to get the most out of this educational reference" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: HOW_TO_USE.map(({ icon: Icon, step, title, description }, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.45, delay: idx * 0.1 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xs font-bold text-primary/60 tracking-widest uppercase", children: [
                    "Step ",
                    step
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-2", children: title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body leading-relaxed", children: description })
              ] }) })
            },
            step
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background border-t border-border py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "max-w-2xl mx-auto text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartLine, { className: "w-7 h-7 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-3", children: "Ready to learn all 30+ patterns?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body mb-8 leading-relaxed", children: "Explore the complete candlestick pattern library — from simple single-candle signals to complex multi-candle formations. Every pattern includes diagrams, psychology, and strategy notes." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              size: "lg",
              className: "font-display font-semibold px-8",
              "data-ocid": "cta-footer-library",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/patterns", children: [
                "Explore Full Library ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
              ] })
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 border-t border-border py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-6 h-6 text-muted-foreground/50 mx-auto mb-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-body leading-relaxed", children: [
        "This reference is compiled by",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "NK Prajapati" }),
        " for educational purposes only. Candlestick patterns are technical analysis tools and do not guarantee future price movements. Always practice proper risk management."
      ] })
    ] }) })
  ] });
}
export {
  Home as default
};
