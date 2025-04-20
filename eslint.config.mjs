import defineConfig from '@jiakun-zhao/eslint-config'
import oxlint from 'eslint-plugin-oxlint'

export default defineConfig()
  .append(oxlint.configs['flat/all'])
  .remove('oxlint/vue-svelte-exceptions')
  .renamePlugins({ '@typescript-eslint': 'ts', 'import-x': 'import' })
