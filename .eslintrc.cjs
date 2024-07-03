module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "prettier",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "react", "prettier"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": ["error", { endOfLine: "auto", trailingComma: "es5" }], // Prettier와 동일한 설정
    "comma-dangle": ["error", "never"], // ESLint에서 쉼표 추가를 비활성화
  },
};
