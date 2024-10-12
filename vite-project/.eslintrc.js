module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    es6: true,
  },
  seting: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": "error",
  },
};

// import globals from "globals"
// import pluginJs from "@eslint/js"
// import pluginReactConfig from "eslint-plugin-react/configs/recommended.js"

// export default [
//   {files: ["**/*.{js,mjs,cjs,jsx}"]},
//   { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   pluginReactConfig,
// ];
