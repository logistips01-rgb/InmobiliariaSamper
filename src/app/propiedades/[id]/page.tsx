import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ImageGallery from "@/components/ImageGallery";
import ContactForm from "@/components/ContactForm";
import {
  formatPrice,
  formatDate,
  parseImagenes,
  getTipoLabel,
  getEstadoLabel,
  getEstadoColor,
} from "@/lib/utils";
import { Propiedad } from "@/lib/types";

interface Props {
  params: { id: string };
}

async function getPropiedad(id: number): Promise<Propiedad | null> {
  return prisma.propiedad.findUnique({ where: { id } }) as unknown as Promise<Propiedad | null>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = parseInt(params.id);
  if (isNaN(id)) return { title: "Propiedad no encontrada" };

  const propiedad = await getPropiedad(id);
  if (!propiedad) return { title: "Propiedad no encontrada" };

  return {
    title: propiedad.titulo,
    description: `${getTipoLabel(propiedad.tipo)} en ${propiedad.municipio}. ${propiedad.superficie} m². ${formatPrice(propiedad.precio)}.`,
  };
}

export default async function PropiedadDetailPage({ params }: Props) {
  const id = parseInt(params.id);
  if (isNaN(id)) notFound();

  const propiedad = await getPropiedad(id);
  if (!propiedad) notFound();

  const imagenes = parseImagenes(propiedad.imagenes);

  return (
    <div className="bg-crema-campo min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm flex items-center gap-2 text-gray-500">
            <Link href="/" className="hover:text-verde-aragon transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/propiedades" className="hover:text-verde-aragon transition-colors">Propiedades</Link>
            <span>/</span>
            <span className="text-tierra-oscura font-medium truncate">{propiedad.titulo}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title and badges */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-verde-aragon text-crema-campo">
                  {getTipoLabel(propiedad.tipo)}
                </span>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getEstadoColor(propiedad.estado)}`}>
                  {getEstadoLabel(propiedad.estado)}
                </span>
                {propiedad.destacada && (
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-ocre-calanda text-tierra-oscura">
                    ⭐ Destacada
                  </span>
                )}
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-tierra-oscura mb-2">
                {propiedad.titulo}
              </h1>
              <p className="text-gray-600 flex items-center gap-1">
                <svg className="w-4 h-4 text-ocre-calanda" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {propiedad.ubicacion}, {propiedad.municipio}
              </p>
            </div>

            {/* Gallery */}
            <ImageGallery images={imagenes} title={propiedad.titulo} />

            {/* Description */}
            <div className="bg-white rounded-xl p-6">
              <h2 className="font-serif text-xl font-semibold text-tierra-oscura mb-4">
                Descripción
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {propiedad.descripcion}
              </p>
            </div>

            {/* Specs */}
            <div className="bg-white rounded-xl p-6">
              <h2 className="font-serif text-xl font-semibold text-tierra-oscura mb-4">
                Características
              </h2>
              <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <SpecItem label="Tipo" value={getTipoLabel(propiedad.tipo)} />
                <SpecItem label="Municipio" value={propiedad.municipio} />
                <SpecItem label="Estado" value={getEstadoLabel(propiedad.estado)} />
                <SpecItem label="Superficie construida" value={`${propiedad.superficie} m²`} />
                {propiedad.superficieParcela && (
                  <SpecItem label="Superficie parcela" value={`${propiedad.superficieParcela} m²`} />
                )}
                {propiedad.habitaciones && (
                  <SpecItem label="Habitaciones" value={String(propiedad.habitaciones)} />
                )}
                {propiedad.banos && (
                  <SpecItem label="Baños" value={String(propiedad.banos)} />
                )}
                <SpecItem label="Referencia" value={`#${propiedad.id}`} />
                <SpecItem label="Publicado" value={formatDate(propiedad.createdAt)} />
              </dl>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price card */}
            <div className="bg-white rounded-xl p-6 shadow-md sticky top-20">
              <p className="text-3xl font-bold text-verde-aragon mb-1">
                {formatPrice(propiedad.precio)}
              </p>
              {propiedad.habitaciones && (
                <p className="text-sm text-gray-500 mb-4">
                  {formatPrice(Math.round(propiedad.precio / propiedad.superficie))} / m²
                </p>
              )}

              <div className="flex gap-3 text-sm text-gray-600 mb-6 flex-wrap">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  {propiedad.superficie} m²
                </span>
                {propiedad.habitaciones && (
                  <span className="flex items-center gap-1">
                    🛏 {propiedad.habitaciones} hab.
                  </span>
                )}
                {propiedad.banos && (
                  <span className="flex items-center gap-1">
                    🚿 {propiedad.banos} baño{propiedad.banos > 1 ? "s" : ""}
                  </span>
                )}
              </div>

              <div className="border-t pt-6">
                <h3 className="font-serif font-semibold text-tierra-oscura mb-4">
                  ¿Te interesa esta propiedad?
                </h3>
                <ContactForm
                  propiedadId={propiedad.id}
                  propiedadTitulo={propiedad.titulo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-crema-campo rounded-lg p-3">
      <dt className="text-xs text-gray-500 mb-0.5">{label}</dt>
      <dd className="font-semibold text-tierra-oscura text-sm">{value}</dd>
    </div>
  );
}
