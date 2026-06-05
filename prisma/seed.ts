import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.contacto.deleteMany();
  await prisma.propiedad.deleteMany();

  const propiedades = [
    {
      titulo: "Casa de campo con huerto en Samper de Calanda",
      descripcion:
        "Preciosa casa de campo situada en las afueras de Samper de Calanda, con amplias vistas a los campos de olivar. Dispone de huerto propio de 800 m², corral y todas las comodidades modernas. Recientemente reformada, mantiene el encanto rústico aragonés con vigas de madera y suelos de piedra natural. Ideal para familias que buscan tranquilidad sin alejarse de los servicios del pueblo.",
      tipo: "casa",
      precio: 145000,
      ubicacion: "Camino del Monte, 12",
      municipio: "Samper de Calanda",
      habitaciones: 4,
      banos: 2,
      superficie: 180,
      superficieParcela: 950,
      estado: "disponible",
      destacada: true,
      imagenes: JSON.stringify([
        "https://placehold.co/800x600/1C3A2B/F5F0E8?text=Casa+Samper+1",
        "https://placehold.co/800x600/2d5e47/F5F0E8?text=Casa+Samper+2",
        "https://placehold.co/800x600/A8C4A8/3C2E1A?text=Casa+Samper+3",
      ]),
    },
    {
      titulo: "Piso céntrico en Alcorisa",
      descripcion:
        "Luminoso piso en pleno centro de Alcorisa, a pocos pasos de todos los servicios. Completamente reformado en 2022 con materiales de alta calidad. Cocina equipada moderna, salón-comedor amplio con balcón, tres habitaciones dobles y dos baños completos. Comunidad de propietarios con ascensor. Garaje opcional. Una oportunidad única para vivir en el corazón del Bajo Aragón.",
      tipo: "piso",
      precio: 87000,
      ubicacion: "Calle Mayor, 45, 2ºB",
      municipio: "Alcorisa",
      habitaciones: 3,
      banos: 2,
      superficie: 95,
      superficieParcela: null,
      estado: "disponible",
      destacada: true,
      imagenes: JSON.stringify([
        "https://placehold.co/800x600/D4A847/3C2E1A?text=Piso+Alcorisa+1",
        "https://placehold.co/800x600/1C3A2B/F5F0E8?text=Piso+Alcorisa+2",
      ]),
    },
    {
      titulo: "Terreno urbano en Andorra",
      descripcion:
        "Excelente terreno urbano en zona de expansión residencial de Andorra. Parcela totalmente llana con todos los servicios (agua, luz, gas, alcantarillado) llegando a linderos. Orientación sur. Permite construir vivienda unifamiliar de hasta 250 m² construidos según normativa urbanística vigente. Zona tranquila con acceso rodado asfaltado. Ideal para construir la casa de sus sueños.",
      tipo: "terreno",
      precio: 62000,
      ubicacion: "Sector Nuevo Desarrollo, Parcela 23",
      municipio: "Andorra",
      habitaciones: null,
      banos: null,
      superficie: 420,
      superficieParcela: 420,
      estado: "disponible",
      destacada: false,
      imagenes: JSON.stringify([
        "https://placehold.co/800x600/A8C4A8/1C3A2B?text=Terreno+Andorra+1",
        "https://placehold.co/800x600/F5F0E8/3C2E1A?text=Terreno+Andorra+2",
      ]),
    },
    {
      titulo: "Local comercial en La Puebla de Híjar",
      descripcion:
        "Amplio local comercial en la calle principal de La Puebla de Híjar, con gran visibilidad y paso de peatones. Dispone de escaparate de 6 metros, almacén trasero, aseo adaptado y acceso para personas con movilidad reducida. Instalación eléctrica trifásica. Actualmente libre. Ideal para cualquier tipo de negocio: alimentación, ropa, oficinas o cualquier otro uso comercial permitido.",
      tipo: "local",
      precio: 78500,
      ubicacion: "Calle Aragón, 8",
      municipio: "La Puebla de Híjar",
      habitaciones: null,
      banos: 1,
      superficie: 120,
      superficieParcela: null,
      estado: "disponible",
      destacada: true,
      imagenes: JSON.stringify([
        "https://placehold.co/800x600/3C2E1A/F5F0E8?text=Local+Puebla+1",
        "https://placehold.co/800x600/D4A847/1C3A2B?text=Local+Puebla+2",
      ]),
    },
    {
      titulo: "Casa tradicional aragonesa en Híjar",
      descripcion:
        "Magnífica casa tradicional aragonesa en el casco histórico de Híjar, con vistas privilegiadas al castillo. Inmueble de carácter con fachada de piedra original del siglo XIX, completamente rehabilitada respetando los elementos arquitectónicos históricos. Tres plantas con amplio salón con chimenea, cocina rústica, cuatro habitaciones, dos baños y terraza superior. Patio interior con pozo. Una joya del patrimonio bajoaragonés.",
      tipo: "casa",
      precio: 198000,
      ubicacion: "Plaza del Castillo, 3",
      municipio: "Híjar",
      habitaciones: 4,
      banos: 2,
      superficie: 220,
      superficieParcela: 85,
      estado: "reservada",
      destacada: false,
      imagenes: JSON.stringify([
        "https://placehold.co/800x600/1C3A2B/D4A847?text=Casa+Hijar+1",
        "https://placehold.co/800x600/2d5e47/F5F0E8?text=Casa+Hijar+2",
        "https://placehold.co/800x600/A8C4A8/3C2E1A?text=Casa+Hijar+3",
      ]),
    },
  ];

  for (const propiedad of propiedades) {
    await prisma.propiedad.create({ data: propiedad });
  }

  // Sample contact submissions
  await prisma.contacto.create({
    data: {
      nombre: "María García López",
      email: "maria.garcia@email.com",
      telefono: "612345678",
      mensaje:
        "Me interesa la casa de Samper de Calanda. ¿Podría concertar una visita para el próximo fin de semana?",
      propiedadId: 1,
      leido: false,
    },
  });

  await prisma.contacto.create({
    data: {
      nombre: "Carlos Martínez",
      email: "carlos.m@email.com",
      telefono: "698765432",
      mensaje:
        "Busco terrenos en la zona del Bajo Aragón para construir una casa. ¿Tienen más opciones aparte del de Andorra?",
      propiedadId: null,
      leido: true,
    },
  });

  console.log("✅ Base de datos poblada con éxito");
  console.log(`   - ${propiedades.length} propiedades creadas`);
  console.log("   - 2 contactos de ejemplo creados");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
