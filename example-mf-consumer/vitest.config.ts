import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'federation_provider/button': resolve(
        __dirname,
        '..',
        'example-mf-producer/src/components/button',
      ),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'json', 'html', 'json-summary'],
      all: true,
    },
  },
});
