import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <section className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Explora el mundo con Wanderlust Explorer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Descubre experiencias únicas y vive aventuras inolvidables en cualquier rincón del mundo.
          </p>
          <Link href="/experiences">
            <a className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
              Explorar experiencias
            </a>
          </Link>
        </section>
      </main>
    </div>
  );
}
