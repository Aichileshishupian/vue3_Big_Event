import js from '@eslint/js'
import vue from 'eslint-plugin-vue'

export default [
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.{js,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        globalThis: 'readonly',
        // Browser APIs
        URL: 'readonly',
        FormData: 'readonly',
        Blob: 'readonly',
        File: 'readonly',
        FileReader: 'readonly',
        // Element Plus globals (assuming auto-import)
        ElMessage: 'readonly',
        ElMessageBox: 'readonly',
      },
    },
    rules: {
      // Add custom rules here
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
]
