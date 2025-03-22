import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node // Include Node.js globals like `process`
      }
    },
    rules: {
      "no-unused-vars": "warn"
    },
    plugins: { js },
    extends: ["js/recommended"]
  }
]);