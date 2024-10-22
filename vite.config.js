import { resolve } from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import vue from '@vitejs/plugin-vue';
import removeConsole from 'vite-plugin-remove-console';
import dts from 'vite-plugin-dts';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
  },
  plugins: [
    vue(),
    dts({
      include: ['src/**/*.ts'],
      insertTypesEntry: true,
      rollupTypes: true,
    }),
    removeConsole(),
    eslint(),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    copyPublicDir: false,
    target: 'esnext',
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'wire-vue',
      formats: ['es'],
      fileName: (format) => `wire-vue.${format}.js`,
      // fileName: 'wire-vue',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'wire-ts'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          'wire-ts': 'wire-ts',
        },
      },
    },
    write: true,
    modulePreload: false,
  },
});
