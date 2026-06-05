export interface Propiedad {
  id: number;
  titulo: string;
  descripcion: string;
  tipo: string;
  precio: number;
  ubicacion: string;
  municipio: string;
  habitaciones: number | null;
  banos: number | null;
  superficie: number;
  superficieParcela: number | null;
  estado: string;
  destacada: boolean;
  imagenes: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Contacto {
  id: number;
  nombre: string;
  email: string;
  telefono: string | null;
  mensaje: string;
  propiedadId: number | null;
  leido: boolean;
  createdAt: Date;
}

export interface PropiedadFilters {
  tipo?: string;
  municipio?: string;
  precioMin?: number;
  precioMax?: number;
  habitaciones?: number;
  estado?: string;
}
