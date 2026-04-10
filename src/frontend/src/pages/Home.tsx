import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Brain,
  ChevronRight,
  Layers,
  LineChart,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { FormationType, PatternCategory, Reliability } from "../backend.d";
import type { Pattern } from "../backend.d";
import { CandlestickDiagram } from "../components/CandlestickDiagram";
import { PatternBadge } from "../components/PatternBadge";

const FEATURED_PATTERNS: Pattern[] = [
  {
    id: "doji",
    name: "Doji",
    category: PatternCategory.indecision,
    formationType: FormationType.single,
    shortDescription:
      "Open and close at nearly the same level, forming a cross shape. Signals market indecision at critical turning points.",
    formation:
      "Open equals or nearly equals close. Wicks extend both above and below.",
    psychology:
      "Neither buyers nor sellers gained control — equilibrium and indecision in the market.",
    strategy:
      "Wait for directional confirmation from the next candle before acting.",
    reliability: Reliability.medium,
    warnings:
      "Doji alone is not actionable. Always wait for the next candle to confirm direction.",
  },
  {
    id: "hammer",
    name: "Hammer",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.single,
    shortDescription:
      "A single candle with a small body and long lower shadow, forming at the bottom of a downtrend.",
    formation:
      "Small real body at the top of the trading range with a lower shadow at least 2x the body length.",
    psychology:
      "Sellers pushed price down but buyers stepped in strongly, closing near the open.",
    strategy:
      "Enter long on the next candle's open with a stop below the hammer's low.",
    reliability: Reliability.high,
    warnings:
      "Requires confirmation from the next candle. More reliable with high volume.",
  },
  {
    id: "bullish_engulfing",
    name: "Bullish Engulfing",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.two_candle,
    shortDescription:
      "A large bullish candle that completely engulfs the prior bearish candle's body.",
    formation:
      "Second bullish candle's body fully covers the first bearish candle's body.",
    psychology:
      "Buyers overpower sellers with overwhelming force, reversing momentum.",
    strategy:
      "Enter long on next open with stop below the bullish candle's low.",
    reliability: Reliability.high,
    warnings:
      "Higher volume on the engulfing candle strengthens the signal significantly.",
  },
  {
    id: "morning_star",
    name: "Morning Star",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.three_candle,
    shortDescription:
      "Three-candle reversal at a downtrend bottom: bearish, small-body, then strong bullish candle.",
    formation:
      "Large bearish candle, followed by a small-bodied candle gapping down, then a large bullish candle.",
    psychology:
      "Bears dominate, then indecision, then bulls take full control signaling trend reversal.",
    strategy:
      "Enter long after the third candle closes. Stop below the middle candle's low.",
    reliability: Reliability.high,
    warnings:
      "Gaps between candles strengthen the signal. Confirm with volume.",
  },
  {
    id: "three_white_soldiers",
    name: "Three White Soldiers",
    category: PatternCategory.bullish_reversal,
    formationType: FormationType.three_candle,
    shortDescription:
      "Three consecutive large bullish candles each closing higher, signaling strong trend reversal.",
    formation:
      "Three long-bodied bullish candles, each opening within the previous body and closing near the high.",
    psychology:
      "Persistent and sustained buying pressure over three sessions signals a major bullish reversal.",
    strategy:
      "Enter long after the third candle confirms. Trail stops below each candle's low.",
    reliability: Reliability.high,
    warnings:
      "Watch for overextension. Candles with very long bodies may signal exhaustion.",
  },
  {
    id: "evening_star",
    name: "Evening Star",
    category: PatternCategory.bearish_reversal,
    formationType: FormationType.three_candle,
    shortDescription:
      "Three-candle top reversal: bullish, small-body star, then strong bearish candle.",
    formation:
      "Large bullish candle, gapping small-body star, then large bearish candle closing into the first.",
    psychology:
      "Bulls drive price up, then hesitation, then bears take full control.",
    strategy:
      "Enter short after third candle. Stop above the middle candle's high.",
    reliability: Reliability.high,
    warnings:
      "More reliable when the star gaps away from both adjacent candles.",
  },
];

const STATS = [
  { icon: Layers, value: "30+", label: "Patterns" },
  { icon: TrendingUp, value: "Bullish & Bearish", label: "Both Directions" },
  { icon: Zap, value: "Beginner to Advanced", label: "All Skill Levels" },
];

const HOW_TO_USE = [
  {
    icon: BookOpen,
    step: "01",
    title: "Browse the Library",
    description:
      "Explore our complete collection of 30+ canonical candlestick patterns, organized by category — bullish reversals, bearish reversals, continuations, and indecision signals.",
  },
  {
    icon: Brain,
    step: "02",
    title: "Study the Formation",
    description:
      "Each pattern includes a detailed SVG diagram, formation rules, and the market psychology behind it. Understand what traders are thinking when these patterns appear.",
  },
  {
    icon: Target,
    step: "03",
    title: "Apply the Strategy",
    description:
      "Learn entry and exit strategies, reliability ratings, and key warnings for each pattern. Build confidence before applying these tools in a live trading environment.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-card border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/4 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <Badge
                variant="secondary"
                className="mb-5 font-body text-xs tracking-widest uppercase px-3 py-1"
              >
                NK Prajapati · Educational Reference
              </Badge>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
                Candlestick{" "}
                <span className="text-primary">Pattern Library</span>{" "}
                <br className="hidden md:block" />
                <span className="text-foreground/70 text-3xl md:text-4xl lg:text-5xl">
                  by NK Prajapati
                </span>
              </h1>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8 max-w-xl">
                A comprehensive visual reference covering all 30+ canonical
                candlestick patterns — formation rules, market psychology, and
                actionable trading strategies for every skill level.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="font-display font-semibold"
                  data-ocid="cta-library"
                >
                  <Link to="/patterns">
                    Browse All Patterns <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-display"
                  data-ocid="cta-how-to"
                >
                  <a href="#how-to-use">
                    How to Use <ChevronRight className="ml-1 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-3 divide-x divide-border">
            {STATS.map(({ icon: Icon, value, label }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="flex flex-col items-center py-4 gap-1 px-2"
              >
                <Icon className="w-5 h-5 text-primary mb-1" />
                <span className="font-display font-bold text-base md:text-xl text-foreground text-center leading-tight">
                  {value}
                </span>
                <span className="text-xs text-muted-foreground font-body tracking-wide text-center">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Patterns */}
      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Essential Patterns
            </h2>
            <p className="text-muted-foreground font-body">
              Start with the most reliable and widely-used candlestick patterns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED_PATTERNS.map((pattern, idx) => (
              <motion.div
                key={pattern.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
              >
                <Link
                  to="/patterns/$patternId"
                  params={{ patternId: pattern.id }}
                  data-ocid="pattern-card"
                >
                  <Card className="h-full hover:shadow-elevated transition-all duration-200 hover:-translate-y-0.5 border-border group cursor-pointer">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-muted group-hover:bg-muted/70 transition-colors duration-200">
                          <CandlestickDiagram
                            patternId={pattern.id}
                            category={pattern.category}
                            formationType={pattern.formationType}
                            size="sm"
                          />
                        </div>
                        <PatternBadge category={pattern.category} size="sm" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-1.5 group-hover:text-primary transition-colors duration-200">
                        {pattern.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body line-clamp-2 leading-relaxed">
                        {pattern.shortDescription}
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={`text-[10px] font-medium capitalize ${
                            pattern.reliability === Reliability.high
                              ? "border-[oklch(0.75_0.14_150)] text-[oklch(0.42_0.16_150)]"
                              : pattern.reliability === Reliability.medium
                                ? "border-[oklch(0.78_0.14_60)] text-[oklch(0.45_0.14_60)]"
                                : "border-border text-muted-foreground"
                          }`}
                        >
                          {pattern.reliability} reliability
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-display"
              data-ocid="cta-all-patterns"
            >
              <Link to="/patterns">
                View All 30+ Patterns <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section
        id="how-to-use"
        className="bg-muted/30 border-t border-border py-16 md:py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              How to Use This Library
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Three simple steps to get the most out of this educational
              reference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_TO_USE.map(({ icon: Icon, step, title, description }, idx) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
              >
                <Card className="h-full border-border bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-display text-xs font-bold text-primary/60 tracking-widest uppercase">
                        Step {step}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-background border-t border-border py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
              <LineChart className="w-7 h-7 text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Ready to learn all 30+ patterns?
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Explore the complete candlestick pattern library — from simple
              single-candle signals to complex multi-candle formations. Every
              pattern includes diagrams, psychology, and strategy notes.
            </p>
            <Button
              asChild
              size="lg"
              className="font-display font-semibold px-8"
              data-ocid="cta-footer-library"
            >
              <Link to="/patterns">
                Explore Full Library <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Educational disclaimer */}
      <section className="bg-muted/20 border-t border-border py-8">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <BookOpen className="w-6 h-6 text-muted-foreground/50 mx-auto mb-2" />
          <p className="text-xs text-muted-foreground font-body leading-relaxed">
            This reference is compiled by{" "}
            <span className="font-semibold">NK Prajapati</span> for educational
            purposes only. Candlestick patterns are technical analysis tools and
            do not guarantee future price movements. Always practice proper risk
            management.
          </p>
        </div>
      </section>
    </div>
  );
}
