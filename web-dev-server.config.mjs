import debug from 'debug'
import { esbuildPlugin } from "@web/dev-server-esbuild"

const hostname = "dev.ly5.ch"
const port = 3220

const esbuild = esbuildPlugin({
  ts: true,
  sourcemap: 'inline',
  tsconfig: 'tsconfig.json',
})


// rewrite main.js to main.ts
async function rewriteMain(ctx, next) {
  const dbg = debug("wds")

  const url = ctx.url
  dbg("url", url)
  if (url === "/main.js") {
    ctx.url = "/main.ts"
    dbg("-->", ctx.url)
  }
  
  await next(ctx)
}

export default {
  watch: true,
  debug: false,
  hostname,
  port,
  rootDir: "root",
  plugins: [ esbuild ],
  middleware: [ rewriteMain ],
  http2: true,
  nodeResolve: true,
  sslKey: "ssl/dev.ly5.ch.key",
  sslCert: "ssl/dev.ly5.ch.crt",
}

// Copyright 2023 Daniel Ly; SPDX-License-Identifier: ISC+
