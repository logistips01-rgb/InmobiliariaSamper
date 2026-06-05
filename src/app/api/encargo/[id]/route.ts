import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const body = await req.json();

  const encargo = await prisma.encargo.update({
    where: { id },
    data: body,
  });

  return NextResponse.json(encargo);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  await prisma.encargo.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
