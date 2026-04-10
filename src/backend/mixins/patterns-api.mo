import Types "../types/patterns";
import PatternsLib "../lib/patterns";

mixin () {
  /// Returns all 30+ candlestick patterns in the library.
  public query func getAllPatterns() : async [Types.Pattern] {
    PatternsLib.getAllPatterns();
  };

  /// Returns all patterns belonging to a specific category.
  public query func getPatternsByCategory(category : Types.PatternCategory) : async [Types.Pattern] {
    PatternsLib.getPatternsByCategory(category);
  };

  /// Returns a single pattern by its unique id.
  public query func getPatternById(id : Text) : async ?Types.Pattern {
    PatternsLib.getPatternById(id);
  };
};
