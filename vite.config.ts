import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Em desenvolvimento, serve as funções de api/ (que na produção rodam na Vercel),
// lendo as chaves do .env.local.
function vercelApiInDev(): Plugin {
  return {
    name: 'vercel-api-in-dev',
    configureServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), 'GOOGLE_')
      Object.assign(process.env, env)

      server.middlewares.use('/api/reviews', async (_req, res) => {
        const mod = await server.ssrLoadModule('/api/reviews.ts')
        const response: Response = await mod.GET()
        res.statusCode = response.status
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.end(await response.text())
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vercelApiInDev()],
})
