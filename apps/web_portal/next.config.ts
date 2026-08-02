import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "127.0.0.1"],
  reactStrictMode: true,
  experimental: {
    /*
     * Envuelve la navegación del cliente en document.startViewTransition().
     *
     * Sin esto no hay manera de animar la salida de una página en el App
     * Router: al navegar, la anterior se desmonta de golpe y solo se puede
     * animar la que entra. Con esto el navegador guarda una foto de la
     * pantalla vieja, y salida y entrada se controlan desde CSS.
     *
     * Donde no está soportado —Firefox, hoy— la navegación funciona igual,
     * simplemente sin transición.
     */
    viewTransition: true
  }
};

export default nextConfig;
