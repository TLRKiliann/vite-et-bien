import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginFonts } from 'vite-plugin-fonts'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
      }
    }
  }
});

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
    VitePluginFonts({
      google: {
        families: ['Source Sans Pro'],
      },
    }),
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