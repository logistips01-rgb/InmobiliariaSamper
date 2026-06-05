import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, email, telefono, municipio, direccion, tipo, precio, superficie, descripcion } = body;

    if (!nombre || !email || !telefono || !municipio || !tipo || !precio) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    const encargo = await prisma.encargo.create({
      data: {
        nombre,
        email,
        telefono,
        municipio,
        direccion: direccion || null,
        tipo,
        precio: parseFloat(precio),
        superficie: superficie ? parseFloat(superficie) : null,
        descripcion: descripcion || null,
      },
    });

    return NextResponse.json(encargo, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

export async function GET() {
  const encargos = await prisma.encargo.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(encargos);
}
