"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useFavorites } from "../../../components/FavoritesProvider";
import { experiences } from "../../../data/experiences";

export default function ExperienceDetailPage() {
  const params = useParams<{ id: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();

  const experience = experiences.find((entry) => entry.id === params.id);

  if (!experience) {
    return (
      <main className="p-8 bg-cloud-white min-h-screen">
        <div className="max-w-3xl mx-auto card p-6 space-y-4">
          <h1 className="text-2xl font-bold text-adventure-blue">Experiencia no encontrada</h1>
          <p className="text-deep-space-blue/80">El identificador solicitado no existe en el dataset local.</p>
          <Link href="/experiences" className="btn inline-block">
            Volver al explorador
          </Link>
        </div>
      </main>
    );
  }

  const favorite = isFavorite(experience.id);

  return (
    <main className="p-8 bg-cloud-white min-h-screen">
      <article className="max-w-4xl mx-auto card overflow-hidden">
        <img src={experience.imageUrl} alt={experience.title} className="w-full h-72 object-cover" />

        <div className="p-6 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl font-bold text-adventure-blue font-sans">{experience.title}</h1>
            <button
              type="button"
              onClick={() => toggleFavorite(experience.id)}
              className="rounded-full px-3 py-2 text-2xl leading-none"
              aria-label={favorite ? "Quitar de favoritos" : "Agregar a favoritos"}
            >
              {favorite ? "♥" : "♡"}
            </button>
          </div>

          <p className="text-deep-space-blue/80">{experience.description}</p>
          <p className="text-deep-space-blue/70">
            <strong>Categoria:</strong> {experience.category}
          </p>
          <p className="text-deep-space-blue/70">
            <strong>Destino:</strong> {experience.destination}
          </p>
          <p className="text-golden-horizon text-lg font-semibold">
            <strong>Precio:</strong> ${experience.price}
          </p>
          <p className="text-golden-horizon">
            <strong>Rating:</strong> {experience.rating}
          </p>

          <Link href="/experiences" className="btn mt-3 inline-block">
            Volver al explorador
          </Link>
        </div>
      </article>
    </main>
  );
}
