export interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  categoria: string;
  precio: number;
  stock: number;
  descripcion?: string;
  /** Porcentaje de descuento (0-100). Si existe, el producto aparece en Ofertas. */
  descuento?: number;
}

/** Precio final aplicando el descuento (si lo tiene). */
export function precioFinal(p: Producto): number {
  return p.descuento ? +(p.precio * (1 - p.descuento / 100)).toFixed(2) : p.precio;
}
