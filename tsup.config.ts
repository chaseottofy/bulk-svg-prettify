import { defineConfig } from 'tsup';
// minify: false,
// minifyIdentifiers: false,
// minifySyntax: false,
// minifyWhitespace: false,
// sourcemap: false,
export default defineConfig({
  clean: true,
  dts: true,
  entryPoints: {
    'formatSVG': 'lib/index.ts'
  },
  external: ['tslib'],
  format: ['cjs', 'esm'],
  minify: false,
  minifyIdentifiers: false,
  minifySyntax: false,
  minifyWhitespace: false,
  sourcemap: false,
  // minify: false,
  // minifyIdentifiers: true,
  // minifySyntax: true,
  // minifyWhitespace: true,
  // sourcemap: false,
  target: 'es2018',
  // minify: 'terser',
  // terserOptions: {
  //   compress: {
  //     ecma: 2018,
  //     module: true,
  //     passes: 2,
  //     toplevel: true,
  //     unsafe_arrows: true,
  //     unsafe_methods: true,
  //     unsafe_proto: true,
  //     unsafe_undefined: true
  //   },
  //   format: {
  //     comments: false
  //   },
  //   keep_classnames: false,
  //   keep_fnames: false,
  //   mangle: {
  //     module: true,
  //     toplevel: true,
  //   },
  //   module: true,
  //   sourceMap: false,
  //   toplevel: true
  // },
  tsconfig: 'tsconfig.json'
});