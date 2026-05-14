import { useMemo } from "react";
import type { Experience } from "../data/experience.interface";

type UseFiltersParams = {
  list: Experience[];
  search: string;
  category: string;
  destination: string;
};

function escapeRegExp(input: string) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function useFilters({ list, search, category, destination }: UseFiltersParams) {
  return useMemo(() => {
    const titleRegex = new RegExp(escapeRegExp(search), "i");

    return list.filter((experience) => {
      const matchesSearch = search === "" || titleRegex.test(experience.title);
      const matchesCategory = category === "" || experience.category === category;
      const matchesDestination = destination === "" || experience.destination === destination;

      return matchesSearch && matchesCategory && matchesDestination;
    });
  }, [list, search, category, destination]);
}
