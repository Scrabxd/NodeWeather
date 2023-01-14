import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  return {
    plugins: [htmlPlugin(loadEnv(mode, ".")), react()],
  }
})

function htmlPlugin(env) {
  return {
    name: 'html-transform',
    transformIndexHtml: {
      enforce: 'pre' ,
      transform: (html) =>
      html.replace(/%(.*?)%/g, (match, p1) =>
        env[p1] ?? match
      ),
    }
  }
}
