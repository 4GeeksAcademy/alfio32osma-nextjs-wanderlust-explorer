import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-cloud-white font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-6 bg-cloud-white sm:items-start">
        <section className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h1 className="text-4xl font-bold mb-4 text-deep-space-blue font-sans">Explora auténticamente con Wonderlust</h1>
          <p className="text-lg text-deep-space-blue/80 mb-6 font-sans">Curaduría de experiencias inmersivas para el viajero moderno. Descubre, conecta y deja una huella positiva.</p>
          <Link href="/experiences" className="btn inline-block">
            Explorar experiencias
          </Link>
        </section>
      </main>
    </div>
  );
}
