// rollup.config.mjs
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

const pkg = {
  main: "dist/index.js",
  module: "dist/index.esm.js"
};

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
    },
  ],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    typescript(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
  ],
  external: ['react', 'react-dom'],
};