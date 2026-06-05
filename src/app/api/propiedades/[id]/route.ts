import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  try {
    const propiedad = await prisma.propiedad.findUnique({ where: { id } });
    if (!propiedad) {
      return NextResponse.json({ error: "Propiedad no encontrada" }, { status: 404 });
    }
    return NextResponse.json(propiedad);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al obtener propiedad" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  try {
    const body = await request.json();

    const {
      titulo,
      descripcion,
      tipo,
      precio,
      ubicacion,
      municipio,
      habitaciones,
      banos,
      superficie,
      superficieParcela,
      estado,
      destacada,
      imagenes,
    } = body;

    const propiedad = await prisma.propiedad.update({
      where: { id },
      data: {
        titulo,
        descripcion,
        tipo,
        precio: parseFloat(precio),
        ubicacion,
        municipio,
        habitaciones: habitaciones ? parseInt(habitaciones) : null,
        banos: banos ? parseInt(banos) : null,
        superficie: parseFloat(superficie),
        superficieParcela: superficieParcela ? parseFloat(superficieParcela) : null,
        estado,
        destacada: Boolean(destacada),
        imagenes: typeof imagenes === "string" ? imagenes : JSON.stringify(imagenes || []),
      },
    });

    return NextResponse.json(propiedad);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al actualizar propiedad" }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  try {
    await prisma.propiedad.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al eliminar propiedad" }, { status: 500 });
  }
}
