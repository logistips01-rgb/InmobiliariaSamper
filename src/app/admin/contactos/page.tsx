import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import ContactActions from "./ContactActions";

export const metadata: Metadata = {
  title: "Contactos | Admin",
};

export default async function AdminContactosPage() {
  const contactos = await prisma.contacto.findMany({
    orderBy: [{ leido: "asc" }, { createdAt: "desc" }],
  });

  const sinLeer = contactos.filter((c) => !c.leido).length;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-tierra-oscura">Contactos</h1>
        <p className="text-gray-500 text-sm mt-1">
          {contactos.length} mensaje{contactos.length !== 1 ? "s" : ""} en total
          {sinLeer > 0 && (
            <span className="ml-2 bg-ocre-calanda text-tierra-oscura text-xs font-bold px-2 py-0.5 rounded-full">
              {sinLeer} sin leer
            </span>
          )}
        </p>
      </div>

      <div className="space-y-3">
        {contactos.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center text-gray-500 shadow-sm border border-gray-200">
            No hay mensajes de contacto aún.
          </div>
        ) : (
          contactos.map((contacto) => (
            <div
              key={contacto.id}
              className={`bg-white rounded-xl p-6 shadow-sm border transition-colors ${
                contacto.leido ? "border-gray-200" : "border-ocre-calanda bg-yellow-50/30"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {!contacto.leido && (
                      <span className="w-2 h-2 bg-ocre-calanda rounded-full flex-shrink-0" />
                    )}
                    <h3 className="font-semibold text-tierra-oscura">{contacto.nombre}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-3">
                    <a href={`mailto:${contacto.email}`} className="hover:text-verde-aragon transition-colors">
                      {contacto.email}
                    </a>
                    {contacto.telefono && (
                      <a href={`tel:${contacto.telefono}`} className="hover:text-verde-aragon transition-colors">
                        {contacto.telefono}
                      </a>
                    )}
                    <span>{formatDate(contacto.createdAt)}</span>
                    {contacto.propiedadId && (
                      <span className="text-xs bg-salvia text-verde-aragon px-2 py-0.5 rounded-full">
                        Propiedad #{contacto.propiedadId}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 rounded-lg p-3">
                    {contacto.mensaje}
                  </p>
                </div>
                <ContactActions id={contacto.id} leido={contacto.leido} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
