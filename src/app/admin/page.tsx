import { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dashboard Admin | Revivtaliza",
};

async function getStats() {
  const [total, disponibles, reservadas, vendidas, contactosSinLeer, ultimasProps, ultimosContactos] =
    await Promise.all([
      prisma.propiedad.count(),
      prisma.propiedad.count({ where: { estado: "disponible" } }),
      prisma.propiedad.count({ where: { estado: "reservada" } }),
      prisma.propiedad.count({ where: { estado: "vendida" } }),
      prisma.contacto.count({ where: { leido: false } }),
      prisma.propiedad.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
      prisma.contacto.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ]);

  return { total, disponibles, reservadas, vendidas, contactosSinLeer, ultimasProps, ultimosContactos };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-tierra">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Panel de administración · Revivtaliza</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <StatCard label="Total propiedades" value={stats.total} color="bg-verde-vida" />
        <StatCard label="Disponibles" value={stats.disponibles} color="bg-green-500" />
        <StatCard label="Reservadas" value={stats.reservadas} color="bg-yellow-500" />
        <StatCard label="Vendidas" value={stats.vendidas} color="bg-red-500" />
        <StatCard label="Mensajes sin leer" value={stats.contactosSinLeer} color="bg-terracota" />
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Link
          href="/admin/propiedades/nueva"
          className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-verde-vida rounded-lg flex items-center justify-center text-crema">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-tierra">Nueva propiedad</p>
            <p className="text-xs text-gray-500">Añadir al catálogo</p>
          </div>
        </Link>
        <Link
          href="/admin/propiedades"
          className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-terracota rounded-lg flex items-center justify-center text-tierra">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-tierra">Gestionar propiedades</p>
            <p className="text-xs text-gray-500">Ver y editar catálogo</p>
          </div>
        </Link>
        <Link
          href="/admin/contactos"
          className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-salvia rounded-lg flex items-center justify-center text-verde-vida">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-tierra">Ver contactos</p>
            <p className="text-xs text-gray-500">
              {stats.contactosSinLeer > 0 ? `${stats.contactosSinLeer} sin leer` : "Todos leídos"}
            </p>
          </div>
        </Link>
      </div>

      {/* Recent */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent properties */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="font-semibold text-tierra mb-4">Últimas propiedades</h2>
          <div className="space-y-3">
            {stats.ultimasProps.map((p) => (
              <div key={p.id} className="flex items-center justify-between text-sm">
                <div className="flex-1 min-w-0">
                  <p className="text-tierra font-medium truncate">{p.titulo}</p>
                  <p className="text-gray-400 text-xs">{p.municipio}</p>
                </div>
                <Link
                  href={`/admin/propiedades/${p.id}/editar`}
                  className="text-verde-vida hover:underline text-xs ml-2 flex-shrink-0"
                >
                  Editar
                </Link>
              </div>
            ))}
          </div>
          <Link href="/admin/propiedades" className="text-xs text-verde-vida hover:underline mt-4 block">
            Ver todas →
          </Link>
        </div>

        {/* Recent contacts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="font-semibold text-tierra mb-4">Últimos mensajes</h2>
          <div className="space-y-3">
            {stats.ultimosContactos.map((c) => (
              <div key={c.id} className="flex items-center justify-between text-sm">
                <div className="flex-1 min-w-0">
                  <p className={`font-medium truncate ${c.leido ? "text-gray-500" : "text-tierra"}`}>
                    {!c.leido && <span className="inline-block w-2 h-2 bg-terracota rounded-full mr-1.5" />}
                    {c.nombre}
                  </p>
                  <p className="text-gray-400 text-xs">{formatDate(c.createdAt)}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/admin/contactos" className="text-xs text-verde-vida hover:underline mt-4 block">
            Ver todos →
          </Link>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <div className={`w-8 h-1 rounded-full ${color} mb-3`} />
      <p className="text-3xl font-bold text-tierra">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
  );
}
