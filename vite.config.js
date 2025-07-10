import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // <-- Pastikan untuk mengimpor 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Mendefinisikan alias '@' untuk menunjuk ke folder 'src'
      '@': path.resolve(__dirname, './src'),
    },
  },
});