import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Pattern {
    id: string;
    formation: string;
    strategy: string;
    name: string;
    reliability: Reliability;
    formationType: FormationType;
    shortDescription: string;
    warnings: string;
    category: PatternCategory;
    psychology: string;
}
export enum FormationType {
    two_candle = "two_candle",
    multi_candle = "multi_candle",
    three_candle = "three_candle",
    single = "single"
}
export enum PatternCategory {
    indecision = "indecision",
    bearish_reversal = "bearish_reversal",
    bullish_reversal = "bullish_reversal",
    bearish_continuation = "bearish_continuation",
    bullish_continuation = "bullish_continuation"
}
export enum Reliability {
    low = "low",
    high = "high",
    medium = "medium"
}
export interface backendInterface {
    getAllPatterns(): Promise<Array<Pattern>>;
    getPatternById(id: string): Promise<Pattern | null>;
    getPatternsByCategory(category: PatternCategory): Promise<Array<Pattern>>;
}
