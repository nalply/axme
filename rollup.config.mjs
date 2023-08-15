import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'
import nodeResolve from '@rollup/plugin-node-resolve'

export default {
  input: 'root/main.ts',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: 'inline',
    assetFileNames: 'root/**/*.html',
  },
  plugins: [
    typescript({
      compilerOptions: {
        allowImportingTsExtensions: false,
        noEmit: false,
      },
    }),
    copy({ targets: [
      { src: 'root/index.html', dest: 'dist' },
      { src: 'root/r/**', dest: 'dist/r' },
    ]}),
    nodeResolve({
    }),
  ],
}

// Copyright 2023 Daniel Ly; SPDX-License-Identifier: ISC+