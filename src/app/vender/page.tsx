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
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
    ),
    title: "Nos cuentas tu propiedad",
    desc: "Rellenas el formulario online con los datos básicos: ubicación, tipo de propiedad y el precio que tú decides pedir. Sin tasaciones ni imposiciones.",
  },
  {
    num: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ),
    title: "Preparamos el anuncio",
    desc: "Venimos a hacer las fotos (si es necesario) y redactamos una ficha profesional. Publicamos en nuestra web y los principales portales: Idealista, Fotocasa y más.",
  },
  {
    num: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
    ),
    title: "Gestionamos los interesados",
    desc: "Recibimos las llamadas y consultas, filtramos a los compradores serios y coordinamos las visitas. Tú no tienes que hacer nada más.",
  },
  {
    num: "04",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: "Cerramos la venta",
    desc: "Acompañamos la negociación y toda la documentación hasta la firma ante notario. Todo el proceso, sin sorpresas.",
  },
];

const ventajas = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    ),
    title: "100% online",
    desc: "Todo el proceso de gestión es online: anuncio, consultas, papeleo. Solo las visitas presenciales cuando haya compradores interesados.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: "Tú pones el precio",
    desc: "Sin tasaciones obligatorias. Decides el precio que quieres pedir por tu propiedad y nosotros lo publicamos tal cual.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
    ),
    title: "Máxima difusión",
    desc: "Tu propiedad en nuestra web + Idealista + Fotocasa + Milanuncios + redes sociales. Llegamos a compradores de Zaragoza, Barcelona y toda España.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    ),
    title: "Cualquier estado",
    desc: "Vendemos casas en buen estado y también propiedades en desuso, antiguas o que necesitan reforma. Encontramos el comprador adecuado para cada caso.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
    ),
    title: "Sin complicaciones",
    desc: "Nos encargamos de toda la gestión documental: nota simple, cédula de habitabilidad, contrato de arras, escritura. Tú solo firmas.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
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
                <div className="text-verde-aragon mb-4">{v.icon}</div>
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
                  <div className="text-salvia mb-3">{paso.icon}</div>
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
          <div className="flex justify-center mb-6">
            <svg className="w-12 h-12 text-ocre-calanda" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          </div>
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
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-verde-aragon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-tierra-oscura mb-3">
                Solicitud recibida
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
