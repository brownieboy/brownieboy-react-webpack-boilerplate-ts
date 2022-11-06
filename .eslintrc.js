module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard", "plugin:react/jsx-runtime"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // parser: "@babel/eslint-parser",
    // "babelOptions": {
    //   "presets": ["@babel/preset-react"]
    // },
  },
  plugins: ["@typescript-eslint","react"],
  rules: {
    indent: ["warn", 2],
    "linebreak-style": ["warn", "unix"],
    "no-unused-vars": ["warn"],
    "react/prop-types": ["warn"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
