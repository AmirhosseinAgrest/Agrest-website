import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@utils': resolve(__dirname, './src/lib'),
      '@styles': resolve(__dirname, './src/styles'),
      '@assets': resolve(__dirname, './src/assets'),
      '@constants': resolve(__dirname, './src/constants'),
      '@config': resolve(__dirname, './src/config'),
      '@context': resolve(__dirname, './src/context'),
      '@data': resolve(__dirname, './src/data'),
      '@types': resolve(__dirname, './src/types'),
      '@i18n': resolve(__dirname, './src/i18n'),
    },
  },

  server: {
    port: 3000,
    open: true,
    cors: true,
  },

  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
          i18n: ['i18next', 'react-i18next'],
        },
      },
    },
  },

  css: {
    devSourcemap: true,
  },
});