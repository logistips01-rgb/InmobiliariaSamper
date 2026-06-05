import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const contactos = await prisma.contacto.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(contactos);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al obtener contactos" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, mensaje, propiedadId } = body;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    const contacto = await prisma.contacto.create({
      data: {
        nombre,
        email,
        telefono: telefono || null,
        mensaje,
        propiedadId: propiedadId ? parseInt(propiedadId) : null,
      },
    });

    return NextResponse.json(contacto, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al guardar contacto" }, { status: 500 });
  }
}
