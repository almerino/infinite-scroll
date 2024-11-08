import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    define: {
      'process.env.BASE_URL_API': JSON.stringify(env.BASE_URL_API),
      'process.env.PIXABAY_API_KEY': JSON.stringify(env.PIXABAY_API_KEY),
    },
  }
})
