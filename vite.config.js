import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
  ],
  server: {
    host: true,  // <-- makes it accessible via your IP
    // port: 5173   // optional, defaults to 5173
  }
})
