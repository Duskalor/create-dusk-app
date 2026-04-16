import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: false,
  },
  resolve: {
    conditions: ['node', 'import', 'module'],
  },
});
