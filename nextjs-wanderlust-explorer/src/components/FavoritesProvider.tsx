"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type FavoritesContextValue = {
  favoriteIds: string[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
  favoritesCount: number;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export default function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const value = useMemo<FavoritesContextValue>(
    () => ({
      favoriteIds,
      isFavorite: (id: string) => favoriteIds.includes(id),
      toggleFavorite: (id: string) => {
        setFavoriteIds((current) =>
          current.includes(id) ? current.filter((favId) => favId !== id) : [...current, id]
        );
      },
      favoritesCount: favoriteIds.length,
    }),
    [favoriteIds]
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }

  return context;
}
