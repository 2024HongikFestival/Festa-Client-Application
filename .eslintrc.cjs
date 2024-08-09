// Prettier와 ESLint 설정이 오류가 날 경우 추가적인 옵션 설정하신 뒤 팀원들에게 Prettierc.cjs와 해당 파일 내용을 공유해 주세요.

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'react', 'prettier'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'prettier/prettier': ['error', { endOfLine: 'auto', trailingComma: 'es5' }], // Prettier와 동일한 설정
    // ESLint에서 쉼표 추가를 비활성화
    'no-unused-vars': 'warn',
    'no-console': 'warn',
  },
};
