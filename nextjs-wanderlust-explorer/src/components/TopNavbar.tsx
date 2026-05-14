"use client";

import Link from "next/link";
import { useState } from "react";
import { useFavorites } from "./FavoritesProvider";

export default function TopNavbar() {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const { favoritesCount } = useFavorites();
  const user = {
    name: "Juan Pérez",
  };

  return (
    <nav className="bg-deep-space-blue shadow-md p-4 flex flex-wrap gap-4 justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-adventure-blue text-cloud-white flex items-center justify-center font-bold text-lg shadow-wonder">
          WL
        </div>
        <div>
          <p className="text-lg font-bold text-cloud-white leading-tight font-sans tracking-tight">Wonderlust</p>
          <p className="text-xs text-golden-horizon font-medium">Exploración auténtica, conexión local.</p>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="flex gap-4 items-center">
        <Link href="/" className="text-cloud-white hover:text-golden-horizon font-medium transition">Inicio</Link>
        <Link href="/experiences" className="text-cloud-white hover:text-golden-horizon font-medium transition">Explorar</Link>
        <Link href="/favorites" className="text-cloud-white hover:text-golden-horizon font-medium transition">Favoritos ({favoritesCount})</Link>
        <Link href="/profile" className="text-cloud-white hover:text-golden-horizon font-medium transition">Perfil</Link>
      </div>

      <div className="relative">
        <button
          className="flex items-center gap-2 focus:outline-none hover:text-golden-horizon text-cloud-white font-medium transition"
          onClick={() => setOpenUserMenu((prev) => !prev)}
          type="button"
        >
          <span>{user.name}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 9l-7.5 7.5L4.5 9"
            />
          </svg>
        </button>
        {openUserMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
            <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Perfil
            </Link>
            <Link href="/favorites" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Favoritos
            </Link>
            <Link href="/experiences" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Explorar
            </Link>
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Inicio
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}