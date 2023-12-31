const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('rollup-plugin-typescript2')
const postcss = require('rollup-plugin-postcss')

const packageJson = require('./package.json')

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      interop: 'compat',
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
      interop: 'compat',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: ['.css'],
    }),
  ],
}
