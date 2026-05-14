"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "./FavoritesProvider";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/experiences", label: "Explorar" },
  { href: "/favorites", label: "Favoritos" },
  { href: "/profile", label: "Perfil" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { favoritesCount } = useFavorites();

  return (
    <nav className="bg-deep-space-blue shadow-md p-4 flex flex-wrap gap-4 justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-adventure-blue text-cloud-white flex items-center justify-center font-bold text-lg shadow-wonder">
          WL
        </div>
        <div>
          <p className="text-lg font-bold text-cloud-white leading-tight font-sans tracking-tight">Wonderlust</p>
          <p className="text-xs text-golden-horizon font-medium">Exploracion autentica, conexion local.</p>
        </div>
      </div>

      <div className="flex gap-2 md:gap-4 items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          const label = item.href === "/favorites" ? `${item.label} (${favoritesCount})` : item.label;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-lg font-medium transition ${
                isActive
                  ? "bg-golden-horizon text-deep-space-blue"
                  : "text-cloud-white hover:text-golden-horizon"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
