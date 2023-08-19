import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
// <<<<<<< HEAD
      '@': path.resolve(__dirname, './src' ),
      'data': path.resolve(__dirname, './data' ),
// =======
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './src'),
      'data': path.resolve(__dirname, './data'),
// >>>>>>> 8c25e2b393eebbc300688fb4efd9772d0935a555
    },
  },
  plugins: [react()],
});

