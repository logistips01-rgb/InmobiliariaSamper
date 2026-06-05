import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-verde-aragon text-crema-campo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold text-ocre-calanda mb-2">
              Inmobiliaria Samper
            </h3>
            <p className="text-salvia text-sm italic mb-4">
              Donde encontramos el hogar que nadie ve
            </p>
            <p className="text-sm text-crema-campo/80">
              Especialistas en el mercado inmobiliario del Bajo Aragón. Con años de experiencia
              ayudando a familias a encontrar su hogar ideal en nuestra tierra.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-ocre-calanda mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-crema-campo/80 hover:text-ocre-calanda transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/propiedades" className="text-crema-campo/80 hover:text-ocre-calanda transition-colors">
                  Propiedades
                </Link>
              </li>
              <li>
                <Link href="/propiedades?tipo=casa" className="text-crema-campo/80 hover:text-ocre-calanda transition-colors">
                  Casas
                </Link>
              </li>
              <li>
                <Link href="/propiedades?tipo=piso" className="text-crema-campo/80 hover:text-ocre-calanda transition-colors">
                  Pisos
                </Link>
              </li>
              <li>
                <Link href="/propiedades?tipo=terreno" className="text-crema-campo/80 hover:text-ocre-calanda transition-colors">
                  Terrenos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-crema-campo/80 hover:text-ocre-calanda transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-ocre-calanda mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-crema-campo/80">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-ocre-calanda flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Calle Mayor, 1<br />44545 Samper de Calanda, Teruel</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-ocre-calanda flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+34978000000" className="hover:text-ocre-calanda transition-colors">
                  978 000 000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-ocre-calanda flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@inmobiliariasamper.es" className="hover:text-ocre-calanda transition-colors">
                  info@inmobiliariasamper.es
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-ocre-calanda flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Lun–Vie: 9:00–14:00 y 16:30–19:30<br />Sáb: 10:00–13:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-green-800 flex flex-col sm:flex-row justify-between items-center text-xs text-crema-campo/50">
          <p>© {new Date().getFullYear()} Inmobiliaria Samper. Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0">Bajo Aragón · Teruel · Aragón</p>
        </div>
      </div>
    </footer>
  );
}
