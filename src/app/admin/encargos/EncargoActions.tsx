"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const estados = [
  { value: "pendiente", label: "Pendiente" },
  { value: "en_gestion", label: "En gestión" },
  { value: "publicada", label: "Publicada" },
  { value: "descartada", label: "Descartada" },
];

export default function EncargoActions({ encargo }: { encargo: { id: number; estado: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const updateEstado = async (estado: string) => {
    setLoading(true);
    await fetch(`/api/encargo/${encargo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ estado }),
    });
    router.refresh();
    setLoading(false);
  };

  const handleDelete = async () => {
    if (!confirm("¿Eliminar este encargo?")) return;
    setLoading(true);
    await fetch(`/api/encargo/${encargo.id}`, { method: "DELETE" });
    router.refresh();
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-2 min-w-[140px]">
      <select
        value={encargo.estado}
        onChange={(e) => updateEstado(e.target.value)}
        disabled={loading}
        className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-verde-aragon bg-white"
      >
        {estados.map((e) => (
          <option key={e.value} value={e.value}>{e.label}</option>
        ))}
      </select>
      <button
        onClick={handleDelete}
        disabled={loading}
        className="text-sm text-red-600 hover:text-red-800 border border-red-200 hover:border-red-400 rounded-lg px-3 py-2 transition-colors disabled:opacity-50"
      >
        Eliminar
      </button>
    </div>
  );
}
