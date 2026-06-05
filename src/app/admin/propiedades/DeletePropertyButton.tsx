"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeletePropertyButton({ id, titulo }: { id: number; titulo: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!confirm(`¿Estás seguro de que quieres eliminar "${titulo}"? Esta acción no se puede deshacer.`)) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/propiedades/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Error al eliminar");
      router.refresh();
    } catch {
      alert("Error al eliminar la propiedad");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-xs text-red-600 hover:text-red-800 transition-colors font-medium disabled:opacity-40"
    >
      {loading ? "..." : "Eliminar"}
    </button>
  );
}
