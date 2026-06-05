import { Metadata } from "next";
import PropiedadForm from "@/components/PropiedadForm";

export const metadata: Metadata = {
  title: "Nueva Propiedad | Admin",
};

export default function NuevaPropiedadPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-tierra-oscura">Nueva propiedad</h1>
        <p className="text-gray-500 text-sm mt-1">Añade una nueva propiedad al catálogo</p>
      </div>
      <PropiedadForm mode="create" />
    </div>
  );
}
