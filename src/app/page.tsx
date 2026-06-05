import { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import PropertyGrid from "@/components/PropertyGrid";
import { Propiedad } from "@/lib/types";

export const metadata: Metadata = {
  title: "Inmobiliaria Samper — Donde encontramos el hogar que nadie ve",
  description:
    "Encuentra tu hogar en el Bajo Aragón. Casas, pisos, terrenos y locales en Samper de Calanda, Alcorisa, Andorra, Híjar y más municipios aragoneses.",
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

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-ocre-calanda text-sm font-semibold uppercase tracking-widest mb-4">
            Bajo Aragón · Teruel
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-crema-campo mb-6 leading-tight">
            Inmobiliaria
            <br />
            <span className="text-ocre-calanda">Samper</span>
          </h1>
          <p className="text-salvia text-xl md:text-2xl italic mb-8">
            "Donde encontramos el hogar que nadie ve"
          </p>
          <p className="text-crema-campo/80 text-lg mb-10 max-w-2xl mx-auto">
            Especialistas en el mercado inmobiliario del Bajo Aragón. Te ayudamos a encontrar
            tu hogar ideal en nuestra tierra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/propiedades" className="btn-primary text-lg px-8 py-4 rounded-xl">
              Ver propiedades
            </Link>
            <Link href="/contacto" className="btn-outline border-crema-campo text-crema-campo hover:bg-crema-campo hover:text-tierra-oscura text-lg px-8 py-4 rounded-xl">
              Contactar
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto">
            {[
              { value: "10+", label: "Años de experiencia" },
              { value: "200+", label: "Propiedades vendidas" },
              { value: "7", label: "Municipios" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl font-bold text-ocre-calanda">{stat.value}</p>
                <p className="text-xs text-salvia mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-crema-campo/50 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-ocre-calanda text-sm font-semibold uppercase tracking-widest mb-3">
                Quiénes somos
              </p>
              <h2 className="font-serif text-4xl font-bold text-tierra-oscura mb-6">
                Tu inmobiliaria de confianza en el Bajo Aragón
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Con más de una década de experiencia en el mercado inmobiliario bajoaragonés,
                somos la agencia de referencia en Samper de Calanda y comarca. Conocemos cada
                rincón de nuestro territorio y cada propiedad como si fuera nuestra.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Trabajamos con dedicación y honestidad para hacer realidad el sueño de cada
                cliente, ya sea vender su propiedad al mejor precio o encontrar el hogar ideal
                que se ajuste a sus necesidades y presupuesto.
              </p>
              <Link href="/contacto" className="btn-secondary inline-block">
                Hablar con nosotros
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🏡", title: "Experiencia local", desc: "Conocemos cada municipio del Bajo Aragón a fondo" },
                { icon: "🤝", title: "Trato personal", desc: "Atención individualizada para cada cliente" },
                { icon: "📋", title: "Gestión completa", desc: "Te acompañamos en todo el proceso" },
                { icon: "💰", title: "Precio justo", desc: "Valoraciones honestas y transparentes" },
              ].map((item) => (
                <div key={item.title} className="bg-crema-campo rounded-xl p-5">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-tierra-oscura mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured properties */}
      <section className="py-20 bg-crema-campo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-ocre-calanda text-sm font-semibold uppercase tracking-widest mb-3">
              Catálogo
            </p>
            <h2 className="font-serif text-4xl font-bold text-tierra-oscura mb-4">
              Propiedades destacadas
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Descubre nuestra selección de propiedades disponibles en el Bajo Aragón.
            </p>
          </div>

          <PropertyGrid propiedades={propiedades} />

          <div className="text-center mt-10">
            <Link href="/propiedades" className="btn-outline inline-block">
              Ver todas las propiedades
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-ocre-calanda text-sm font-semibold uppercase tracking-widest mb-3">
              Proceso
            </p>
            <h2 className="font-serif text-4xl font-bold text-tierra-oscura mb-4">
              ¿Cómo trabajamos?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Te acompañamos en cada paso del proceso para que la experiencia sea sencilla y sin sorpresas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Nos contactas",
                desc: "Cuéntanos qué estás buscando o qué quieres vender. Nos adaptamos a tus necesidades.",
              },
              {
                step: "02",
                title: "Analizamos",
                desc: "Estudiamos tu caso, valoramos la propiedad y te ofrecemos las mejores opciones del mercado.",
              },
              {
                step: "03",
                title: "Visitamos",
                desc: "Organizamos visitas a las propiedades que más se ajusten a tus preferencias.",
              },
              {
                step: "04",
                title: "Cerramos",
                desc: "Gestionamos toda la documentación y te acompañamos hasta la firma ante notario.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-verde-aragon text-crema-campo font-serif text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl font-semibold text-tierra-oscura mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Municipalities */}
      <section className="py-20 bg-verde-aragon text-crema-campo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-ocre-calanda text-sm font-semibold uppercase tracking-widest mb-3">
              Zona de actuación
            </p>
            <h2 className="font-serif text-4xl font-bold text-crema-campo mb-4">
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
                className="bg-green-800/50 hover:bg-ocre-calanda hover:text-tierra-oscura text-crema-campo px-5 py-2.5 rounded-full text-sm font-medium transition-colors border border-green-700 hover:border-ocre-calanda"
              >
                {municipio}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-crema-campo">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-tierra-oscura mb-4">
            ¿Tienes una propiedad que vender?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Contacta con nosotros y te haremos una valoración gratuita sin compromiso.
            Ponemos tu propiedad en manos expertas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-secondary text-lg px-8 py-4 rounded-xl">
              Solicitar valoración gratuita
            </Link>
            <a href="tel:+34978000000" className="btn-outline text-lg px-8 py-4 rounded-xl">
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
