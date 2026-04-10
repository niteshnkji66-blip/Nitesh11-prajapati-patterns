module {
  public type PatternCategory = {
    #bullish_reversal;
    #bearish_reversal;
    #bullish_continuation;
    #bearish_continuation;
    #indecision;
  };

  public type FormationType = {
    #single;
    #two_candle;
    #three_candle;
    #multi_candle;
  };

  public type Reliability = {
    #high;
    #medium;
    #low;
  };

  public type Pattern = {
    id : Text;
    name : Text;
    category : PatternCategory;
    formationType : FormationType;
    shortDescription : Text;
    formation : Text;
    psychology : Text;
    strategy : Text;
    reliability : Reliability;
    warnings : Text;
  };
};
