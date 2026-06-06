import { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import PropertyGrid from "@/components/PropertyGrid";
import { Propiedad } from "@/lib/types";

export const metadata: Metadata = {
  title: "Revivtaliza — Donde las casas vuelven a vivir",
  description:
    "Conectamos casas abandonadas del Bajo Aragón con personas que quieren vivir diferente. Combatimos la despoblación rural en Teruel a través del mercado inmobiliario.",
};

async function getFeaturedProperties(): Promise<Propiedad[]> {
  return prisma.propiedad.findMany({
    where: { estado: "disponible" },
    orderBy: [{ destacada: "desc" }, { createdAt: "desc" }],
    take: 3,
  }) as unknown as Propiedad[];
}

export default async function HomePage() {
  const propiedades = await getFeaturedProperties();

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, #1C3A2B 0%, #2d5e47 40%, #1C3A2B 70%, #3C2E1A 100%)",
        }}
      >
        {/* Decorative overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5F0E8' fill-opacity='0.8'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        {/* Terracota accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-terracota opacity-80" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-terracota text-sm font-semibold uppercase tracking-widest mb-4">
            Bajo Aragón · Teruel
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-crema mb-6 leading-tight">
            Pueblos que vuelven
            <br />
            <span className="text-terracota">a respirar</span>
          </h1>
          <p className="text-crema/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Conectamos casas abandonadas del Bajo Aragón con personas que quieren vivir diferente.
            Sin intermediarios de ciudad. Con propósito real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/propiedades" className="btn-primary text-lg px-8 py-4 rounded-xl">
              Ver casas disponibles
            </Link>
            <Link
              href="/vender"
              className="btn-outline border-crema text-crema hover:bg-crema hover:text-tierra text-lg px-8 py-4 rounded-xl"
            >
              Tengo una casa sin usar
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-crema/50 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* La crisis — mission section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-terracota text-sm font-semibold uppercase tracking-widest mb-3">
              El problema
            </p>
            <h2 className="font-serif text-4xl font-bold text-tierra mb-4">
              Teruel se vacía. Nosotros lo cambiamos.
            </h2>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                value: "~30%",
                label: "de las casas del Bajo Aragón llevan años cerradas",
              },
              {
                value: "15+",
                label: "municipios en riesgo de despoblación en nuestra zona",
              },
              {
                value: "0€",
                label: "de tasación obligatoria — tú pones el precio",
              },
            ].map((stat) => (
              <div
                key={stat.value}
                className="bg-crema rounded-2xl p-8 text-center border border-salvia/30"
              >
                <p className="font-serif text-5xl font-bold text-terracota mb-3">{stat.value}</p>
                <p className="text-tierra/80 text-sm leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-5 text-gray-600 leading-relaxed mb-10">
            <p>
              El Bajo Aragón pierde habitantes cada año. Los jóvenes se van a la ciudad, las casas
              familiares se quedan cerradas, y los pueblos pierden vida, comercios y futuro. Es un
              ciclo que se retroalimenta y que pocas iniciativas se atreven a romper de verdad.
            </p>
            <p>
              Revivtaliza nace para cambiar eso. Conectamos a propietarios que tienen casas sin usar
              con personas que quieren vivir en el pueblo — nómadas digitales, familias hartas de la
              ciudad, jubilados que buscan tranquilidad, o simplemente gente que quiere algo diferente.
              Sin burocracia innecesaria. Con propósito.
            </p>
          </div>

          {/* Mission quote */}
          <div className="max-w-3xl mx-auto bg-verde-vida rounded-2xl p-8 text-center">
            <p className="font-serif text-xl text-crema leading-relaxed italic">
              "No somos una inmobiliaria al uso. Somos un proyecto que cree que cada casa cerrada
              es una oportunidad de traer vida a un pueblo."
            </p>
            <p className="text-terracota text-sm font-semibold mt-4 uppercase tracking-widest">
              Nuestra misión
            </p>
          </div>
        </div>
      </section>

      {/* Featured properties */}
      <section className="py-20 bg-crema">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-terracota text-sm font-semibold uppercase tracking-widest mb-3">
              Catálogo
            </p>
            <h2 className="font-serif text-4xl font-bold text-tierra mb-4">
              Casas disponibles en pueblos
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Cada propiedad es una historia y una oportunidad. Descubre las casas que esperan
              volver a tener vida en el Bajo Aragón.
            </p>
          </div>

          <PropertyGrid propiedades={propiedades} />

          <div className="text-center mt-10">
            <Link href="/propiedades" className="btn-outline inline-block">
              Ver todas las casas disponibles
            </Link>
          </div>
        </div>
      </section>

      {/* How it works — for buyers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-terracota text-sm font-semibold uppercase tracking-widest mb-3">
              Para compradores
            </p>
            <h2 className="font-serif text-4xl font-bold text-tierra mb-4">
              ¿Buscas casa en un pueblo?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Cuatro pasos para encontrar tu lugar en el Bajo Aragón y dar el salto a una vida diferente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Explora los pueblos",
                desc: "Navega nuestro catálogo de casas en municipios del Bajo Aragón. Filtra por precio, tamaño o localización.",
              },
              {
                step: "02",
                title: "Contacta directamente",
                desc: "Sin intermediarios de ciudad. Hablamos contigo, resolvemos tus dudas y coordinamos una visita.",
              },
              {
                step: "03",
                title: "Visita y decide",
                desc: "Ven a conocer la casa y el pueblo. Te ayudamos a entender el contexto local, los servicios y la comunidad.",
              },
              {
                step: "04",
                title: "Empieza tu nueva vida",
                desc: "Gestionamos toda la documentación hasta la firma. Tú solo tienes que hacer las maletas.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-verde-vida text-crema font-serif text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl font-semibold text-tierra mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para propietarios */}
      <section className="py-20 bg-terracota text-crema">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-crema/60 text-sm font-semibold uppercase tracking-widest mb-3">
              Para propietarios
            </p>
            <h2 className="font-serif text-4xl font-bold text-crema mb-4">
              ¿Tienes una casa cerrada?
            </h2>
            <p className="text-crema/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Esa casa que lleva años sin usarse puede cambiar la vida de alguien —
              y puede volver a tener vida. Nosotros lo hacemos fácil.
            </p>
          </div>

          <ul className="max-w-xl mx-auto space-y-4 mb-10">
            {[
              "Sin tasación obligatoria — tú pones el precio que quieres",
              "Gestión 100% online — sin visitas innecesarias a tu parte",
              "Publicamos en nuestra web, Idealista, Fotocasa y redes sociales",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-crema/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-crema/90 text-sm leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Link
              href="/vender"
              className="inline-block bg-crema text-tierra font-semibold text-lg px-8 py-4 rounded-xl hover:bg-crema/90 transition-colors"
            >
              Cuéntanos tu propiedad
            </Link>
          </div>
        </div>
      </section>

      {/* Municipalities */}
      <section className="py-20 bg-verde-vida text-crema">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-terracota text-sm font-semibold uppercase tracking-widest mb-3">
              Zona de actuación
            </p>
            <h2 className="font-serif text-4xl font-bold text-crema mb-4">
              Municipios donde operamos
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Samper de Calanda",
              "Alcorisa",
              "Andorra",
              "La Puebla de Híjar",
              "Híjar",
              "Chiprana",
              "Escatrón",
            ].map((municipio) => (
              <Link
                key={municipio}
                href={`/propiedades?municipio=${encodeURIComponent(municipio)}`}
                className="bg-green-800/50 hover:bg-terracota hover:text-tierra text-crema px-5 py-2.5 rounded-full text-sm font-medium transition-colors border border-green-700 hover:border-terracota"
              >
                {municipio}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-crema">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-verde-vida rounded-3xl p-10 md:p-14 text-center">
            <p className="text-terracota text-sm font-semibold uppercase tracking-widest mb-4">
              Únete al cambio
            </p>
            <h2 className="font-serif text-4xl font-bold text-crema mb-4">
              Cada casa que vuelve a vivir es un pueblo que respira
            </h2>
            <p className="text-salvia text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Ya sea que quieras encontrar tu hogar en un pueblo o que tengas una casa sin usar,
              Revivtaliza está aquí para hacer que pase algo real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/propiedades" className="btn-primary text-lg px-8 py-4 rounded-xl">
                Ver casas disponibles
              </Link>
              <Link
                href="/vender"
                className="border-2 border-crema text-crema hover:bg-crema hover:text-tierra transition-colors text-lg px-8 py-4 rounded-xl font-semibold"
              >
                Tengo una casa sin usar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
