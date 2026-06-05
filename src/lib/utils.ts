export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function getTipoLabel(tipo: string): string {
  const labels: Record<string, string> = {
    casa: "Casa",
    piso: "Piso",
    terreno: "Terreno",
    local: "Local Comercial",
  };
  return labels[tipo] || tipo;
}

export function getEstadoLabel(estado: string): string {
  const labels: Record<string, string> = {
    disponible: "Disponible",
    reservada: "Reservada",
    vendida: "Vendida",
  };
  return labels[estado] || estado;
}

export function getEstadoColor(estado: string): string {
  const colors: Record<string, string> = {
    disponible: "bg-green-100 text-green-800",
    reservada: "bg-yellow-100 text-yellow-800",
    vendida: "bg-red-100 text-red-800",
  };
  return colors[estado] || "bg-gray-100 text-gray-800";
}

export function parseImagenes(imagenes: string): string[] {
  try {
    return JSON.parse(imagenes);
  } catch {
    return [];
  }
}
