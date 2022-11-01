import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
})


/*
export default defineConfig({
  plugins: [react(),
    css: {
      preprocessorOptions: {
        scss: {
        }
      }
    },
  ],
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),

  ],
})

import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
      }
    }
  }
})
*/