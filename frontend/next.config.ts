import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@core-tecnologias-empresariales/core-ui",
    "@core-tecnologias-empresariales/core-shell",
  ],
  // Turbopack sandboxea el filesystem root al proyecto; los paquetes @core-tecnologias-empresariales
  // viven fuera (D:\Dev\core-npm) como `file:` deps, así que hay que subir el root a D:\Dev.
  turbopack: {
    root: path.join(__dirname, "../.."),
  },
};

export default nextConfig;
