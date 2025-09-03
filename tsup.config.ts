import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // Your single entry point; add more if multi-entry needed
  format: ["esm", "cjs"], // esm for module, cjs for main (with CommonJS compat)
  dts: true, // Generate .d.ts types
  splitting: false, // Disable for single bundle
  clean: true, // Clean dist before build
  minify: true, // Minify for production
  sourcemap: true,
  globalName: "PuckConfig", // For cjs (acts similar to UMD in some cases)
  esbuildOptions: (options) => {
    options.banner = {
      js: '"use client";', // If needed for React client components
    };
  },
  external: [
    "react",
    "react-dom",
    "@chakra-ui/react",
    "@emotion/react",
    "@emotion/styled",
    "@measured/puck",
    "@tanstack/react-query",
    "@tanstack/react-router",
    "axios",
    "bootstrap-icons",
    "classnames",
    "lodash",
    "lucide-react",
    "moment",
    "next-themes",
    "react-error-boundary",
    "react-icons",
    "recoil",
    "tinymce",
  ], // Externalize peers
});
