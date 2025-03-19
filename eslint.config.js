import globals from "globals";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx,astro}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "linebreak-style": ["error", "unix"],
      "no-multiple-empty-lines": ["error", { max: 1 }], 
      "react/jsx-one-expression-per-line": ["error", { allow: "single-child" }], 
      "react/jsx-indent": ["error", 2],
      "prettier/prettier": "error",
    },
  },
];
