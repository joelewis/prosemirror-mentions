import babel from 'rollup-plugin-babel';

export default {
  input: './src/index.js',
  output: [{
    format: 'cjs',
    file: 'dist/index.js',
  }, {
    file: 'dist/index.es.js',
    format: 'esm'
  }],
  sourcemap: true,
  plugins: [babel()],
  external(id) {
    return !/^[\.\/]/.test(id);
  },
};
