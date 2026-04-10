# Design Brief

## Direction

Educational Knowledge Base — a clean, searchable reference library for candlestick trading patterns with visual diagrams and market psychology insights.

## Tone

Academic-editorial credibility with refined typography and calm blue undertones; accessible and approachable, not intimidating or overly technical.

## Differentiation

Integrated candlestick diagrams (green bullish, red bearish) directly on pattern cards create a visual-first learning experience; type badges and consistent semantic coloring reduce cognitive load.

## Color Palette

| Token      | OKLCH             | Role                                |
| ---------- | ----------------- | ----------------------------------- |
| background | 0.98 0.008 230    | Clean off-white, cool undertone     |
| foreground | 0.18 0.015 230    | Deep navy-grey, high contrast       |
| card       | 1.0 0.004 230     | Pure white, elevated surface        |
| primary    | 0.42 0.14 240     | Deep ocean blue, trust & finance    |
| accent     | 0.6 0.15 170      | Cool teal, secondary highlights     |
| muted      | 0.94 0.01 230     | Soft grey, disabled/tertiary        |
| success    | 0.55 0.18 150     | Green for bullish candles           |
| destructive| 0.55 0.22 25      | Red for bearish candles             |

## Typography

- Display: Space Grotesk — geometric, modern, pattern names and section headings
- Body: Figtree — warm and readable, descriptions and pattern details
- Scale: hero `text-4xl md:text-5xl font-bold tracking-tight`, h2 `text-2xl md:text-3xl font-bold`, label `text-xs font-semibold tracking-widest uppercase`, body `text-base leading-relaxed`

## Elevation & Depth

Cards elevated with subtle shadow (1-3px offset) on white background; muted sections use 40% opacity background for subtle layering without visual chaos.

## Structural Zones

| Zone    | Background            | Border              | Notes                                    |
| ------- | --------------------- | ------------------- | ---------------------------------------- |
| Header  | `bg-primary/5`        | `border-b` primary  | Site title + NK Prajapati attribution    |
| Content | `bg-background`       | —                   | Pattern grid with alternating muted rows |
| Footer  | `bg-muted/30`         | `border-t` border   | Reference links and educational note     |

## Spacing & Rhythm

Spacious breathing room: 2rem gaps between sections, 1rem padding inside cards, 0.5rem micro-spacing for inline elements; pattern grid uses 3 columns on desktop, 1 on mobile.

## Component Patterns

- Buttons: primary blue, subtle hover lift, medium roundness (8px), semantic focus ring
- Cards: 8px radius, white background, shadow-subtle on hover
- Badges: type badges (Reversal/Continuation) use primary/accent colors with 12% opacity background, rounded-full

## Motion

- Entrance: cards fade in (300ms) on page load via staggered animation
- Hover: cards lift 2px with shadow-elevated transition on 200ms easing
- Decorative: none (educational context favors clarity over motion)

## Constraints

- No decorative gradients or blur effects; maintain clarity for educational focus
- Chart colors must support red/green semantics: chart-1 (green), chart-5 (red)
- Ensure search input and pattern cards are keyboard-accessible with visible focus states
- All text must maintain AA+ contrast in both light and dark modes

## Signature Detail

Candlestick diagram integration on pattern cards (green bullish, red bearish) creates instant visual recognition and educational reinforcement without leaving the library view.

