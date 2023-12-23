import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const src = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');
const test = resolve(__dirname, 'test');
const snapshots = resolve(__dirname, 'snapshots');

export default {
  plugins: [vue()],
  resolve: {
    alias: { '@': src, '@test': test },
  },
  build: {
    lib: {
      entry: `${src}/index.ts`,
      name: 'LktModalCrud',
      fileName: (format) => `lkt-modal-crud.${format}.js`,
    },
    outDir,
    minify: true,
    rollupOptions: {
      external: [
        'vue',
        'lkt-modal',
        'lkt-item-crud',
        'lkt-tools',
        'lkt-events',
        'lkt-vue-tools',
        'lkt-http-client',
        'lkt-data-state',
        'mount-vue-component',
        'lkt-fields',
        'lkt-button',
        'lkt-tabs',
      ],
      output: {
        globals: {
          vue: 'Vue',
          'lkt-modal': 'LktModal',
          'lkt-tools': 'LktTools',
          'lkt-http-client': 'LktHttpClient',
          'lkt-events': 'LktEvents',
          'lkt-vue-events': 'LktVueEvents',
          'lkt-data-state': 'LktDataState',
          'mount-vue-component': 'MountVueComponent',
        },
        sourcemapExcludeSources: true,
      },
    },
  },
  test: {
    coverage: {
      reporter: ['text', 'lcov'],
    },
    resolveSnapshotPath: (testPath, snapExtension) => {
      const path = testPath.split('/').splice(-2);
      return `${snapshots}/${path[0]}/${path[1]}${snapExtension}`;
    },
  },
};
