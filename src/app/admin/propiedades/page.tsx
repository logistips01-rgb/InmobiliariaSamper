import { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatPrice, getTipoLabel, getEstadoLabel, getEstadoColor } from "@/lib/utils";
import DeletePropertyButton from "./DeletePropertyButton";

export const metadata: Metadata = {
  title: "Propiedades | Admin",
};

export default async function AdminPropiedadesPage() {
  const propiedades = await prisma.propiedad.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-tierra">Propiedades</h1>
          <p className="text-gray-500 text-sm mt-1">{propiedades.length} propiedades en total</p>
        </div>
        <Link href="/admin/propiedades/nueva" className="btn-secondary text-sm">
          + Nueva propiedad
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">
                  Propiedad
                </th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">
                  Tipo
                </th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">
                  Municipio
                </th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">
                  Precio
                </th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">
                  Estado
                </th>
                <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {propiedades.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center text-gray-500 py-12">
                    No hay propiedades. <Link href="/admin/propiedades/nueva" className="text-verde-vida underline">Crear primera</Link>
                  </td>
                </tr>
              ) : (
                propiedades.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-tierra text-sm line-clamp-1">{p.titulo}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{p.superficie} m²{p.habitaciones ? ` · ${p.habitaciones} hab.` : ""}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600">{getTipoLabel(p.tipo)}</td>
                    <td className="px-4 py-4 text-sm text-gray-600">{p.municipio}</td>
                    <td className="px-4 py-4 text-sm font-semibold text-verde-vida">{formatPrice(p.precio)}</td>
                    <td className="px-4 py-4">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getEstadoColor(p.estado)}`}>
                        {getEstadoLabel(p.estado)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/propiedades/${p.id}`}
                          target="_blank"
                          className="text-xs text-gray-500 hover:text-verde-vida transition-colors"
                        >
                          Ver
                        </Link>
                        <Link
                          href={`/admin/propiedades/${p.id}/editar`}
                          className="text-xs text-blue-600 hover:text-blue-800 transition-colors font-medium"
                        >
                          Editar
                        </Link>
                        <DeletePropertyButton id={p.id} titulo={p.titulo} />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
