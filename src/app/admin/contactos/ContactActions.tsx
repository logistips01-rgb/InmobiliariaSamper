"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactActions({ id, leido }: { id: number; leido: boolean }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const markAsRead = async () => {
    setLoading(true);
    try {
      await fetch(`/api/contacto/${id}`, { method: "PATCH" });
      router.refresh();
    } catch {
      alert("Error al marcar como leído");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("¿Eliminar este mensaje?")) return;
    setLoading(true);
    try {
      await fetch(`/api/contacto/${id}`, { method: "DELETE" });
      router.refresh();
    } catch {
      alert("Error al eliminar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 flex-shrink-0">
      {!leido && (
        <button
          onClick={markAsRead}
          disabled={loading}
          className="text-xs text-verde-aragon hover:underline font-medium disabled:opacity-40 whitespace-nowrap"
        >
          Marcar leído
        </button>
      )}
      <button
        onClick={handleDelete}
        disabled={loading}
        className="text-xs text-red-600 hover:underline font-medium disabled:opacity-40"
      >
        Eliminar
      </button>
    </div>
  );
}
