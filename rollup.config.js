import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import dts from 'rollup-plugin-dts'
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import preserveDirectives from 'rollup-plugin-preserve-directives'
import postcss from 'rollup-plugin-postcss'
import path from 'path'
const { randomUUID } = require('node:crypto')
const packageJson = require('./package.json')

const styleInjectPath = path.resolve('./src/utils/styleInject.js').replace(/[\\/]+/g, '/')

const ids = new Map()
const getUniqueId = id => {
  if (ids.has(id)) return ids.get(id)
  const uid = randomUUID()
  ids.set(id, uid)

  return uid
}

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        dir: 'dist/esm',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      postcss({
        inject(cssVariableName, id) {
          return `
          import styleInject from '${styleInjectPath}';
          styleInject(${cssVariableName}, 'style-${getUniqueId(id)}');
        `
        },
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      url(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser({ compress: { directives: false } }),
      preserveDirectives.default({ supressPreserveModulesWarning: true }),
    ],
    external: [...Object.keys(packageJson.peerDependencies || {})],
  },
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.types, format: 'es' }],
    plugins: [dts.default()],
  },
]
