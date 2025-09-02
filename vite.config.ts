import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import { libInjectCss } from "vite-plugin-lib-inject-css";
// import tailwindcss from "tailwindcss"; // ESM import

// import postcss from "rollup-plugin-postcss";
// import postcss from "postcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    // tsconfigPaths(),
    libInjectCss(),
    // dts({
    //   insertTypesEntry: true,
    // }),
    dts({ include: ["src"] }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),

      routes: `${path.resolve(__dirname, "./src/routes/")}`,

      services: `${path.resolve(__dirname, "./src/services/")}`,

      utils: `${path.resolve(__dirname, "./src/utils/")}`,

      pages: `${path.resolve(__dirname, "./src/pages/")}`,

      providers: `${path.resolve(__dirname, "./src/providers/")}`,

      styles: `${path.resolve(__dirname, "./src/styles/")}`,
    },
  },
  define: { global: "window" },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "PuckConfig",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@chakra-ui/react",
        "@emotion/react",
        // "@emotion/styled",
        // "framer-motion",
        // "@tanstack/react-query",
        // "recoil",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          // "@chakra-ui/react": "ChakraUI",
          // "@emotion/react": "EmotionReact",
          // "@emotion/styled": "EmotionStyled",
          // "framer-motion": "FramerMotion",
          // "@tanstack/react-query": "ReactQuery",
          // recoil: "Recoil",
        },
      },
    },
    sourcemap: true,
  },
});
