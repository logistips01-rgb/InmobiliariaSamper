import Link from "next/link";
import Image from "next/image";
import { Propiedad } from "@/lib/types";
import { formatPrice, parseImagenes, getTipoLabel, getEstadoLabel, getEstadoColor } from "@/lib/utils";

interface PropertyCardProps {
  propiedad: Propiedad;
}

export default function PropertyCard({ propiedad }: PropertyCardProps) {
  const imagenes = parseImagenes(propiedad.imagenes);
  const mainImage = imagenes[0] || "https://placehold.co/800x600/1C3A2B/F5F0E8?text=Sin+imagen";

  return (
    <Link href={`/propiedades/${propiedad.id}`} className="card group hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={mainImage}
          alt={propiedad.titulo}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Estado badge */}
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getEstadoColor(propiedad.estado)}`}>
            {getEstadoLabel(propiedad.estado)}
          </span>
        </div>
        {/* Tipo badge */}
        <div className="absolute top-3 right-3">
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-verde-aragon text-crema-campo">
            {getTipoLabel(propiedad.tipo)}
          </span>
        </div>
        {propiedad.destacada && (
          <div className="absolute bottom-3 left-3">
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-ocre-calanda text-tierra-oscura flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Destacada
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-serif font-semibold text-tierra-oscura text-lg leading-snug mb-1 group-hover:text-verde-aragon transition-colors line-clamp-2">
          {propiedad.titulo}
        </h3>

        <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
          <svg className="w-4 h-4 text-ocre-calanda flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {propiedad.municipio}
        </p>

        {/* Specs */}
        <div className="flex items-center gap-3 text-sm text-gray-600 mb-4 flex-wrap">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            {propiedad.superficie} m²
          </span>
          {propiedad.habitaciones && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {propiedad.habitaciones} hab.
            </span>
          )}
          {propiedad.banos && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {propiedad.banos} baño{propiedad.banos > 1 ? "s" : ""}
            </span>
          )}
        </div>

        <div className="mt-auto">
          <p className="text-2xl font-bold text-verde-aragon">
            {formatPrice(propiedad.precio)}
          </p>
        </div>
      </div>
    </Link>
  );
}
