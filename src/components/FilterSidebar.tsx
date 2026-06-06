"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const municipios = [
  "Samper de Calanda",
  "Alcorisa",
  "Andorra",
  "La Puebla de Híjar",
  "Híjar",
  "Chiprana",
  "Escatrón",
];

export default function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [tipo, setTipo] = useState(searchParams.get("tipo") || "");
  const [municipio, setMunicipio] = useState(searchParams.get("municipio") || "");
  const [precioMin, setPrecioMin] = useState(searchParams.get("precioMin") || "");
  const [precioMax, setPrecioMax] = useState(searchParams.get("precioMax") || "");
  const [habitaciones, setHabitaciones] = useState(searchParams.get("habitaciones") || "");

  const applyFilters = useCallback(() => {
    const params = new URLSearchParams();
    if (tipo) params.set("tipo", tipo);
    if (municipio) params.set("municipio", municipio);
    if (precioMin) params.set("precioMin", precioMin);
    if (precioMax) params.set("precioMax", precioMax);
    if (habitaciones) params.set("habitaciones", habitaciones);
    router.push(`/propiedades?${params.toString()}`);
  }, [tipo, municipio, precioMin, precioMax, habitaciones, router]);

  const clearFilters = () => {
    setTipo("");
    setMunicipio("");
    setPrecioMin("");
    setPrecioMax("");
    setHabitaciones("");
    router.push("/propiedades");
  };

  const hasFilters = tipo || municipio || precioMin || precioMax || habitaciones;

  return (
    <aside className="bg-white rounded-xl shadow-md p-6 h-fit">
      <h2 className="font-serif text-lg font-semibold text-tierra mb-5">
        Filtrar propiedades
      </h2>

      {/* Tipo */}
      <div className="mb-5">
        <label className="label">Tipo de propiedad</label>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="input-field text-sm"
        >
          <option value="">Todos los tipos</option>
          <option value="casa">Casa</option>
          <option value="piso">Piso</option>
          <option value="terreno">Terreno</option>
          <option value="local">Local Comercial</option>
        </select>
      </div>

      {/* Municipio */}
      <div className="mb-5">
        <label className="label">Municipio</label>
        <select
          value={municipio}
          onChange={(e) => setMunicipio(e.target.value)}
          className="input-field text-sm"
        >
          <option value="">Todos los municipios</option>
          {municipios.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      {/* Precio */}
      <div className="mb-5">
        <label className="label">Precio</label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Mín €"
            value={precioMin}
            onChange={(e) => setPrecioMin(e.target.value)}
            className="input-field text-sm w-1/2"
            min="0"
          />
          <input
            type="number"
            placeholder="Máx €"
            value={precioMax}
            onChange={(e) => setPrecioMax(e.target.value)}
            className="input-field text-sm w-1/2"
            min="0"
          />
        </div>
      </div>

      {/* Habitaciones */}
      <div className="mb-6">
        <label className="label">Habitaciones mínimas</label>
        <select
          value={habitaciones}
          onChange={(e) => setHabitaciones(e.target.value)}
          className="input-field text-sm"
        >
          <option value="">Sin especificar</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>

      <button
        onClick={applyFilters}
        className="btn-secondary w-full text-sm text-center mb-2"
      >
        Aplicar filtros
      </button>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="w-full text-sm text-gray-500 hover:text-tierra underline transition-colors py-1"
        >
          Limpiar filtros
        </button>
      )}
    </aside>
  );
}
