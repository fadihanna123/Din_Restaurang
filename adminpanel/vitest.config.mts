import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    include: ['**/*.test.tsx'],
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@core/*': path.resolve(__dirname, 'src'),
      '@public/*': path.resolve(__dirname, 'public'),
      '@api/*': path.resolve(__dirname, 'src/api'),
      '@app/*': path.resolve(__dirname, 'src/app'),
      '@assets/*': path.resolve(__dirname, 'src/assets'),
      '@components/*': path.resolve(__dirname, 'src/components'),
      '@containers/*': path.resolve(__dirname, 'src/containers'),
      '@functions/*': path.resolve(__dirname, 'src/functions'),
      '@hooks/*': path.resolve(__dirname, 'src/hooks'),
      '@inc/*': path.resolve(__dirname, 'src/inc'),
      '@redux/*': path.resolve(__dirname, 'src/redux'),
      '@styles/*': path.resolve(__dirname, 'src/styles'),
      '@types/*': path.resolve(__dirname, 'src/types'),
      '@utils/*': path.resolve(__dirname, 'src/utils'),
    },
  },
});
