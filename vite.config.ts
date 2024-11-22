import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{
      find: '@hscproject', replacement: fileURLToPath(new URL('./src', import.meta.url))
    }]
  }
})
