module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "no-underscore-dangle": "off",
    "no-console": "off",
    "no-debugger": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
