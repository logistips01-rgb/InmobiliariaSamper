import { prisma } from "@/lib/prisma";
import EncargoActions from "./EncargoActions";

export const dynamic = "force-dynamic";

const estadoLabels: Record<string, { label: string; color: string }> = {
  pendiente: { label: "Pendiente", color: "bg-yellow-100 text-yellow-800" },
  en_gestion: { label: "En gestión", color: "bg-blue-100 text-blue-800" },
  publicada: { label: "Publicada", color: "bg-green-100 text-green-800" },
  descartada: { label: "Descartada", color: "bg-gray-100 text-gray-600" },
};

export default async function EncargosPage() {
  const encargos = await prisma.encargo.findMany({
    orderBy: { createdAt: "desc" },
  });

  const pendientes = encargos.filter((e) => e.estado === "pendiente").length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-serif text-2xl font-bold text-tierra-oscura">
            Encargos de venta
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Propietarios que quieren vender su propiedad
          </p>
        </div>
        {pendientes > 0 && (
          <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
            {pendientes} pendiente{pendientes > 1 ? "s" : ""}
          </span>
        )}
      </div>

      {encargos.length === 0 ? (
        <div className="bg-crema-campo rounded-xl p-12 text-center">
          <svg className="w-10 h-10 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
          <p className="text-gray-600">Aún no hay encargos recibidos.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {encargos.map((encargo) => {
            const est = estadoLabels[encargo.estado] ?? estadoLabels.pendiente;
            return (
              <div
                key={encargo.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="font-semibold text-tierra-oscura">
                        {encargo.nombre}
                      </h2>
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${est.color}`}>
                        {est.label}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-1 text-sm text-gray-600 mb-3">
                      <span>{encargo.municipio}</span>
                      <span className="capitalize">{encargo.tipo}</span>
                      <span>{encargo.precio.toLocaleString("es-ES")} €</span>
                      {encargo.superficie && <span>{encargo.superficie} m²</span>}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <a href={`mailto:${encargo.email}`} className="hover:text-verde-aragon underline">
                        {encargo.email}
                      </a>
                      <a href={`tel:${encargo.telefono}`} className="hover:text-verde-aragon">
                        {encargo.telefono}
                      </a>
                    </div>

                    {encargo.direccion && (
                      <p className="text-xs text-gray-500 mt-1">{encargo.direccion}</p>
                    )}

                    {encargo.descripcion && (
                      <p className="text-sm text-gray-600 mt-3 bg-crema-campo rounded-lg px-4 py-2">
                        {encargo.descripcion}
                      </p>
                    )}

                    <p className="text-xs text-gray-400 mt-3">
                      Recibido el{" "}
                      {new Date(encargo.createdAt).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <EncargoActions encargo={encargo} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
