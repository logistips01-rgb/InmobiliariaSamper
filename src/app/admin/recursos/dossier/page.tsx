"use client";

export default function DossierAyuntamientosPage() {
  return (
    <div className="p-8 print:p-0">
      {/* Screen header */}
      <div className="mb-8 flex items-center justify-between print:hidden">
        <div>
          <h1 className="font-serif text-3xl font-bold text-tierra">Dossier para ayuntamientos</h1>
          <p className="text-gray-500 text-sm mt-1">
            Propuesta de colaboración para municipios del Bajo Aragón
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-verde-vida text-crema px-5 py-2.5 rounded-lg font-medium hover:bg-green-800 transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Imprimir dossier
        </button>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          @page { size: A4; margin: 20mm 18mm 20mm 18mm; }
          body * { visibility: hidden !important; }
          .dossier-print, .dossier-print * { visibility: visible !important; }
          .dossier-print { position: absolute; left: 0; top: 0; width: 100%; }
          .page-break { page-break-before: always; }
          .no-break { page-break-inside: avoid; }
        }
      `}</style>

      {/* Dossier document */}
      <div className="dossier-print bg-white rounded-xl shadow-sm border border-gray-200 print:shadow-none print:border-none print:rounded-none print:max-w-none max-w-3xl mx-auto">
        <div className="p-10 print:p-0">

          {/* ── PORTADA ── */}
          <div className="no-break">
            {/* Top bar */}
            <div className="h-2 bg-verde-vida rounded-t-lg print:rounded-none mb-10 print:mb-8" />

            {/* Logo & tagline */}
            <div className="text-center mb-10">
              <h1 className="font-serif text-5xl font-bold text-verde-vida tracking-tight mb-2">
                Revivtaliza
              </h1>
              <p className="text-terracota italic text-lg font-medium">
                Donde las casas vuelven a vivir
              </p>
            </div>

            {/* Proposal title */}
            <div className="text-center mb-10 px-8">
              <div className="border border-azul-aragon/30 rounded-xl p-6 bg-azul-aragon/5 print:border-gray-300 print:bg-gray-50">
                <p className="text-sm font-semibold text-azul-aragon uppercase tracking-widest mb-2">
                  Propuesta de colaboración para
                </p>
                <p className="font-serif text-2xl font-bold text-tierra">
                  [NOMBRE DEL MUNICIPIO]
                </p>
                <p className="text-sm text-gray-500 mt-3">Fecha: [FECHA]</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-b-2 border-verde-vida mb-10" />
          </div>

          {/* ── SECCIÓN 1: El problema que compartimos ── */}
          <div className="no-break mb-10">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-serif text-3xl font-bold text-terracota">1.</span>
              <h2 className="font-serif text-2xl font-bold text-verde-vida">
                El problema que compartimos
              </h2>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              La despoblación rural es uno de los retos más urgentes de la España vaciada. Teruel es la
              provincia con la densidad de población más baja de toda la Unión Europea: menos de{" "}
              <strong>9 habitantes por km²</strong>. En las últimas décadas, cientos de municipios del
              Bajo Aragón han perdido entre un 30% y un 60% de su población.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { stat: "−40%", label: "Pérdida de población en municipios de menos de 1.000 hab. en los últimos 30 años" },
                { stat: "+15.000", label: "Viviendas deshabitadas censadas en la provincia de Teruel" },
                { stat: "70%", label: "De los municipios turolenses tienen menos de 500 habitantes" },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="text-center bg-crema/50 border border-gray-200 rounded-lg p-4 print:bg-gray-50 print:border-gray-300 no-break"
                >
                  <p className="font-serif text-3xl font-bold text-terracota mb-1">{item.stat}</p>
                  <p className="text-xs text-gray-600 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-verde-vida/10 border-l-4 border-verde-vida rounded-r-lg p-4 mb-4 print:bg-gray-50 print:border-gray-400">
              <p className="text-sm font-semibold text-verde-vida mb-1">Las viviendas vacías aceleran la despoblación</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Una casa cerrada es una familia que no llega. El abandono del parque inmobiliario
                deteriora el paisaje urbano, reduce el valor del entorno y elimina una de las principales
                razones por las que alguien elegiría mudarse a un municipio rural: poder encontrar dónde vivir.
              </p>
            </div>

            <div className="bg-terracota/10 border-l-4 border-terracota rounded-r-lg p-4 print:bg-gray-50 print:border-gray-400">
              <p className="text-sm font-semibold text-terracota mb-1">La demanda existe — solo falta conectarla</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Miles de personas en ciudades españolas buscan activamente una vida más tranquila, con
                contacto con la naturaleza, a precios asequibles. Teletrabajadores, familias con hijos,
                jubilados activos y personas que quieren recuperar sus raíces. El mercado existe.
                El reto es hacerlo visible.
              </p>
            </div>
          </div>

          {/* ── SECCIÓN 2: Qué es Revivtaliza ── */}
          <div className="no-break mb-10 page-break">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-serif text-3xl font-bold text-terracota">2.</span>
              <h2 className="font-serif text-2xl font-bold text-verde-vida">
                Qué es Revivtaliza
              </h2>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              <strong>Revivtaliza</strong> es un proyecto de revitalización rural a través del mercado
              inmobiliario, especializado en el <strong>Bajo Aragón (Teruel)</strong>. Nuestra misión es
              conectar viviendas deshabitadas —muchas de ellas ni siquiera en el mercado— con personas
              que desean instalarse en el mundo rural, facilitando la transacción de forma profesional,
              ágil y completamente en línea.
            </p>

            <div className="grid grid-cols-1 gap-3 mb-6">
              <div className="border border-gray-200 rounded-xl overflow-hidden print:border-gray-300">
                <div className="grid grid-cols-2 divide-x divide-gray-200 print:divide-gray-300">
                  <div className="p-5">
                    <p className="text-xs font-bold text-verde-vida uppercase tracking-widest mb-3">Para el propietario</p>
                    <ul className="space-y-2">
                      {[
                        "Contacto inicial sin compromiso",
                        "El propietario fija el precio — sin tasación obligatoria",
                        "Gestión 100% online: solo presencia en visitas",
                        "Publicación en Idealista, Fotocasa y web propia",
                        "Gestión documental incluida",
                        "Rescisión del encargo en cualquier momento",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="text-verde-vida mt-0.5 font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold text-azul-aragon uppercase tracking-widest mb-3">Para el comprador</p>
                    <ul className="space-y-2">
                      {[
                        "Búsqueda personalizada según necesidades",
                        "Acceso a propiedades no publicadas en otros portales",
                        "Información detallada y fotos profesionales",
                        "Asesoramiento en el proceso de compraventa",
                        "Conocimiento local del territorio y los municipios",
                        "Acompañamiento hasta la firma notarial",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="text-azul-aragon mt-0.5 font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { label: "Modelo 100% online", color: "bg-verde-vida/10 text-verde-vida border-verde-vida/30 print:bg-gray-100 print:text-gray-700 print:border-gray-300" },
                { label: "Sin tasación forzosa", color: "bg-terracota/10 text-terracota border-terracota/30 print:bg-gray-100 print:text-gray-700 print:border-gray-300" },
                { label: "Presencia en Idealista y Fotocasa", color: "bg-azul-aragon/10 text-azul-aragon border-azul-aragon/30 print:bg-gray-100 print:text-gray-700 print:border-gray-300" },
                { label: "Especialistas en Bajo Aragón", color: "bg-tierra/10 text-tierra border-tierra/30 print:bg-gray-100 print:text-gray-700 print:border-gray-300" },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border ${badge.color}`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── SECCIÓN 3: Cómo podemos colaborar ── */}
          <div className="mb-10">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-serif text-3xl font-bold text-terracota">3.</span>
              <h2 className="font-serif text-2xl font-bold text-verde-vida">
                Cómo podemos colaborar
              </h2>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              Proponemos tres modalidades de colaboración concretas, complementarias entre sí y sin coste
              alguno para el ayuntamiento. Cada municipio puede elegir la que mejor se adapte a su situación.
            </p>

            <div className="space-y-4">
              {/* A */}
              <div className="no-break border border-gray-200 rounded-xl p-5 print:border-gray-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-verde-vida flex items-center justify-center text-crema font-bold text-sm flex-shrink-0 print:bg-gray-200 print:text-gray-800">
                    A
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-tierra text-base mb-1">
                      Censo de viviendas deshabitadas
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      Los ayuntamientos están legalmente obligados a mantener un censo de viviendas
                      deshabitadas (Ley 10/2016 de Medidas de Emergencia en Materia de Vivienda). Con
                      el consentimiento del consistorio, Revivtaliza puede acceder a este censo para
                      contactar directamente a los propietarios y ofrecerles nuestros servicios de forma
                      proactiva.
                    </p>
                    <div className="bg-crema/40 rounded-lg p-3 print:bg-gray-50">
                      <p className="text-xs text-gray-600">
                        <strong className="text-tierra">Resultado esperado:</strong> Aumento del porcentaje
                        de viviendas deshabitadas que entran en el mercado, sin gestión adicional por parte
                        del ayuntamiento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* B */}
              <div className="no-break border border-gray-200 rounded-xl p-5 print:border-gray-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-terracota flex items-center justify-center text-crema font-bold text-sm flex-shrink-0 print:bg-gray-200 print:text-gray-800">
                    B
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-tierra text-base mb-1">
                      Casas de titularidad municipal
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      Si el ayuntamiento dispone de propiedades municipales vacías o infrautilizadas
                      (viviendas, locales, terrenos), Revivtaliza puede gestionar su venta o alquiler a
                      través de nuestra plataforma y red de compradores, con la misma metodología que
                      aplicamos con propietarios privados.
                    </p>
                    <div className="bg-crema/40 rounded-lg p-3 print:bg-gray-50">
                      <p className="text-xs text-gray-600">
                        <strong className="text-tierra">Resultado esperado:</strong> Conversión de activos
                        municipales sin uso en ingresos o en nuevos vecinos, sin coste de gestión para
                        el consistorio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* C */}
              <div className="no-break border border-gray-200 rounded-xl p-5 print:border-gray-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-azul-aragon flex items-center justify-center text-crema font-bold text-sm flex-shrink-0 print:bg-gray-200 print:text-gray-800">
                    C
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-tierra text-base mb-1">
                      Difusión conjunta
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      El ayuntamiento ya recibe consultas de personas interesadas en instalarse en el
                      municipio. Compartir las propiedades publicadas por Revivtaliza en los canales
                      oficiales del ayuntamiento (web, redes sociales, tablón de anuncios) amplifica el
                      alcance de cada publicación y responde directamente a esta demanda latente.
                    </p>
                    <div className="bg-crema/40 rounded-lg p-3 print:bg-gray-50">
                      <p className="text-xs text-gray-600">
                        <strong className="text-tierra">Resultado esperado:</strong> Mayor velocidad de
                        venta de las propiedades publicadas y posicionamiento del municipio como destino
                        activo para nuevos residentes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── SECCIÓN 4: Qué gana el municipio ── */}
          <div className="no-break mb-10 page-break">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-serif text-3xl font-bold text-terracota">4.</span>
              <h2 className="font-serif text-2xl font-bold text-verde-vida">
                Qué gana el municipio
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                {
                  icon: "👥",
                  title: "Nuevos vecinos y vecinas",
                  desc: "Más empadronados significa mayor recaudación del IBI, mayor participación en fondos de financiación municipal y posibilidad de mantener servicios esenciales como escuela o centro médico.",
                },
                {
                  icon: "🏘️",
                  title: "Regeneración urbana",
                  desc: "La recuperación de viviendas vacías mejora la imagen del núcleo urbano, frena el deterioro del patrimonio construido y hace el municipio más atractivo para futuros residentes.",
                },
                {
                  icon: "💶",
                  title: "Sin coste para el ayuntamiento",
                  desc: "Revivtaliza asume todos los gastos de gestión, publicación y marketing. El ayuntamiento colabora facilitando información o difusión, sin ningún desembolso económico.",
                },
                {
                  icon: "🤝",
                  title: "Alineación con programas regionales",
                  desc: "Esta colaboración es compatible y complementaria con iniciativas de Teruel Existe, ADER Bajo Aragón, el Plan de Despoblación del Gobierno de Aragón y los fondos FEDER destinados al rural.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="no-break bg-crema/30 border border-gray-200 rounded-xl p-5 print:bg-gray-50 print:border-gray-300"
                >
                  <div className="text-2xl mb-3 print:hidden">{item.icon}</div>
                  <h3 className="font-semibold text-tierra text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-verde-vida text-crema rounded-xl p-5 print:bg-gray-800 print:text-white">
              <p className="text-sm font-semibold mb-1">Una vivienda ocupada cambia el municipio</p>
              <p className="text-sm leading-relaxed opacity-90">
                Cada nueva familia que llega a un pueblo no es solo un número en el padrón. Es un niño
                que se incorpora a la escuela rural, un usuario del bar de siempre, un comprador en la
                tienda local. La revitalización inmobiliaria es el primer paso de una cadena de cambios
                que beneficia a toda la comunidad.
              </p>
            </div>
          </div>

          {/* ── SECCIÓN 5: Próximos pasos ── */}
          <div className="no-break mb-10">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-serif text-3xl font-bold text-terracota">5.</span>
              <h2 className="font-serif text-2xl font-bold text-verde-vida">
                Próximos pasos
              </h2>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              Arrancar la colaboración es sencillo. Proponemos el siguiente itinerario:
            </p>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gray-200 print:bg-gray-300" />

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Reunión inicial",
                    desc: "Presencial en el ayuntamiento o por videollamada — aproximadamente 30 minutos. Presentamos el proyecto, escuchamos la situación del municipio y valoramos juntos qué modalidad de colaboración encaja mejor.",
                    note: "Sin compromiso previo · A conveniencia del consistorio",
                  },
                  {
                    step: "2",
                    title: "Acuerdo de colaboración",
                    desc: "Firma de un documento simple que formaliza los términos de la colaboración. Sin coste económico, sin exclusividad y sin plazo mínimo. Cualquiera de las partes puede dar por finalizada la colaboración en cualquier momento.",
                    note: "Sin coste · Sin permanencia · Sin cláusulas complejas",
                  },
                  {
                    step: "3",
                    title: "Primera propiedad publicada",
                    desc: "En menos de dos semanas desde la firma del acuerdo, la primera propiedad del municipio estará publicada en nuestra web, Idealista y Fotocasa, con ficha profesional y fotografías.",
                    note: "Plazo máximo: 2 semanas desde la firma",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-5 no-break">
                    <div className="relative z-10 w-10 h-10 rounded-full bg-terracota flex items-center justify-center text-crema font-bold text-base flex-shrink-0 print:bg-gray-300 print:text-gray-800">
                      {item.step}
                    </div>
                    <div className="flex-1 pb-2">
                      <h3 className="font-semibold text-tierra text-base mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">{item.desc}</p>
                      <p className="text-xs text-verde-vida font-medium">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── SECCIÓN 6: Contacto ── */}
          <div className="no-break page-break">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-serif text-3xl font-bold text-terracota">6.</span>
              <h2 className="font-serif text-2xl font-bold text-verde-vida">
                Contacto
              </h2>
            </div>

            <div className="border border-verde-vida/30 rounded-xl overflow-hidden print:border-gray-400">
              <div className="bg-verde-vida px-6 py-4 print:bg-gray-200">
                <p className="font-serif text-xl font-bold text-crema print:text-gray-800">Revivtaliza</p>
                <p className="text-crema/80 italic text-sm print:text-gray-600">Donde las casas vuelven a vivir</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      label: "Web",
                      value: "revivtaliza.es",
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      ),
                    },
                    {
                      label: "Email",
                      value: "hola@revivtaliza.es",
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                    },
                    {
                      label: "Teléfono",
                      value: "[TELÉFONO]",
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                    },
                    {
                      label: "Responsable",
                      value: "[NOMBRE DEL RESPONSABLE]",
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      ),
                    },
                  ].map((contact) => (
                    <div key={contact.label} className="flex items-start gap-3">
                      <span className="text-verde-vida mt-0.5 flex-shrink-0">{contact.icon}</span>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{contact.label}</p>
                        <p className="text-sm text-tierra font-medium">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Closing note */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 italic">
                Quedamos a su disposición para cualquier consulta. Será un placer presentarles el proyecto
                en persona y explorar juntos las posibilidades de colaboración.
              </p>
              <div className="mt-6 border-t border-gray-200 pt-4">
                <p className="font-serif text-lg font-bold text-verde-vida">Revivtaliza</p>
                <p className="text-xs text-gray-500">Bajo Aragón · Teruel · España</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
