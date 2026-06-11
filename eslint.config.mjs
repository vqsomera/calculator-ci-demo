import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";

export default [
  // 1. SKIP AUTO-GENERATED SYSTEM FILES
  {
    ignores: ["node_modules/**", "package-lock.json"],
  },

  // 2. JAVASCRIPT & JEST RULES
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest // ◄--- The Jest cheat sheet!
      }
    },
    rules: {
      ...js.configs.recommended.rules,
    }
  },

  // 3. JSON RULES
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    rules: {
      ...json.configs.recommended.rules
    }
  }
];
