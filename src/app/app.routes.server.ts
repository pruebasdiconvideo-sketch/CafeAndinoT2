import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Páginas públicas: se prerenderizan en el build (SEO y carga rápida).
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'productos', renderMode: RenderMode.Prerender },
  { path: 'ofertas', renderMode: RenderMode.Prerender },
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: 'nosotros', renderMode: RenderMode.Prerender },
  { path: 'contact', renderMode: RenderMode.Prerender },
  { path: 'contacto', renderMode: RenderMode.Prerender },
  { path: 'login', renderMode: RenderMode.Prerender },
  { path: 'registro', renderMode: RenderMode.Prerender },

  // Tienda, Mis pedidos, Mi Cuenta, Dashboard y la página 404 dependen de LocalStorage (carrito/sesión)
  // o de la URL, por lo que se renderizan en el navegador y Angular Router resuelve la ruta.
  { path: '**', renderMode: RenderMode.Client },
];
