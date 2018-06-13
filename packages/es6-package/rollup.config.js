import babel from 'rollup-plugin-babel'

const info = require('./package.json')

const config = {
  input: 'src/index.js',
  plugins: [
    babel(),
  ],
  output: [
    {
      file: info.main,
      format: 'umd',
      name: 'VideoPlayer'
    }, {
      file: info.module,
      format: 'es'
    }
  ]
}

export default config
