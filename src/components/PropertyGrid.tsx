import { Propiedad } from "@/lib/types";
import PropertyCard from "./PropertyCard";

interface PropertyGridProps {
  propiedades: Propiedad[];
  emptyMessage?: string;
}

export default function PropertyGrid({
  propiedades,
  emptyMessage = "No se encontraron propiedades.",
}: PropertyGridProps) {
  if (propiedades.length === 0) {
    return (
      <div className="text-center py-16">
        <svg className="mx-auto w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <p className="text-gray-500 text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {propiedades.map((propiedad) => (
        <PropertyCard key={propiedad.id} propiedad={propiedad} />
      ))}
    </div>
  );
}
