import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const tipo = searchParams.get("tipo");
  const municipio = searchParams.get("municipio");
  const precioMin = searchParams.get("precioMin");
  const precioMax = searchParams.get("precioMax");
  const habitaciones = searchParams.get("habitaciones");
  const estado = searchParams.get("estado");
  const destacada = searchParams.get("destacada");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = {};

  if (tipo) where.tipo = tipo;
  if (municipio) where.municipio = municipio;
  if (estado) where.estado = estado;
  if (destacada === "true") where.destacada = true;
  if (precioMin || precioMax) {
    where.precio = {};
    if (precioMin) where.precio.gte = parseFloat(precioMin);
    if (precioMax) where.precio.lte = parseFloat(precioMax);
  }
  if (habitaciones) {
    where.habitaciones = { gte: parseInt(habitaciones) };
  }

  try {
    const propiedades = await prisma.propiedad.findMany({
      where,
      orderBy: [{ destacada: "desc" }, { createdAt: "desc" }],
    });
    return NextResponse.json(propiedades);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al obtener propiedades" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
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

    if (!titulo || !descripcion || !tipo || !precio || !ubicacion || !municipio || !superficie) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    const propiedad = await prisma.propiedad.create({
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
        estado: estado || "disponible",
        destacada: Boolean(destacada),
        imagenes: typeof imagenes === "string" ? imagenes : JSON.stringify(imagenes || []),
      },
    });

    return NextResponse.json(propiedad, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al crear propiedad" }, { status: 500 });
  }
}
