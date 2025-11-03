// vite.config.js
import { defineConfig } from 'vite'
export default defineConfig({
  base: './', // ビルド後は相対パスへ
  build: {
    outDir: 'docs', // GitHub Pagesで公開できるのは`/`or`docs/` のみ
  },
  server: {
    open: true, // ブラウザ自動起動
  },
})