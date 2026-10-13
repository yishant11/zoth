"use client";
import { useQuery } from "@tanstack/react-query";
import { saleSchema } from "@/lib/sale";
export function useSale() {
  return useQuery({
    queryKey: ["sale"],
    queryFn: async ({ signal }) => {
      const scenario = new URLSearchParams(window.location.search).get(
        "scenario",
      );
      const response = await fetch(
        `/api/sale${scenario ? `?scenario=${encodeURIComponent(scenario)}` : ""}`,
        {
          signal: AbortSignal.any([signal, AbortSignal.timeout(15000)]),
          cache: "no-store",
        },
      );
      if (!response.ok)
        throw new Error("Unable to load the sale. Please try again.");
      const data: unknown = await response.json();
      return data === null ? null : saleSchema.parse(data);
    },
    staleTime: 30000,
    refetchInterval: 60000,
    retry: 1,
  });
}
