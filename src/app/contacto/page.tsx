import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Inmobiliaria Samper. Estamos en Samper de Calanda, Teruel. Llámanos o escríbenos.",
};

export default function ContactoPage() {
  return (
    <div className="bg-crema-campo min-h-screen">
      {/* Header */}
      <div className="bg-verde-aragon text-crema-campo py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold mb-3">Contacto</h1>
          <p className="text-salvia text-lg max-w-xl mx-auto">
            Estamos aquí para ayudarte. Cuéntanos qué necesitas y te responderemos lo antes posible.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-tierra-oscura mb-6">
              Visítanos o escríbenos
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nuestro equipo de profesionales está disponible para atenderte de forma personalizada.
              Podemos ayudarte tanto si quieres comprar, vender o simplemente tienes dudas sobre
              el mercado inmobiliario en el Bajo Aragón.
            </p>

            <div className="space-y-5">
              <ContactInfoItem
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                title="Dirección"
                content="Calle Mayor, 1\n44545 Samper de Calanda, Teruel"
              />
              <ContactInfoItem
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
                title="Teléfono"
                content="978 000 000"
                href="tel:+34978000000"
              />
              <ContactInfoItem
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                title="Correo electrónico"
                content="info@inmobiliariasamper.es"
                href="mailto:info@inmobiliariasamper.es"
              />
              <ContactInfoItem
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Horario de atención"
                content="Lunes a Viernes: 9:00 – 14:00 y 16:30 – 19:30\nSábados: 10:00 – 13:00"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="font-serif text-2xl font-bold text-tierra-oscura mb-6">
              Envíanos un mensaje
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfoItem({
  icon,
  title,
  content,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-verde-aragon text-ocre-calanda flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-tierra-oscura text-sm mb-0.5">{title}</p>
        {href ? (
          <a href={href} className="text-gray-600 text-sm hover:text-verde-aragon transition-colors whitespace-pre-line">
            {content}
          </a>
        ) : (
          <p className="text-gray-600 text-sm whitespace-pre-line">{content}</p>
        )}
      </div>
    </div>
  );
}
