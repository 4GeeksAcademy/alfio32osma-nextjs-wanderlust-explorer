"use client";

import Link from "next/link";
import type { Experience } from "../data/experience.interface";

type ExperienceCardProps = {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
};

export default function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) {
  return (
    <article className="card overflow-hidden hover:shadow-lg transition duration-wonder">
      <img src={experience.imageUrl} alt={experience.title} className="w-full h-48 object-cover" />

      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-bold text-adventure-blue font-sans leading-tight">{experience.title}</h2>
          <button
            type="button"
            aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
            onClick={() => onToggleFavorite(experience.id)}
            className={`rounded-full px-3 py-2 text-xl leading-none border border-adventure-blue transition ${
              isFavorite
                ? "!bg-golden-horizon !text-deep-space-blue hover:!bg-golden-horizon"
                : "!bg-cloud-white !text-adventure-blue hover:!bg-cloud-white"
            }`}
          >
            {isFavorite ? "♥" : "♡"}
          </button>
        </div>

        <p className="text-deep-space-blue/80 text-sm font-sans">{experience.description}</p>
        <p className="text-deep-space-blue/70 text-sm">{experience.category}</p>
        <p className="text-deep-space-blue/70 text-sm">{experience.destination}</p>
        <p className="text-golden-horizon font-bold">${experience.price}</p>
        <p className="text-golden-horizon text-sm">Rating: {experience.rating}</p>

        <Link href={`/experiences/${experience.id}`} className="btn mt-2 inline-block">
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
