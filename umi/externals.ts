/**
 * @description 处理scripts
 */
import { isDev } from '../src/utils/const'
interface externalConfig {
  alias: string
  script: string
  minScript: string
  name: string
}
// externals
const externalsConfig: externalConfig[] = [
  {
    alias: 'window.React',
    script: 'https://unpkg.com/react@17.0.2/umd/react.development.js',
    minScript: 'https://unpkg.com/react@17.0.2/umd/react.production.min.js',
    name: 'react',
  },
  {
    alias: 'window.ReactDOM',
    script:
      'https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js',
    minScript:
      'https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js',
    name: 'react-dom',
  },
]

export function getExternals() {
  const externals: Record<string, string> = {}
  const scripts: string[] = externalsConfig.map(external => {
    externals[external.name] = external.alias
    return isDev ? external.script : external.minScript
  })
  const headScripts = []
  // headscript push externals 
  // version check 检测发布build的日期
  headScripts.push({ content: `// cache version check: ${new Date()}` })
  headScripts.push(...scripts)
  return {
    externals,
    headScripts
  }
}


