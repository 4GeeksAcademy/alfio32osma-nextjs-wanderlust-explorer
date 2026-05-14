"use client";

import { useFavorites } from "../../components/FavoritesProvider";

export default function ProfilePage() {
  const { favoritesCount } = useFavorites();

  const user = {
    name: "Juan Perez",
    email: "juan.perez@example.com",
    memberSince: "2024",
  };

  return (
    <main className="p-8 bg-cloud-white min-h-screen">
      <section className="max-w-2xl mx-auto card p-6 space-y-3">
        <h1 className="text-3xl font-bold text-adventure-blue font-sans">Perfil del Viajero</h1>
        <p className="text-deep-space-blue">
          <strong>Nombre:</strong> {user.name}
        </p>
        <p className="text-deep-space-blue">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-deep-space-blue">
          <strong>Miembro desde:</strong> {user.memberSince}
        </p>
        <p className="text-golden-horizon text-lg">
          <strong>Favoritos guardados:</strong> {favoritesCount}
        </p>
      </section>
    </main>
  );
}
