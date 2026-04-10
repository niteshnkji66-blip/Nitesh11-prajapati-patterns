import Types "../types/patterns";
import Array "mo:core/Array";

module {
  public type Pattern = Types.Pattern;
  public type PatternCategory = Types.PatternCategory;

  let allPatterns : [Pattern] = [
    // ── SINGLE CANDLE ─────────────────────────────────────────────────────────

    {
      id = "doji";
      name = "Doji";
      category = #indecision;
      formationType = #single;
      shortDescription = "A candle where open and close prices are nearly equal, forming a cross shape. Signals market indecision and potential trend reversal.";
      formation = "Open and close are at or very near the same price level. The candle body is extremely small or nonexistent. Upper and lower shadows can vary in length. Appears after a sustained trend.";
      psychology = "Neither buyers nor sellers were able to gain control. The market opened and closed at virtually the same price despite intraday movement, reflecting a balance of forces and uncertainty about future direction.";
      strategy = "Wait for confirmation on the next candle before trading. A bullish Doji after a downtrend can signal reversal — enter long on the close of the next bullish candle. A bearish Doji after an uptrend — enter short on confirmation. Use with support/resistance levels.";
      reliability = #medium;
      warnings = "A Doji alone is not a signal. Always wait for confirmation. Doji candles are common in low-volume markets and may not carry significance without a preceding trend.";
    },

    {
      id = "long-legged-doji";
      name = "Long-Legged Doji";
      category = #indecision;
      formationType = #single;
      shortDescription = "A Doji with exceptionally long upper and lower shadows, indicating extreme indecision with wide price swings in both directions.";
      formation = "Open and close are nearly equal. Both upper and lower shadows are very long — often two to three times the length of typical candles. The body sits near the middle of the candle range.";
      psychology = "The market swung wildly in both directions but ended where it began. This extreme tug-of-war between bulls and bears reflects high uncertainty and often precedes significant price moves as the market chooses a direction.";
      strategy = "Best used at key support/resistance zones. After a strong trend, a long-legged Doji suggests exhaustion. Enter in the direction of the trend reversal only after the next candle confirms direction. Place stops beyond the Doji's high or low.";
      reliability = #medium;
      warnings = "High shadows mean high volatility — stops may need to be wider. Do not trade without confirmation. Appears frequently in choppy markets without directional meaning.";
    },

    {
      id = "dragonfly-doji";
      name = "Dragonfly Doji";
      category = #bullish_reversal;
      formationType = #single;
      shortDescription = "A Doji with a long lower shadow and no upper shadow, resembling a 'T'. Signals potential bullish reversal after a downtrend.";
      formation = "Open, high, and close are all at or near the same level at the top of the candle. A long lower shadow extends downward. No or minimal upper shadow. Appears after a downtrend for maximum significance.";
      psychology = "Sellers pushed price sharply lower during the session, but buyers stepped in strongly and pushed price all the way back up to the open. This buying pressure near the lows suggests bulls are taking control.";
      strategy = "Enter long on the open of the next candle if it is bullish, or at the close of the next bullish candle for more confirmation. Stop loss below the low of the Dragonfly Doji. Works best at known support levels.";
      reliability = #medium;
      warnings = "Needs trend context — a Dragonfly Doji in the middle of a range is less significant. Confirmation candle is essential before entering.";
    },

    {
      id = "gravestone-doji";
      name = "Gravestone Doji";
      category = #bearish_reversal;
      formationType = #single;
      shortDescription = "A Doji with a long upper shadow and no lower shadow, resembling an inverted 'T'. Signals potential bearish reversal after an uptrend.";
      formation = "Open, low, and close are all at or near the same level at the bottom of the candle. A long upper shadow extends upward. No or minimal lower shadow. Appears after an uptrend for maximum significance.";
      psychology = "Buyers drove price sharply higher during the session, but sellers stepped in at the highs and pushed price all the way back down to the open. This rejection at the highs signals that bulls are losing power.";
      strategy = "Enter short on the open of the next candle if it is bearish, or at close of the next bearish candle for more confirmation. Stop loss above the high of the Gravestone Doji. Most effective at known resistance levels.";
      reliability = #medium;
      warnings = "Needs trend context to be meaningful. Confirmation candle is required. A standalone Gravestone Doji in a ranging market is unreliable.";
    },

    {
      id = "hammer";
      name = "Hammer";
      category = #bullish_reversal;
      formationType = #single;
      shortDescription = "A single-candle pattern with a small body at the top and a long lower shadow. Signals bullish reversal after a downtrend.";
      formation = "Small real body (bullish or bearish) near the top of the candle range. Lower shadow is at least twice the length of the body. Little to no upper shadow. Must occur after a downtrend.";
      psychology = "Sellers pushed price lower during the session, but strong buying pressure emerged and drove the price back up near the open. This indicates buyers are absorbing selling pressure and may be taking control.";
      strategy = "Enter long after confirmation — wait for the next candle to close bullish. Set stop below the hammer's low. Target the nearest resistance level or use a risk/reward ratio of at least 2:1.";
      reliability = #high;
      warnings = "A Hammer candle body can be red or green. Must appear after a downtrend. Without a prior downtrend, the signal is meaningless. Confirmation is mandatory.";
    },

    {
      id = "inverted-hammer";
      name = "Inverted Hammer";
      category = #bullish_reversal;
      formationType = #single;
      shortDescription = "A single candle with a small body at the bottom and a long upper shadow. Signals potential bullish reversal after a downtrend.";
      formation = "Small real body near the bottom of the candle range. Upper shadow is at least twice the length of the body. Little to no lower shadow. Appears at the end of a downtrend.";
      psychology = "Buyers attempted to push price higher and succeeded intraday, but sellers pushed it back down near the open. Despite the close near the open, the buying attempt hints at potential bullish momentum building.";
      strategy = "Less reliable than a Hammer — requires strong confirmation. Enter long only after a clear bullish candle follows. Stop below the Inverted Hammer low. Works best near support levels.";
      reliability = #medium;
      warnings = "Weaker signal than the Hammer. The rejection of higher prices can also be read as bearish. Confirmation is critical before any trade entry.";
    },

    {
      id = "hanging-man";
      name = "Hanging Man";
      category = #bearish_reversal;
      formationType = #single;
      shortDescription = "Looks identical to a Hammer but appears at the top of an uptrend. Signals potential bearish reversal.";
      formation = "Small real body near the top of the candle range. Long lower shadow at least twice the body length. Little to no upper shadow. Must appear after a sustained uptrend at resistance.";
      psychology = "Despite the bullish appearance, the long lower shadow shows sellers briefly took control during the session. This selling pressure at the top of a trend warns that the uptrend may be losing momentum.";
      strategy = "Enter short only after a bearish confirmation candle. Stop above the Hanging Man high. The context (uptrend + resistance) is more important than the candle shape alone.";
      reliability = #medium;
      warnings = "Shape is identical to a Hammer — context determines meaning. Many traders are fooled by the similar appearance. Requires confirmation. Do not short without a confirming bearish candle.";
    },

    {
      id = "shooting-star";
      name = "Shooting Star";
      category = #bearish_reversal;
      formationType = #single;
      shortDescription = "A candle with a small body at the bottom and a long upper shadow, appearing after an uptrend. Signals bearish reversal.";
      formation = "Small real body near the bottom of the candle range. Upper shadow at least twice the length of the body. Little to no lower shadow. Appears after an uptrend, often at resistance.";
      psychology = "Buyers pushed price significantly higher, but sellers overwhelmed them and drove the price back down near the open. The strong rejection at the highs signals that the uptrend is likely exhausted.";
      strategy = "Enter short on confirmation — wait for the next candle to close bearishly. Set stop above the Shooting Star high. Target previous support levels. Best used at known resistance areas.";
      reliability = #high;
      warnings = "Must appear after an uptrend at resistance for full validity. Similar to an Inverted Hammer — context is critical. Always confirm before entering a trade.";
    },

    {
      id = "spinning-top";
      name = "Spinning Top";
      category = #indecision;
      formationType = #single;
      shortDescription = "A candle with a small body and roughly equal upper and lower shadows. Indicates market indecision and potential trend pause or reversal.";
      formation = "Small real body (can be bullish or bearish). Upper and lower shadows are present and roughly equal in length. The body is noticeably smaller than the shadows. Can appear anywhere.";
      psychology = "Both buyers and sellers were active but neither could dominate. The market is uncertain about direction. After a trend, Spinning Tops often indicate that the prevailing trend is losing energy.";
      strategy = "After an uptrend, a Spinning Top can precede a reversal — wait for a bearish confirmation candle. After a downtrend, wait for a bullish confirmation. Do not trade the Spinning Top in isolation.";
      reliability = #low;
      warnings = "Low reliability on its own. Common in ranging markets. Must be used with other signals and context. Not a standalone trading signal.";
    },

    {
      id = "bullish-marubozu";
      name = "Bullish Marubozu";
      category = #bullish_continuation;
      formationType = #single;
      shortDescription = "A long bullish candle with no shadows, showing the close equals the high and open equals the low. Signals strong buying pressure.";
      formation = "Long green body with no upper or lower shadow. Open is exactly at the low and close is exactly at the high. The entire session was dominated by buyers. Can appear in trends or at breakouts.";
      psychology = "Bulls had complete control from open to close. There was no hesitation — buyers dominated the entire session without sellers getting any traction. Extremely strong bullish momentum.";
      strategy = "In an uptrend, confirms continuation — hold or add to long positions. As a breakout candle above resistance, it is a powerful entry signal. Stop below the candle low. Target measured moves.";
      reliability = #high;
      warnings = "After a very long prior uptrend, a Marubozu can signal climax buying and a potential reversal. Do not chase if price has already moved far. Wait for a small pullback.";
    },

    {
      id = "bearish-marubozu";
      name = "Bearish Marubozu";
      category = #bearish_continuation;
      formationType = #single;
      shortDescription = "A long bearish candle with no shadows, showing complete seller control throughout the session.";
      formation = "Long red body with no upper or lower shadow. Open is exactly at the high and close is exactly at the low. The entire session was dominated by sellers from open to close.";
      psychology = "Bears had total control from open to close. There was no relief for bulls during the entire session. Extremely strong bearish momentum reflects panic selling or strong institutional selling.";
      strategy = "In a downtrend, confirms continuation — hold or add to short positions. As a breakdown candle below support, a powerful entry signal. Stop above the candle high. Target prior support levels.";
      reliability = #high;
      warnings = "After a climactic downtrend, a Bearish Marubozu can signal selling exhaustion and a reversal. Avoid shorting at major long-term support. Confirm with volume.";
    },

    {
      id = "belt-hold-bullish";
      name = "Bullish Belt Hold";
      category = #bullish_reversal;
      formationType = #single;
      shortDescription = "A long bullish candle that opens at the low of the session (gap down) with no lower shadow. Signals potential bullish reversal.";
      formation = "Long green candle that opens at or near the low with no lower shadow. May have a small upper shadow. The candle opens with a gap down from the previous close and rallies through the session.";
      psychology = "After opening at the low (often with a gap down), buyers immediately took control and pushed price higher all session. This rejection of lower prices signals strong buying conviction.";
      strategy = "Enter long on confirmation from the next candle. Stop below the Belt Hold open price. Most effective after a downtrend near support. Target the nearest resistance zone.";
      reliability = #medium;
      warnings = "Less widely known pattern — combine with other signals. Confirmation is important. Works best with a gap open in the opposite direction.";
    },

    {
      id = "belt-hold-bearish";
      name = "Bearish Belt Hold";
      category = #bearish_reversal;
      formationType = #single;
      shortDescription = "A long bearish candle that opens at the high of the session (gap up) with no upper shadow. Signals potential bearish reversal.";
      formation = "Long red candle that opens at or near the high with no upper shadow. May have a small lower shadow. Opens with a gap up from the previous close and falls through the entire session.";
      psychology = "After opening at the high (often with a gap up), sellers immediately took control and pushed price lower all session. The rejection of higher prices signals strong selling conviction at the open.";
      strategy = "Enter short on confirmation from the next candle. Stop above the Belt Hold open price. Most effective after an uptrend near resistance. Target the nearest support zone.";
      reliability = #medium;
      warnings = "Best used with a gap open. Requires confirmation. Less effective without a prior uptrend or resistance context.";
    },

    // ── TWO CANDLE ────────────────────────────────────────────────────────────

    {
      id = "bullish-engulfing";
      name = "Bullish Engulfing";
      category = #bullish_reversal;
      formationType = #two_candle;
      shortDescription = "A large bullish candle that completely engulfs the previous bearish candle. One of the strongest bullish reversal signals.";
      formation = "First candle: bearish (red). Second candle: bullish (green) with a body that opens below the first candle's close and closes above the first candle's open, fully engulfing the first body. Appears after a downtrend.";
      psychology = "Sellers were in control on day one. On day two, buyers completely overwhelmed sellers — opening lower and closing higher than the entire previous range. This dramatic shift in power strongly favors bulls taking control.";
      strategy = "Enter long at the close of the engulfing candle or on the open of the next candle. Stop below the low of the engulfing candle. Target the next significant resistance. Higher volume on the second candle increases reliability.";
      reliability = #high;
      warnings = "The engulfing must appear after a clear downtrend. Engulfing patterns in sideways markets are unreliable. Larger the second candle relative to the first, stronger the signal.";
    },

    {
      id = "bearish-engulfing";
      name = "Bearish Engulfing";
      category = #bearish_reversal;
      formationType = #two_candle;
      shortDescription = "A large bearish candle that completely engulfs the previous bullish candle. One of the strongest bearish reversal signals.";
      formation = "First candle: bullish (green). Second candle: bearish (red) with a body that opens above the first candle's close and closes below the first candle's open, fully engulfing the first body. Appears after an uptrend.";
      psychology = "Buyers were in control on day one. On day two, sellers overwhelmed buyers — opening higher and closing lower than the entire previous range. This dramatic power shift strongly favors bears taking control.";
      strategy = "Enter short at the close of the engulfing candle or on the open of the next candle. Stop above the high of the engulfing candle. Target the next significant support. Confirm with volume.";
      reliability = #high;
      warnings = "Must appear after a clear uptrend to be a valid reversal signal. Larger the bearish candle relative to the prior bullish, the stronger the signal.";
    },

    {
      id = "bullish-harami";
      name = "Bullish Harami";
      category = #bullish_reversal;
      formationType = #two_candle;
      shortDescription = "A small bullish candle contained within the body of the previous large bearish candle. Signals potential downtrend slowdown.";
      formation = "First candle: large bearish (red). Second candle: small bullish (green) whose entire body falls within the range of the first candle's body. The second candle is noticeably smaller.";
      psychology = "After a strong bearish move, the next session's indecision (small body) shows that selling pressure is diminishing. The inability to continue lower hints that buyers may be entering and a reversal is possible.";
      strategy = "Weaker signal than Engulfing — wait for additional confirmation (a third bullish candle). Enter on the third candle's open. Stop below the large bearish candle low. Best near support.";
      reliability = #medium;
      warnings = "Harami is not as strong as Engulfing. Requires confirmation. In a strong downtrend, price may pause briefly before continuing lower.";
    },

    {
      id = "bearish-harami";
      name = "Bearish Harami";
      category = #bearish_reversal;
      formationType = #two_candle;
      shortDescription = "A small bearish candle contained within the body of the previous large bullish candle. Signals potential uptrend slowdown.";
      formation = "First candle: large bullish (green). Second candle: small bearish (red) whose entire body falls within the range of the first candle's body. The second candle is noticeably smaller.";
      psychology = "After a strong bullish move, the next session's small body shows that buying pressure is diminishing. The inability to continue higher suggests that sellers may be entering and a reversal is possible.";
      strategy = "Requires confirmation from a third bearish candle. Enter short on the third candle's open. Stop above the large bullish candle high. Best near resistance.";
      reliability = #medium;
      warnings = "Weak signal on its own. Requires confirmation. In a strong uptrend the Harami may only signal a brief pause before the uptrend resumes.";
    },

    {
      id = "piercing-line";
      name = "Piercing Line";
      category = #bullish_reversal;
      formationType = #two_candle;
      shortDescription = "A bullish two-candle pattern where the second candle opens below the prior low and closes above the midpoint of the first bearish candle.";
      formation = "First candle: large bearish. Second candle: bullish that opens below the prior close (gap down) and closes above the 50% midpoint of the first candle's body. Both candles have meaningful bodies.";
      psychology = "Sellers dominate day one. Day two opens with a gap down (bears seem in control) but buyers reverse and push price above the midpoint of the bearish candle. This mid-body recovery signals a significant shift toward bulls.";
      strategy = "Enter long at close of second candle or open of next. Stop below the low of the second candle. Stronger signal if the second candle closes in the upper 70%+ of the first candle's body.";
      reliability = #high;
      warnings = "If the second candle closes below the midpoint of the first, the pattern becomes a weaker 'In-Neck' and should not be traded. Gap down on open increases pattern strength.";
    },

    {
      id = "dark-cloud-cover";
      name = "Dark Cloud Cover";
      category = #bearish_reversal;
      formationType = #two_candle;
      shortDescription = "A bearish two-candle pattern where the second candle opens above the prior high and closes below the midpoint of the first bullish candle.";
      formation = "First candle: large bullish. Second candle: bearish that opens above the prior close (gap up) and closes below the 50% midpoint of the first candle's body. Both candles have meaningful bodies.";
      psychology = "Buyers dominate day one. Day two gaps up (bulls seem in control) but sellers reverse strongly and push price below the midpoint of the bullish candle, signaling that bulls are losing the battle.";
      strategy = "Enter short at close of second candle or open of next. Stop above the high of the second candle. Signal is stronger if close penetrates 70%+ into the first candle's body.";
      reliability = #high;
      warnings = "If the bearish candle closes above the midpoint, it is an incomplete or weak pattern. Confirm with volume and resistance levels.";
    },

    {
      id = "tweezer-top";
      name = "Tweezer Top";
      category = #bearish_reversal;
      formationType = #two_candle;
      shortDescription = "Two candles with matching highs at a resistance area after an uptrend. Signals rejection of higher prices and a potential reversal.";
      formation = "Two consecutive candles (first bullish, second bearish) with identical or very close highs. The matching highs signal a double rejection at that price level. Appears at the top of an uptrend.";
      psychology = "Price tested the same high twice and was rejected both times. This double rejection shows strong resistance at that level. Sellers are defending the highs and bulls cannot break through, suggesting a reversal.";
      strategy = "Enter short after the second candle closes bearishly. Stop above the shared high. Works best when the highs coincide with a known resistance zone or Fibonacci level.";
      reliability = #medium;
      warnings = "Highs must be very close to be valid. Works best at clear resistance levels. Confirmation is advisable before entering.";
    },

    {
      id = "tweezer-bottom";
      name = "Tweezer Bottom";
      category = #bullish_reversal;
      formationType = #two_candle;
      shortDescription = "Two candles with matching lows at a support area after a downtrend. Signals rejection of lower prices and a potential reversal.";
      formation = "Two consecutive candles (first bearish, second bullish) with identical or very close lows. The matching lows signal a double rejection at that price level. Appears at the bottom of a downtrend.";
      psychology = "Price tested the same low twice and was defended both times. This double support at the same level shows buyers are absorbing selling pressure and defending the floor, suggesting a bullish reversal.";
      strategy = "Enter long after the second candle closes bullishly. Stop below the shared low. Best when the lows coincide with a known support zone or key level.";
      reliability = #medium;
      warnings = "Lows must match closely. Context and location (support zone) are crucial. Use confirmation candle before trading.";
    },

    {
      id = "kicker-bullish";
      name = "Bullish Kicker";
      category = #bullish_reversal;
      formationType = #two_candle;
      shortDescription = "A powerful two-candle reversal where a bearish candle is immediately followed by a large gap-up bullish candle opening above the prior open.";
      formation = "First candle: bearish. Second candle: bullish that gaps up and opens at or above the first candle's open, not its close — a significant gap. The second candle should be large and bullish throughout.";
      psychology = "Often driven by major news or earnings. The market sentiment reversed completely overnight — buyers are extremely aggressive. This is one of the strongest bullish signals, showing a complete shift in institutional positioning.";
      strategy = "Enter long at the open of the second candle or immediately after. Stop below the low of the second candle. Target measured move based on gap size. High-confidence signal when supported by volume.";
      reliability = #high;
      warnings = "Must have a true gap between the two opens — not just between close and open. Best used after significant news events. Rare pattern.";
    },

    {
      id = "kicker-bearish";
      name = "Bearish Kicker";
      category = #bearish_reversal;
      formationType = #two_candle;
      shortDescription = "A powerful two-candle reversal where a bullish candle is immediately followed by a large gap-down bearish candle opening below the prior open.";
      formation = "First candle: bullish. Second candle: bearish that gaps down and opens at or below the first candle's open. The second candle should be large and bearish throughout the session.";
      psychology = "A complete overnight sentiment reversal. Sellers are extremely aggressive. Institutions shifted from bullish to bearish positions, driving a powerful gap down. One of the strongest bearish signals.";
      strategy = "Enter short at the open of the second candle or immediately after. Stop above the high of the second candle. Target measured move. High-confidence signal with volume confirmation.";
      reliability = #high;
      warnings = "Must have a true gap between the two opens. Best used around significant news events. Rare and most reliable in high-liquidity instruments.";
    },

    // ── THREE CANDLE ──────────────────────────────────────────────────────────

    {
      id = "morning-star";
      name = "Morning Star";
      category = #bullish_reversal;
      formationType = #three_candle;
      shortDescription = "A three-candle bullish reversal pattern: large bearish, small-bodied star, large bullish. One of the most reliable reversal signals.";
      formation = "Candle 1: large bearish. Candle 2: small body (any color) that gaps down from candle 1 — the 'star'. Candle 3: large bullish that closes above the midpoint of candle 1's body.";
      psychology = "Day 1: sellers dominate. Day 2: a star (indecision) forms as selling slows. Day 3: buyers take control completely, closing well into the first bearish body. This three-stage capitulation and reversal is a high-confidence bullish signal.";
      strategy = "Enter long at close of candle 3 or open of candle 4. Stop below the low of candle 2 (the star). Target resistance above. The deeper candle 3 closes into candle 1, the stronger the signal.";
      reliability = #high;
      warnings = "The star must have a small body — a larger body reduces the pattern's validity. Ideally, the star gaps away from both adjacent candles. Volume should ideally increase on candle 3.";
    },

    {
      id = "evening-star";
      name = "Evening Star";
      category = #bearish_reversal;
      formationType = #three_candle;
      shortDescription = "A three-candle bearish reversal pattern: large bullish, small-bodied star, large bearish. One of the most reliable bearish reversal signals.";
      formation = "Candle 1: large bullish. Candle 2: small body (any color) that gaps up — the 'star'. Candle 3: large bearish that closes below the midpoint of candle 1's body.";
      psychology = "Day 1: buyers dominate. Day 2: a star forms as buying slows and indecision appears. Day 3: sellers take over and close well into the first bullish body, confirming the reversal.";
      strategy = "Enter short at close of candle 3 or open of candle 4. Stop above the high of the star (candle 2). Target the nearest support. The deeper candle 3 closes into candle 1, the stronger the signal.";
      reliability = #high;
      warnings = "Star must have a small body. Ideally gaps from both adjacent candles. Stronger at known resistance levels with increased volume on candle 3.";
    },

    {
      id = "morning-doji-star";
      name = "Morning Doji Star";
      category = #bullish_reversal;
      formationType = #three_candle;
      shortDescription = "Like a Morning Star but with a Doji as the middle candle. The Doji strengthens the reversal signal, indicating perfect indecision before the bullish surge.";
      formation = "Candle 1: large bearish. Candle 2: Doji (open ≈ close) that gaps down. Candle 3: large bullish candle closing above the midpoint of candle 1's body.";
      psychology = "The Doji in the middle represents perfect market equilibrium — a complete halt to selling. Combined with the bearish setup and the following bullish candle, this is a very strong reversal signal.";
      strategy = "Enter long at close of the third candle. Stop below the Doji's low. Stronger than a regular Morning Star because the Doji shows a more definitive pause in selling pressure.";
      reliability = #high;
      warnings = "The Doji must show minimal body. Works best with gaps between all three candles. Confirm at support levels.";
    },

    {
      id = "evening-doji-star";
      name = "Evening Doji Star";
      category = #bearish_reversal;
      formationType = #three_candle;
      shortDescription = "Like an Evening Star but with a Doji as the middle candle, indicating perfect indecision at the top before the bearish decline.";
      formation = "Candle 1: large bullish. Candle 2: Doji that gaps up. Candle 3: large bearish candle closing below the midpoint of candle 1's body.";
      psychology = "The Doji perfectly marks the end of bullish momentum. Combined with a gap up and the following bearish candle, this three-candle reversal is among the most reliable bearish patterns.";
      strategy = "Enter short at close of the third candle. Stop above the Doji's high. Stronger than a regular Evening Star due to the Doji showing complete buying exhaustion.";
      reliability = #high;
      warnings = "Doji must have minimal body. Gaps between candles strengthen the signal. Best at resistance with increasing volume on the bearish candle.";
    },

    {
      id = "three-white-soldiers";
      name = "Three White Soldiers";
      category = #bullish_reversal;
      formationType = #three_candle;
      shortDescription = "Three consecutive long bullish candles each opening within the prior body and closing near the high. Signals a strong trend reversal to bullish.";
      formation = "Three large bullish candles. Each candle opens within the body of the previous candle. Each candle closes near its high. Bodies are roughly equal in size. Small or no upper shadows. Appears after a downtrend.";
      psychology = "Three consecutive sessions of strong, sustained buying. Bulls take control completely over three days. The consistent closing near highs shows buyers are confident and there is no significant profit-taking.";
      strategy = "Enter long on the third candle's close or next open. Stop below the low of the first candle. The pattern is a strong trend change signal — target the next major resistance.";
      reliability = #high;
      warnings = "If candles have large upper shadows, it is a weaker 'advance block'. After a very long prior downtrend, the pattern may indicate oversold buying rather than a genuine reversal. Confirm at support.";
    },

    {
      id = "three-black-crows";
      name = "Three Black Crows";
      category = #bearish_reversal;
      formationType = #three_candle;
      shortDescription = "Three consecutive long bearish candles each opening within the prior body and closing near the low. Signals a strong trend reversal to bearish.";
      formation = "Three large bearish candles. Each opens within the body of the previous candle. Each closes near its low. Bodies are roughly equal in size. Small or no lower shadows. Appears after an uptrend.";
      psychology = "Three consecutive sessions of strong selling. Bears dominate completely over three days. The consistent closing near lows shows sellers are confident and bulls cannot mount a recovery.";
      strategy = "Enter short on the third candle's close or next open. Stop above the high of the first candle. Strong trend change — target the next major support level.";
      reliability = #high;
      warnings = "If candles have large lower shadows, it is a weaker 'modified three crows'. After a very long prior uptrend, can indicate selling exhaustion. Avoid shorting directly into major support.";
    },

    {
      id = "three-inside-up";
      name = "Three Inside Up";
      category = #bullish_reversal;
      formationType = #three_candle;
      shortDescription = "A Bullish Harami followed by a confirming bullish candle. A reliable three-candle bullish reversal pattern.";
      formation = "Candle 1: large bearish. Candle 2: small bullish contained within candle 1's body (Bullish Harami). Candle 3: bullish candle that closes above the high of candle 1.";
      psychology = "The large bearish candle shows bears in control. The small bullish candle shows indecision and weakening selling. The third bullish candle confirming above candle 1's high shows buyers have fully taken over.";
      strategy = "Enter long at close of candle 3. Stop below the low of candle 1. High-confidence entry because all three candles confirm the reversal.";
      reliability = #high;
      warnings = "The third candle must close above candle 1's high for the pattern to be complete. Without this, it is just a Bullish Harami.";
    },

    {
      id = "three-inside-down";
      name = "Three Inside Down";
      category = #bearish_reversal;
      formationType = #three_candle;
      shortDescription = "A Bearish Harami followed by a confirming bearish candle. A reliable three-candle bearish reversal pattern.";
      formation = "Candle 1: large bullish. Candle 2: small bearish contained within candle 1's body (Bearish Harami). Candle 3: bearish candle that closes below the low of candle 1.";
      psychology = "The large bullish candle shows bulls in control. The small bearish candle shows buying momentum faltering. The third bearish candle closing below candle 1's low confirms bears have taken control.";
      strategy = "Enter short at close of candle 3. Stop above the high of candle 1. Reliable reversal entry with three-stage confirmation.";
      reliability = #high;
      warnings = "Candle 3 must close below candle 1's low. Without this, the pattern is incomplete. Look for this at resistance levels.";
    },

    {
      id = "three-outside-up";
      name = "Three Outside Up";
      category = #bullish_reversal;
      formationType = #three_candle;
      shortDescription = "A Bullish Engulfing followed by a confirming bullish candle. Very reliable three-candle bullish reversal.";
      formation = "Candle 1: small bearish. Candle 2: large bullish that engulfs candle 1 (Bullish Engulfing). Candle 3: bullish candle that closes higher than candle 2.";
      psychology = "The Bullish Engulfing already shows a strong shift in sentiment. The third candle closing higher confirms that the reversal has follow-through and is not a false signal.";
      strategy = "Enter long at close of candle 3. Stop below the low of candle 2. High-reliability entry given three confirming candles.";
      reliability = #high;
      warnings = "Stronger than Three Inside Up due to the engulfing nature of candle 2. Still best near support levels.";
    },

    {
      id = "three-outside-down";
      name = "Three Outside Down";
      category = #bearish_reversal;
      formationType = #three_candle;
      shortDescription = "A Bearish Engulfing followed by a confirming bearish candle. Very reliable three-candle bearish reversal.";
      formation = "Candle 1: small bullish. Candle 2: large bearish that engulfs candle 1 (Bearish Engulfing). Candle 3: bearish candle that closes lower than candle 2.";
      psychology = "The Bearish Engulfing already signals a strong shift to bearish sentiment. The third candle closing lower confirms that selling has follow-through and the reversal is valid.";
      strategy = "Enter short at close of candle 3. Stop above the high of candle 2. High-reliability entry with three-stage bearish confirmation.";
      reliability = #high;
      warnings = "Best at clear resistance levels. Stronger near the top of a well-defined uptrend.";
    },

    {
      id = "abandoned-baby-bullish";
      name = "Bullish Abandoned Baby";
      category = #bullish_reversal;
      formationType = #three_candle;
      shortDescription = "A rare three-candle pattern with a Doji that gaps below both adjacent candles. One of the most powerful bullish reversal signals.";
      formation = "Candle 1: large bearish. Candle 2: Doji that gaps down from candle 1, with no price overlap between the shadows. Candle 3: large bullish that gaps up from the Doji, with no overlap in shadows.";
      psychology = "The gaps on both sides of the Doji create a completely isolated candle. This 'abandoned' state shows a complete breakdown of selling pressure and immediate bullish takeover. Extremely rare and highly significant.";
      strategy = "Enter long on the open of candle 4 or at close of candle 3. Stop below the Doji's low. High-confidence trade due to rarity and the requirement for true gaps.";
      reliability = #high;
      warnings = "Must have true price gaps on both sides — not just body gaps but shadow gaps. Extremely rare. Without actual gaps, it is a Morning Doji Star, not an Abandoned Baby.";
    },

    {
      id = "abandoned-baby-bearish";
      name = "Bearish Abandoned Baby";
      category = #bearish_reversal;
      formationType = #three_candle;
      shortDescription = "A rare three-candle pattern with a Doji that gaps above both adjacent candles. One of the most powerful bearish reversal signals.";
      formation = "Candle 1: large bullish. Candle 2: Doji that gaps up from candle 1, with no price overlap between the shadows. Candle 3: large bearish that gaps down from the Doji, with no overlap in shadows.";
      psychology = "The Doji completely isolated by gaps on both sides shows total buying exhaustion followed by immediate aggressive selling. This extreme transition signals a powerful reversal.";
      strategy = "Enter short on the open of candle 4 or at close of candle 3. Stop above the Doji's high. High-confidence trade due to the requirement for true gaps.";
      reliability = #high;
      warnings = "True gaps required on both sides, not just body gaps. Very rare pattern. Without gaps, classify as Evening Doji Star.";
    },

    // ── MULTI CANDLE ──────────────────────────────────────────────────────────

    {
      id = "rising-three-methods";
      name = "Rising Three Methods";
      category = #bullish_continuation;
      formationType = #multi_candle;
      shortDescription = "A five-candle bullish continuation: long bullish, three small bearish candles within range, then long bullish breakout. Signals the uptrend will resume.";
      formation = "Candle 1: long bullish. Candles 2-4: three small bearish candles that remain within candle 1's range (a brief consolidation/pullback). Candle 5: long bullish that closes above candle 1's high.";
      psychology = "The initial strong move attracts profit-taking (candles 2-4). But the selling is contained within candle 1's range, showing bulls are absorbing it. Candle 5's breakout above candle 1 confirms bulls are back in control.";
      strategy = "Enter long on the break above candle 1's high (candle 5 signal). Stop below the low of the consolidation candles (candles 2-4). Target a measured move equal to candle 1's range above the breakout.";
      reliability = #high;
      warnings = "The three inner candles must stay within candle 1's range. If they break below candle 1's low, the pattern is invalid. Volume should be lower on the inner candles and spike on candle 5.";
    },

    {
      id = "falling-three-methods";
      name = "Falling Three Methods";
      category = #bearish_continuation;
      formationType = #multi_candle;
      shortDescription = "A five-candle bearish continuation: long bearish, three small bullish candles within range, then long bearish breakdown. Signals the downtrend will resume.";
      formation = "Candle 1: long bearish. Candles 2-4: three small bullish candles that remain within candle 1's range. Candle 5: long bearish that closes below candle 1's low.";
      psychology = "The initial strong decline sees minor relief buying (candles 2-4). But buying is absorbed by sellers and cannot break above candle 1. Candle 5 breaks below confirms the downtrend continues.";
      strategy = "Enter short on the break below candle 1's low (candle 5 signal). Stop above the high of the consolidation candles. Target measured move equal to candle 1's range below breakdown.";
      reliability = #high;
      warnings = "Inner candles must not break above candle 1's high. If they do, the pattern is invalidated. Volume should be lower on inner candles and increase on candle 5.";
    },

    {
      id = "mat-hold";
      name = "Mat Hold";
      category = #bullish_continuation;
      formationType = #multi_candle;
      shortDescription = "A rare bullish continuation pattern similar to Rising Three Methods, but the second candle gaps up. Signals strong trend continuation.";
      formation = "Candle 1: long bullish. Candle 2: small bullish that gaps up from candle 1. Candles 3-4: two small bearish candles (pullback) staying above candle 1's open. Candle 5: strong bullish that closes above candle 2's high.";
      psychology = "The gap up on candle 2 shows strong initial buying. The minor pullback (candles 3-4) does not break key levels, showing bulls hold firm. The breakout on candle 5 confirms the continuation.";
      strategy = "Enter long on breakout above candle 2's high. Stop below the low of the pullback candles. Rare but reliable pattern when correctly identified.";
      reliability = #high;
      warnings = "Very rare pattern. Often confused with Rising Three Methods. The gap on candle 2 is the distinguishing feature. Confirm with volume on breakout candle.";
    },
  ];

  /// Returns all candlestick patterns from the hardcoded library.
  public func getAllPatterns() : [Pattern] {
    allPatterns;
  };

  /// Returns all patterns matching the given category.
  public func getPatternsByCategory(category : PatternCategory) : [Pattern] {
    allPatterns.filter<Pattern>(func(p) { p.category == category });
  };

  /// Returns a single pattern by its id, or null if not found.
  public func getPatternById(id : Text) : ?Pattern {
    allPatterns.find<Pattern>(func(p) { p.id == id });
  };
};
