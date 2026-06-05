import { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import PropiedadForm from "@/components/PropiedadForm";
import { Propiedad } from "@/lib/types";

interface Props {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "Editar Propiedad | Admin",
};

export default async function EditarPropiedadPage({ params }: Props) {
  const id = parseInt(params.id);
  if (isNaN(id)) notFound();

  const propiedad = await prisma.propiedad.findUnique({ where: { id } }) as unknown as Propiedad | null;
  if (!propiedad) notFound();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-tierra-oscura">Editar propiedad</h1>
        <p className="text-gray-500 text-sm mt-1 line-clamp-1">{propiedad.titulo}</p>
      </div>
      <PropiedadForm propiedad={propiedad} mode="edit" />
    </div>
  );
}
