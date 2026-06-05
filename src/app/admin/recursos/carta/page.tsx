"use client";

import { Metadata } from "next";

export default function CartaPropietariosPage() {
  return (
    <div className="p-8 print:p-0">
      {/* Screen header */}
      <div className="mb-8 flex items-center justify-between print:hidden">
        <div>
          <h1 className="font-serif text-3xl font-bold text-tierra-oscura">Carta para propietarios</h1>
          <p className="text-gray-500 text-sm mt-1">
            Plantilla de captación para propietarios de viviendas deshabitadas
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-verde-aragon text-crema-campo px-5 py-2.5 rounded-lg font-medium hover:bg-green-800 transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Imprimir carta
        </button>
      </div>

      {/* ── CARTA FORMAL ── */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 print:shadow-none print:border-none print:rounded-none print:max-w-none max-w-3xl mx-auto">

        {/* Print styles */}
        <style>{`
          @media print {
            @page { size: A4; margin: 25mm 20mm 25mm 20mm; }
            body * { visibility: hidden !important; }
            .carta-print, .carta-print * { visibility: visible !important; }
            .carta-print { position: absolute; left: 0; top: 0; width: 100%; }
          }
        `}</style>

        <div className="carta-print p-10 print:p-0">

          {/* Letterhead */}
          <div className="border-b-2 border-verde-aragon pb-6 mb-8 flex items-start justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-verde-aragon tracking-tight">
                Inmobiliaria Samper
              </h2>
              <p className="text-sm text-gray-500 mt-0.5 italic">
                Donde encontramos el hogar que nadie ve
              </p>
            </div>
            <div className="text-right text-xs text-gray-500 space-y-0.5">
              <p>info@inmobiliariasamper.com</p>
              <p>+34 XXX XXX XXX</p>
              <p>www.inmobiliariasamper.com</p>
            </div>
          </div>

          {/* Recipient block */}
          <div className="mb-8 space-y-1">
            <p className="font-semibold text-tierra-oscura">A/A: <span className="font-normal text-gray-600">[NOMBRE PROPIETARIO]</span></p>
            <p className="text-gray-600 text-sm">[DIRECCIÓN COMPLETA DEL PROPIETARIO]</p>
            <p className="text-gray-600 text-sm">[CÓDIGO POSTAL] — [LOCALIDAD]</p>
          </div>

          {/* Date + reference */}
          <div className="mb-8 flex items-start justify-between text-sm text-gray-600">
            <div>
              <span className="font-medium text-tierra-oscura">Ref. Catastral:</span>{" "}
              <span className="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded">[REFERENCIA CATASTRAL]</span>
            </div>
            <p>Samper de Calanda, <span>[FECHA]</span></p>
          </div>

          {/* Subject */}
          <div className="mb-6 bg-crema-campo/40 border-l-4 border-verde-aragon pl-4 py-2 print:bg-gray-50">
            <p className="text-sm font-semibold text-tierra-oscura">
              Asunto: Propuesta de colaboración para la gestión de venta de inmueble
            </p>
          </div>

          {/* Body */}
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              Estimado/a <span className="font-medium text-tierra-oscura">[NOMBRE PROPIETARIO]</span>,
            </p>

            <p>
              Me dirijo a usted desde <strong>Inmobiliaria Samper</strong>, agencia inmobiliaria especializada
              en propiedades rurales del <strong>Bajo Aragón</strong> (Teruel), para presentarle una propuesta
              de colaboración que podría ser de su interés.
            </p>

            <p>
              Hemos tenido conocimiento de su propiedad (ref. catastral{" "}
              <span className="font-mono text-xs">[REFERENCIA CATASTRAL]</span>) a través del{" "}
              <em>padrón municipal de viviendas deshabitadas</em> y los datos públicos del Catastro. Sabemos
              que este tipo de inmuebles, a menudo heredados o simplemente sin uso activo, puede suponer
              una carga administrativa y de mantenimiento sin que genere ningún beneficio.
            </p>

            <p>
              Desde Inmobiliaria Samper nos especializamos precisamente en dar visibilidad a estas viviendas
              y conectarlas con compradores reales que buscan una vida tranquila en el Aragón rural: familias
              de ciudad, teletrabajadores, personas que desean recuperar sus raíces o simplemente invertir
              en un entorno natural único.
            </p>

            {/* Value proposition */}
            <div className="my-6 rounded-lg border border-gray-200 overflow-hidden print:border-gray-300">
              <div className="bg-verde-aragon px-5 py-3 print:bg-gray-100">
                <p className="text-crema-campo font-semibold text-sm print:text-gray-800">
                  ¿Qué ofrecemos?
                </p>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  {
                    icon: "💻",
                    title: "Gestión 100% online",
                    desc: "Nos encargamos de todo de forma remota. Solo le pedimos su presencia en la visita cuando haya un comprador interesado.",
                  },
                  {
                    icon: "🏷️",
                    title: "Usted fija el precio",
                    desc: "Sin tasaciones obligatorias ni presiones. El precio de venta lo decide usted, y lo asesoramos con datos reales del mercado si lo desea.",
                  },
                  {
                    icon: "📣",
                    title: "Máxima difusión",
                    desc: "Publicamos en nuestra web propia, Idealista, Fotocasa y redes sociales para llegar al mayor número de compradores posibles.",
                  },
                  {
                    icon: "📄",
                    title: "Toda la documentación",
                    desc: "Gestionamos la preparación de la documentación necesaria para la compraventa: nota simple, certificado energético, etc.",
                  },
                  {
                    icon: "✅",
                    title: "Sin compromiso ni permanencia",
                    desc: "El encargo de venta es rescindible. Si en algún momento decide no vender, puede cancelar sin penalización.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 px-5 py-3.5">
                    <span className="text-lg mt-0.5 print:hidden">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-tierra-oscura text-sm">{item.title}</p>
                      <p className="text-gray-600 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p>
              Le invitamos a contactarnos sin ningún tipo de compromiso. Estamos encantados de explicarle
              con más detalle cómo funciona el proceso y resolver cualquier duda que pueda tener.
            </p>

            {/* CTA box */}
            <div className="my-6 rounded-lg bg-ocre-calanda/20 border border-ocre-calanda/40 p-5 print:bg-gray-50 print:border-gray-300">
              <p className="font-semibold text-tierra-oscura text-sm mb-2">Contáctenos cuando lo desee:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-4 h-4 text-verde-aragon flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span><strong>+34 XXX XXX XXX</strong></span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-4 h-4 text-verde-aragon flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@inmobiliariasamper.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-4 h-4 text-verde-aragon flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span>www.inmobiliariasamper.com</span>
                </div>
              </div>
            </div>

            <p>
              Agradecemos su atención y quedamos a su entera disposición para cualquier consulta.
            </p>

            <p>Atentamente,</p>
          </div>

          {/* Signature block */}
          <div className="mt-12 pt-4">
            <div className="w-48 h-16 border-b-2 border-gray-300 mb-2" />
            <p className="text-sm font-semibold text-tierra-oscura">Inmobiliaria Samper</p>
            <p className="text-xs text-gray-500">Agente inmobiliario</p>
            <p className="text-xs text-gray-500">Bajo Aragón, Teruel</p>
          </div>

        </div>
      </div>

      {/* ── VERSION WHATSAPP / SMS ── */}
      <div className="max-w-3xl mx-auto mt-10 print:hidden">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.005L2.01 22l5.099-1.335A9.96 9.96 0 0011.999 22C17.521 22 22 17.523 22 12S17.521 2 11.999 2zm0 18a7.96 7.96 0 01-4.065-1.112l-.29-.173-3.01.787.802-2.93-.19-.302A7.96 7.96 0 014 12c0-4.411 3.589-8 7.999-8C16.411 4 20 7.589 20 12s-3.589 8-8.001 8z"/>
              </svg>
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-tierra-oscura">Versión WhatsApp / SMS</h2>
              <p className="text-xs text-gray-500 mt-0.5">Mensaje corto para primer contacto directo</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Plantilla de mensaje</p>
              <button
                onClick={() => {
                  const text = document.getElementById("whatsapp-text")?.innerText || "";
                  navigator.clipboard.writeText(text).catch(() => {});
                }}
                className="text-xs text-verde-aragon hover:underline flex items-center gap-1"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                Copiar texto
              </button>
            </div>
            <div id="whatsapp-text" className="text-sm text-gray-700 whitespace-pre-line leading-relaxed font-mono">
{`Hola [NOMBRE], soy de Inmobiliaria Samper. 👋

Hemos visto que es usted propietario de una vivienda en [MUNICIPIO] (ref. [REFERENCIA CATASTRAL]) y nos gustaría presentarle nuestro servicio de venta online gratuito.

✅ Sin tasación obligatoria — usted pone el precio
✅ Publicamos en Idealista, Fotocasa y nuestra web
✅ Sin permanencia — puede cancelar cuando quiera
✅ Nos ocupamos de todo el papeleo

Si le interesa saber más, estaremos encantados de llamarle o atenderle por este mismo canal. ¡Sin compromiso!

Inmobiliaria Samper | www.inmobiliariasamper.com`}
            </div>
          </div>

          <div className="mt-4 p-4 rounded-lg bg-ocre-calanda/10 border border-ocre-calanda/30">
            <p className="text-xs text-gray-600">
              <strong className="text-tierra-oscura">Consejo:</strong> Personalice siempre el nombre del propietario
              y el municipio antes de enviar. Un mensaje personalizado tiene mucho más porcentaje de respuesta
              que uno genérico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
