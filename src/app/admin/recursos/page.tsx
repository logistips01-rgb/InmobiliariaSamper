import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recursos | Inmobiliaria Samper",
};

export default function RecursosPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-tierra-oscura">Recursos</h1>
        <p className="text-gray-500 text-sm mt-1">
          Documentos y materiales de apoyo para la gestión del negocio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        {/* Carta propietarios */}
        <Link
          href="/admin/recursos/carta"
          className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-verde-aragon/40 transition-all p-6 flex flex-col"
        >
          <div className="w-12 h-12 bg-verde-aragon/10 rounded-lg flex items-center justify-center text-verde-aragon mb-4 group-hover:bg-verde-aragon group-hover:text-crema-campo transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="font-serif text-xl font-bold text-tierra-oscura mb-2">
            Carta para propietarios
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed flex-1">
            Plantilla de carta profesional para contactar con propietarios de viviendas deshabitadas
            encontradas en el padrón municipal o el Catastro. Incluye versión larga (imprimible en A4)
            y versión corta para WhatsApp/SMS.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-verde-aragon font-medium">
            Abrir documento
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>

        {/* Estrategia redes */}
        <Link
          href="/admin/recursos/redes"
          className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-ocre-calanda/60 transition-all p-6 flex flex-col"
        >
          <div className="w-12 h-12 bg-ocre-calanda/20 rounded-lg flex items-center justify-center text-ocre-calanda mb-4 group-hover:bg-ocre-calanda group-hover:text-tierra-oscura transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </div>
          <h2 className="font-serif text-xl font-bold text-tierra-oscura mb-2">
            Estrategia de redes sociales
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed flex-1">
            Plan completo de contenido para Instagram y Facebook. Incluye objetivos, pilares de
            contenido con distribución porcentual, calendario semanal, 20 ideas de publicaciones
            con hooks y hashtags, guía de tono y herramientas gratuitas recomendadas.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-ocre-calanda font-medium">
            Abrir documento
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Info note */}
      <div className="mt-8 max-w-3xl p-4 bg-crema-campo/40 border border-gray-200 rounded-lg">
        <p className="text-sm text-gray-600 flex items-start gap-2">
          <svg className="w-4 h-4 text-verde-aragon mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Esta sección almacena documentos de uso interno para la operación diaria de Inmobiliaria Samper.
          Los documentos no son visibles para los usuarios del sitio web.
        </p>
      </div>
    </div>
  );
}
