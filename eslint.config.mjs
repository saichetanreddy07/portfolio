import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  { ignores: ['dist/**', 'node_modules/**'] },
  {
    files: ['**/*.{js,mjs,ts,tsx}'],
    extends: [js.configs.recommended, tseslint.configs.strict, tseslint.configs.stylistic],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
])
