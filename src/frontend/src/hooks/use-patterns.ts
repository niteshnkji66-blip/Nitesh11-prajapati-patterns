import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { Pattern } from "../backend.d";
import type { PatternCategory } from "../backend.d";

export function usePatterns() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Pattern[]>({
    queryKey: ["patterns"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPatterns();
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

export function usePattern(id: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Pattern | null>({
    queryKey: ["pattern", id],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getPatternById(id);
    },
    enabled: !!actor && !isFetching && !!id,
    staleTime: 5 * 60 * 1000,
  });
}

export function usePatternsByCategory(category: PatternCategory) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Pattern[]>({
    queryKey: ["patterns", "category", category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPatternsByCategory(category);
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}
