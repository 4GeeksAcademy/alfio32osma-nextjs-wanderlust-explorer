"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ExperienceCard from "../../components/ExperienceCard";
import FilterBar from "../../components/FilterBar";
import SearchBar from "../../components/SearchBar";
import { useFavorites } from "../../components/FavoritesProvider";
import { experiences } from "../../data/experiences";
import { useFilters } from "../../hooks/useFilters";

export default function ExperiencesPage() {
  const initialVisible = 12;
  const visibleStep = 12;

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { isFavorite, toggleFavorite } = useFavorites();

  const [search, setSearch] = useState(searchParams.get("q") ?? "");
  const [category, setCategory] = useState(searchParams.get("category") ?? "");
  const [destination, setDestination] = useState(searchParams.get("destination") ?? "");
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  useEffect(() => {
    setSearch(searchParams.get("q") ?? "");
    setCategory(searchParams.get("category") ?? "");
    setDestination(searchParams.get("destination") ?? "");
  }, [searchParams]);

  useEffect(() => {
    setVisibleCount(initialVisible);
  }, [search, category, destination]);

  const categories = useMemo(
    () => Array.from(new Set(experiences.map((experience) => experience.category))),
    []
  );

  const destinations = useMemo(
    () => Array.from(new Set(experiences.map((experience) => experience.destination))),
    []
  );

  const filteredExperiences = useFilters({
    list: experiences,
    search,
    category,
    destination,
  });

  useEffect(() => {
    document.title = `Explorar (${filteredExperiences.length}) | Wanderlust`;
  }, [filteredExperiences.length]);

  const updateUrl = (nextSearch: string, nextCategory: string, nextDestination: string) => {
    const params = new URLSearchParams();

    if (nextSearch !== "") {
      params.set("q", nextSearch);
    }

    if (nextCategory !== "") {
      params.set("category", nextCategory);
    }

    if (nextDestination !== "") {
      params.set("destination", nextDestination);
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname);
  };

  const visibleExperiences = filteredExperiences.slice(0, visibleCount);

  return (
    <main className="p-8 bg-cloud-white min-h-screen space-y-8">
      <h1 className="text-4xl font-bold text-center text-deep-space-blue font-sans">
        Explorador de Experiencias
      </h1>

      <section className="card p-4 md:p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <SearchBar
          value={search}
          onChange={(nextValue) => {
            setSearch(nextValue);
            updateUrl(nextValue, category, destination);
          }}
        />
        <FilterBar
          categories={categories}
          destinations={destinations}
          categoryValue={category}
          destinationValue={destination}
          onCategoryChange={(nextValue) => {
            setCategory(nextValue);
            updateUrl(search, nextValue, destination);
          }}
          onDestinationChange={(nextValue) => {
            setDestination(nextValue);
            updateUrl(search, category, nextValue);
          }}
        />
      </section>

      <p className="text-sm text-deep-space-blue/70" aria-live="polite">
        Resultados: {filteredExperiences.length}
      </p>

      {filteredExperiences.length === 0 ? (
        <p className="card p-6 text-center text-deep-space-blue/70">No se encontraron resultados.</p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={isFavorite(experience.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </section>
      )}

      {visibleCount < filteredExperiences.length && (
        <div className="flex justify-center pb-6">
          <button
            type="button"
            className="btn"
            onClick={() => setVisibleCount((current) => current + visibleStep)}
          >
            Ver mas
          </button>
        </div>
      )}
    </main>
  );
}
