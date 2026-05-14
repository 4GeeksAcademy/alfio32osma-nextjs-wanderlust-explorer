"use client";

import ExperienceCard from "../../components/ExperienceCard";
import { useFavorites } from "../../components/FavoritesProvider";
import { experiences } from "../../data/experiences";

export default function FavoritesPage() {
  const { favoriteIds, isFavorite, toggleFavorite } = useFavorites();
  const favoriteExperiences = experiences.filter((experience) => favoriteIds.includes(experience.id));

  return (
    <main className="p-8 bg-cloud-white min-h-screen space-y-6">
      <h1 className="text-4xl font-bold text-center text-deep-space-blue font-sans">Tus Favoritos</h1>

      {favoriteExperiences.length === 0 ? (
        <p className="text-center text-deep-space-blue/70">
          Todavia no guardaste favoritos. Explora experiencias y marca el corazon.
        </p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={isFavorite(experience.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </section>
      )}
    </main>
  );
}
