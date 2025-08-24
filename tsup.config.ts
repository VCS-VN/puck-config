import { defineConfig } from "tsup";
import tsconfigPaths from "tsconfig-paths";

tsconfigPaths.register();

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react-dom"], // 🚨 exclude React
});
