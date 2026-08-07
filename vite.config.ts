import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.svg'],
    manifest: {
      name: 'Prompt — mobile teleprompter',
      short_name: 'Prompt',
      description: 'A focused, local-first mobile teleprompter.',
      theme_color: '#090b10',
      background_color: '#090b10',
      display: 'standalone',
      start_url: '/',
      icons: [{ src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }],
    },
    workbox: { navigateFallback: '/index.html' },
  })],
})
