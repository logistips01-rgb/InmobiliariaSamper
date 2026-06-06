import { Metadata } from "next";
import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import PropertyGrid from "@/components/PropertyGrid";
import FilterSidebar from "@/components/FilterSidebar";
import { Propiedad } from "@/lib/types";

export const metadata: Metadata = {
  title: "Casas en pueblos del Bajo Aragón",
  description:
    "Explora nuestro catálogo de casas disponibles en municipios del Bajo Aragón. Encuentra tu hogar en el pueblo y contribuye a revitalizar el territorio.",
};

interface SearchParams {
  tipo?: string;
  municipio?: string;
  precioMin?: string;
  precioMax?: string;
  habitaciones?: string;
}

async function getPropiedades(filters: SearchParams): Promise<Propiedad[]> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = {};

  if (filters.tipo) where.tipo = filters.tipo;
  if (filters.municipio) where.municipio = filters.municipio;
  if (filters.precioMin || filters.precioMax) {
    where.precio = {};
    if (filters.precioMin) where.precio.gte = parseFloat(filters.precioMin);
    if (filters.precioMax) where.precio.lte = parseFloat(filters.precioMax);
  }
  if (filters.habitaciones) {
    where.habitaciones = { gte: parseInt(filters.habitaciones) };
  }

  return prisma.propiedad.findMany({
    where,
    orderBy: [{ destacada: "desc" }, { createdAt: "desc" }],
  }) as unknown as Propiedad[];
}

export default async function PropiedadesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const propiedades = await getPropiedades(searchParams);

  const activeFilters = Object.values(searchParams).filter(Boolean).length;

  return (
    <div className="bg-crema min-h-screen">
      {/* Header */}
      <div className="bg-verde-vida text-crema py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold mb-2">Casas en pueblos del Bajo Aragón</h1>
          <p className="text-salvia">
            {propiedades.length} propiedad{propiedades.length !== 1 ? "es" : ""} encontrada{propiedades.length !== 1 ? "s" : ""}
            {activeFilters > 0 ? ` con ${activeFilters} filtro${activeFilters > 1 ? "s" : ""} activo${activeFilters > 1 ? "s" : ""}` : ""}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-72 flex-shrink-0">
            <Suspense fallback={<div className="bg-white rounded-xl h-96 animate-pulse" />}>
              <FilterSidebar />
            </Suspense>
          </div>

          {/* Results */}
          <div className="flex-1">
            <PropertyGrid
              propiedades={propiedades}
              emptyMessage="No se encontraron propiedades con los filtros aplicados. Prueba a cambiar los criterios de búsqueda."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
