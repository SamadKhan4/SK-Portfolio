import { defineConfig, loadEnv } from 'vite';
import process from 'node:process';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss()],
    define: {
      'globalThis.__EMAILJS_SERVICE_ID__': JSON.stringify(env.EMAILJS_SERVICE_ID || ''),
      'globalThis.__EMAILJS_TEMPLATE_ID__': JSON.stringify(env.EMAILJS_TEMPLATE_ID || ''),
      'globalThis.__EMAILJS_PUBLIC_KEY__': JSON.stringify(env.EMAILJS_PUBLIC_KEY || ''),
    },
  };
});
