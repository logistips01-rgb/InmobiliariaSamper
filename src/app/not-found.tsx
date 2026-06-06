import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-crema flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="font-serif text-8xl font-bold text-verde-vida opacity-20 mb-4">404</p>
        <h1 className="font-serif text-3xl font-bold text-tierra mb-3">
          Página no encontrada
        </h1>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn-secondary">
            Volver al inicio
          </Link>
          <Link href="/propiedades" className="btn-outline">
            Ver propiedades
          </Link>
        </div>
      </div>
    </div>
  );
}
