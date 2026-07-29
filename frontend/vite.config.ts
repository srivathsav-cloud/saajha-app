import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

declare const process: {
  env: Record<string, string | undefined>;
};

const devProxyTarget = process.env.DEV_PROXY_TARGET ?? 'http://127.0.0.1:8000';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['pwa-icon.svg'],
      manifest: {
        name: 'Saajha Volunteer App',
        short_name: 'Saajha',
        description: 'Volunteer and parent outreach progressive web app',
        theme_color: '#126ee2',
        background_color: '#f7fbff',
        display: 'standalone',
        start_url: '/login',
        orientation: 'portrait-primary',
        icons: [
          {
            src: '/pwa-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api': {
        target: devProxyTarget,
        changeOrigin: true
      }
    }
  }
});
