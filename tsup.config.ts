import { defineConfig } from "tsup"

export default defineConfig([
  /**
   * Everything
   */
  {
    entry: ["src/index.ts"],
    outDir: "dist",
    format: ["cjs", "esm"],
    clean: true,
    dts: true,
    sourcemap: true
  },
  /**
   * CLI
   */
  {
    entry: ["src/cli/index.ts"],
    outDir: "dist/cli",
    clean: true,
    format: ["cjs"]
  }
])
