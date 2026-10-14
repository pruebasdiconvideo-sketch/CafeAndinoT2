export type Rol = 'administrador' | 'cliente';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  telefono?: string;
  password: string;
  rol: Rol;
  fechaRegistro: string;
}

/** Usuario sin contraseña, seguro para mostrar en pantalla. */
export type UsuarioPublico = Omit<Usuario, 'password'>;

/** Datos de sesión guardados en LocalStorage (nunca incluye la contraseña). */
export interface Sesion {
  id: number;
  nombre: string;
  email: string;
  telefono?: string;
  rol: Rol;
  fechaIngreso: string;
}

export interface DatosRegistro {
  nombre: string;
  email: string;
  telefono: string;
  password: string;
}
