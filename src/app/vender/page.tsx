"use client";

import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";

const municipios = [
  "Samper de Calanda",
  "Alcorisa",
  "Andorra",
  "La Puebla de Híjar",
  "Híjar",
  "Chiprana",
  "Escatrón",
  "Otro",
];

const pasos = [
  {
    num: "01",
    icon: "📱",
    title: "Nos cuentas tu propiedad",
    desc: "Rellenas el formulario online con los datos básicos: ubicación, tipo de propiedad y el precio que tú decides pedir. Sin tasaciones ni imposiciones.",
  },
  {
    num: "02",
    icon: "📸",
    title: "Preparamos el anuncio",
    desc: "Venimos a hacer las fotos (si es necesario) y redactamos una ficha profesional. Publicamos en nuestra web y los principales portales: Idealista, Fotocasa y más.",
  },
  {
    num: "03",
    icon: "📞",
    title: "Gestionamos los interesados",
    desc: "Recibimos las llamadas y consultas, filtramos a los compradores serios y coordinamos las visitas. Tú no tienes que hacer nada más.",
  },
  {
    num: "04",
    icon: "✍️",
    title: "Cerramos la venta",
    desc: "Acompañamos la negociación y toda la documentación hasta la firma ante notario. Todo el proceso, sin sorpresas.",
  },
];

const ventajas = [
  {
    icon: "🌐",
    title: "100% online",
    desc: "Todo el proceso de gestión es online: anuncio, consultas, papeleo. Solo las visitas presenciales cuando haya compradores interesados.",
  },
  {
    icon: "💶",
    title: "Tú pones el precio",
    desc: "Sin tasaciones obligatorias. Decides el precio que quieres pedir por tu propiedad y nosotros lo publicamos tal cual.",
  },
  {
    icon: "📢",
    title: "Máxima difusión",
    desc: "Tu propiedad en nuestra web + Idealista + Fotocasa + Milanuncios + redes sociales. Llegamos a compradores de Zaragoza, Barcelona y toda España.",
  },
  {
    icon: "🏚️",
    title: "Cualquier estado",
    desc: "Vendemos casas en buen estado y también propiedades en desuso, antiguas o que necesitan reforma. Encontramos el comprador adecuado para cada caso.",
  },
  {
    icon: "📋",
    title: "Sin complicaciones",
    desc: "Nos encargamos de toda la gestión documental: nota simple, cédula de habitabilidad, contrato de arras, escritura. Tú solo firmas.",
  },
  {
    icon: "🤝",
    title: "Trato directo",
    desc: "Somos una inmobiliaria local, no una gran corporación. Tendrás siempre el mismo interlocutor que conoce tu propiedad al detalle.",
  },
];

export default function VenderPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    municipio: "",
    direccion: "",
    tipo: "",
    precio: "",
    superficie: "",
    descripcion: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/encargo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setEnviado(true);
    } catch {
      setError("Ha habido un error. Por favor, inténtalo de nuevo o llámanos directamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 flex items-center"
        style={{
          background: "linear-gradient(135deg, #1C3A2B 0%, #2d5e47 50%, #1C3A2B 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-ocre-calanda text-sm font-semibold uppercase tracking-widest mb-4">
              Vende tu propiedad
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-crema-campo mb-6 leading-tight">
              Tu precio.
              <br />
              <span className="text-ocre-calanda">Nuestro trabajo.</span>
            </h1>
            <p className="text-salvia text-xl mb-8 leading-relaxed">
              Ponemos tu propiedad en el mercado sin complicaciones. Tú decides el precio,
              nosotros nos encargamos de todo lo demás — online, sin tasaciones y sin burocracia.
            </p>
            <a
              href="#formulario"
              className="btn-primary text-lg px-8 py-4 rounded-xl inline-block"
            >
              Quiero vender mi propiedad
            </a>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-ocre-calanda text-sm font-semibold uppercase tracking-widest mb-3">
              Por qué elegirnos
            </p>
            <h2 className="font-serif text-4xl font-bold text-tierra-oscura mb-4">
              Vender con Inmobiliaria Samper
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Una inmobiliaria pensada para el Bajo Aragón, que entiende las particularidades
              del mercado local y trabaja para dar salida a propiedades que nadie más ve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventajas.map((v) => (
              <div
                key={v.title}
                className="bg-crema-campo rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-serif text-lg font-semibold text-tierra-oscura mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 bg-crema-campo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-ocre-calanda text-sm font-semibold uppercase tracking-widest mb-3">
              El proceso
            </p>
            <h2 className="font-serif text-4xl font-bold text-tierra-oscura mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Cuatro pasos sencillos. Todo lo que pueda hacerse online, lo hacemos online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pasos.map((paso, i) => (
              <div key={paso.num} className="relative">
                {i < pasos.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-salvia/40 z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-verde-aragon text-crema-campo font-serif text-xl font-bold flex items-center justify-center mx-auto mb-4">
                    {paso.num}
                  </div>
                  <div className="text-3xl mb-3">{paso.icon}</div>
                  <h3 className="font-serif text-lg font-semibold text-tierra-oscura mb-2">
                    {paso.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mensaje para propiedades en desuso */}
      <section className="py-16 bg-verde-aragon text-crema-campo">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-4xl mb-6">🏚️</p>
          <h2 className="font-serif text-3xl font-bold text-crema-campo mb-4">
            ¿Tienes una casa que lleva años cerrada?
          </h2>
          <p className="text-salvia text-lg leading-relaxed mb-6">
            En el Bajo Aragón hay muchas viviendas en desuso que sus propietarios no saben
            cómo vender. Nos especializamos exactamente en eso: encontrar compradores para
            propiedades que nadie más consigue colocar en el mercado.
          </p>
          <p className="text-crema-campo/80">
            Nómadas digitales, familias buscando casa rural, inversores de bajo presupuesto...
            Hay compradores para cada propiedad. Déjanos encontrarlos.
          </p>
        </div>
      </section>

      {/* Formulario */}
      <section id="formulario" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-ocre-calanda text-sm font-semibold uppercase tracking-widest mb-3">
              Empezamos
            </p>
            <h2 className="font-serif text-4xl font-bold text-tierra-oscura mb-4">
              Cuéntanos tu propiedad
            </h2>
            <p className="text-gray-600">
              Rellena el formulario y nos ponemos en contacto contigo en menos de 24 horas.
              Sin compromiso.
            </p>
          </div>

          {enviado ? (
            <div className="bg-verde-aragon/10 border border-verde-aragon/30 rounded-2xl p-10 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-serif text-2xl font-bold text-tierra-oscura mb-3">
                ¡Recibido!
              </h3>
              <p className="text-gray-600 mb-6">
                Hemos recibido los datos de tu propiedad. Nos ponemos en contacto contigo
                en menos de 24 horas para hablar de los siguientes pasos.
              </p>
              <Link href="/" className="btn-secondary inline-block">
                Volver al inicio
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-crema-campo rounded-2xl p-8 space-y-6"
            >
              {/* Datos personales */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-tierra-oscura mb-4 pb-2 border-b border-salvia/40">
                  Tus datos de contacto
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-tierra-oscura mb-1">
                      Nombre y apellidos *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      className="w-full border border-salvia/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-verde-aragon bg-white"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-tierra-oscura mb-1">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      required
                      value={form.telefono}
                      onChange={handleChange}
                      className="w-full border border-salvia/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-verde-aragon bg-white"
                      placeholder="600 000 000"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-tierra-oscura mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-salvia/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-verde-aragon bg-white"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Datos propiedad */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-tierra-oscura mb-4 pb-2 border-b border-salvia/40">
                  Datos de la propiedad
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-tierra-oscura mb-1">
                      Municipio *
                    </label>
                    <select
                      name="municipio"
                      required
                      value={form.municipio}
                      onChange={handleChange}
                      className="w-full border border-salvia/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-verde-aragon bg-white"
                    >
                      <option value="">Selecciona municipio</option>
                      {municipios.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-tierra-oscura mb-1">
                      Tipo de propiedad *
                    </label>
                    <select
                      name="tipo"
                      required
                      value={form.tipo}
                      onChange={handleChange}
                      className="w-full border border-salvia/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-verde-aragon bg-white"
                    >
                      <option value="">Selecciona tipo</option>
                      <option value="casa">Casa / Chalet</option>
                      <option value="piso">Piso / Apartamento</option>
                      <option value="terreno">Terreno / Parcela</option>
                      <option value="local">Local / Nave</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-tierra-oscura mb-1">
                      Dirección aproximada
                    </label>
                    <input
                      type="text"
                      name="direccion"
                      value={form.direccion}
                      onChange={handleChange}
                      className="w-full border border-salvia/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-verde-aragon bg-white"
                      placeholder="Calle, número o referencia catastral (opcional)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-tierra-oscura mb-1">
                      Precio de venta (€) *
                    </label>
                    <input
                      type="number"
                      name="precio"
                      required
                      min="0"
                      value={form.precio}
                      onChange={handleChange}
                      className="w-full border border-salvia/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-verde-aragon bg-white"
                      placeholder="Ej: 45000"
                    />
                    <p className="text-xs text-gray-500 mt-1">Tú decides el precio. Sin tasación obligatoria.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-tierra-oscura mb-1">
                      Superficie (m²)
                    </label>
                    <input
                      type="number"
                      name="superficie"
                      min="0"
                      value={form.superficie}
                      onChange={handleChange}
                      className="w-full border border-salvia/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-verde-aragon bg-white"
                      placeholder="Aproximada"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-tierra-oscura mb-1">
                      Descripción o notas adicionales
                    </label>
                    <textarea
                      name="descripcion"
                      value={form.descripcion}
                      onChange={handleChange}
                      rows={4}
                      className="w-full border border-salvia/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-verde-aragon bg-white resize-none"
                      placeholder="Estado de la propiedad, características especiales, cuándo está disponible para visitas..."
                    />
                  </div>
                </div>
              </div>

              {error && (
                <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-4 rounded-xl text-lg font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Enviando..." : "Enviar solicitud de encargo"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Al enviar este formulario aceptas que nos pongamos en contacto contigo para
                gestionar el encargo de venta de tu propiedad.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
