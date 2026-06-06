"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Propiedad } from "@/lib/types";
import { parseImagenes } from "@/lib/utils";

interface PropiedadFormProps {
  propiedad?: Propiedad;
  mode: "create" | "edit";
}

const municipios = [
  "Samper de Calanda",
  "Alcorisa",
  "Andorra",
  "La Puebla de Híjar",
  "Híjar",
  "Chiprana",
  "Escatrón",
  "Otro",
];

export default function PropiedadForm({ propiedad, mode }: PropiedadFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [uploadingImages, setUploadingImages] = useState(false);

  const [form, setForm] = useState({
    titulo: propiedad?.titulo || "",
    descripcion: propiedad?.descripcion || "",
    tipo: propiedad?.tipo || "casa",
    precio: propiedad?.precio?.toString() || "",
    ubicacion: propiedad?.ubicacion || "",
    municipio: propiedad?.municipio || "Samper de Calanda",
    habitaciones: propiedad?.habitaciones?.toString() || "",
    banos: propiedad?.banos?.toString() || "",
    superficie: propiedad?.superficie?.toString() || "",
    superficieParcela: propiedad?.superficieParcela?.toString() || "",
    estado: propiedad?.estado || "disponible",
    destacada: propiedad?.destacada || false,
    imagenes: propiedad ? parseImagenes(propiedad.imagenes) : [] as string[],
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadingImages(true);
    try {
      const formData = new FormData();
      for (const file of Array.from(files)) {
        formData.append("files", file);
      }

      const res = await fetch("/api/upload", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Error al subir imágenes");

      const { paths } = await res.json();
      setForm((prev) => ({ ...prev, imagenes: [...prev.imagenes, ...paths] }));
    } catch {
      setError("Error al subir las imágenes");
    } finally {
      setUploadingImages(false);
    }
  };

  const addPlaceholderImage = () => {
    const colors = ["1C3A2B", "D4A847", "A8C4A8", "3C2E1A", "2d5e47"];
    const color = colors[form.imagenes.length % colors.length];
    const newImage = `https://placehold.co/800x600/${color}/F5F0E8?text=${encodeURIComponent(form.titulo || "Propiedad")}`;
    setForm((prev) => ({ ...prev, imagenes: [...prev.imagenes, newImage] }));
  };

  const removeImage = (index: number) => {
    setForm((prev) => ({
      ...prev,
      imagenes: prev.imagenes.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const payload = {
        ...form,
        imagenes: JSON.stringify(form.imagenes),
      };

      const url = mode === "create" ? "/api/propiedades" : `/api/propiedades/${propiedad!.id}`;
      const method = mode === "create" ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al guardar");
      }

      router.push("/admin/propiedades");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al guardar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {error}
        </div>
      )}

      {/* Basic info */}
      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="font-semibold text-tierra mb-5">Información básica</h2>
        <div className="space-y-4">
          <div>
            <label className="label">Título *</label>
            <input
              type="text"
              required
              value={form.titulo}
              onChange={(e) => setForm({ ...form, titulo: e.target.value })}
              className="input-field"
              placeholder="Ej: Casa de campo con huerto en Samper de Calanda"
            />
          </div>

          <div>
            <label className="label">Descripción *</label>
            <textarea
              required
              rows={5}
              value={form.descripcion}
              onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
              className="input-field resize-none"
              placeholder="Descripción detallada de la propiedad..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">Tipo *</label>
              <select
                value={form.tipo}
                onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                className="input-field"
              >
                <option value="casa">Casa</option>
                <option value="piso">Piso</option>
                <option value="terreno">Terreno</option>
                <option value="local">Local Comercial</option>
              </select>
            </div>
            <div>
              <label className="label">Estado *</label>
              <select
                value={form.estado}
                onChange={(e) => setForm({ ...form, estado: e.target.value })}
                className="input-field"
              >
                <option value="disponible">Disponible</option>
                <option value="reservada">Reservada</option>
                <option value="vendida">Vendida</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="font-semibold text-tierra mb-5">Ubicación</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="label">Dirección / Ubicación *</label>
            <input
              type="text"
              required
              value={form.ubicacion}
              onChange={(e) => setForm({ ...form, ubicacion: e.target.value })}
              className="input-field"
              placeholder="Ej: Calle Mayor, 12"
            />
          </div>
          <div>
            <label className="label">Municipio *</label>
            <select
              value={form.municipio}
              onChange={(e) => setForm({ ...form, municipio: e.target.value })}
              className="input-field"
            >
              {municipios.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="font-semibold text-tierra mb-5">Características</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div>
            <label className="label">Precio (€) *</label>
            <input
              type="number"
              required
              min="0"
              step="100"
              value={form.precio}
              onChange={(e) => setForm({ ...form, precio: e.target.value })}
              className="input-field"
              placeholder="150000"
            />
          </div>
          <div>
            <label className="label">Superficie construida (m²) *</label>
            <input
              type="number"
              required
              min="1"
              value={form.superficie}
              onChange={(e) => setForm({ ...form, superficie: e.target.value })}
              className="input-field"
              placeholder="120"
            />
          </div>
          <div>
            <label className="label">Superficie parcela (m²)</label>
            <input
              type="number"
              min="0"
              value={form.superficieParcela}
              onChange={(e) => setForm({ ...form, superficieParcela: e.target.value })}
              className="input-field"
              placeholder="500"
            />
          </div>
          <div>
            <label className="label">Habitaciones</label>
            <input
              type="number"
              min="0"
              value={form.habitaciones}
              onChange={(e) => setForm({ ...form, habitaciones: e.target.value })}
              className="input-field"
              placeholder="3"
            />
          </div>
          <div>
            <label className="label">Baños</label>
            <input
              type="number"
              min="0"
              value={form.banos}
              onChange={(e) => setForm({ ...form, banos: e.target.value })}
              className="input-field"
              placeholder="2"
            />
          </div>
          <div className="flex items-center gap-3 pt-6">
            <input
              type="checkbox"
              id="destacada"
              checked={form.destacada}
              onChange={(e) => setForm({ ...form, destacada: e.target.checked })}
              className="w-4 h-4 accent-verde-vida"
            />
            <label htmlFor="destacada" className="text-sm font-medium text-tierra cursor-pointer">
              Propiedad destacada
            </label>
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="font-semibold text-tierra mb-5">Imágenes</h2>

        {form.imagenes.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            {form.imagenes.map((img, i) => (
              <div key={i} className="relative group">
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image
                    src={img}
                    alt={`Imagen ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeImage(i)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-3">
          <label className="cursor-pointer bg-gray-50 border-2 border-dashed border-gray-300 hover:border-verde-vida rounded-lg px-4 py-3 text-sm text-gray-600 hover:text-verde-vida transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {uploadingImages ? "Subiendo..." : "Subir imágenes"}
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleImageUpload}
              disabled={uploadingImages}
            />
          </label>
          <button
            type="button"
            onClick={addPlaceholderImage}
            className="bg-gray-50 border border-gray-300 hover:border-verde-vida rounded-lg px-4 py-3 text-sm text-gray-600 hover:text-verde-vida transition-colors"
          >
            + Placeholder
          </button>
        </div>
      </section>

      {/* Actions */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="btn-secondary disabled:opacity-60"
        >
          {loading ? "Guardando..." : mode === "create" ? "Crear propiedad" : "Guardar cambios"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/propiedades")}
          className="btn-outline"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
