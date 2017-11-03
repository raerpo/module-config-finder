const path = require('path');

module.exports = {
  entry: {
    popup: './popup.tsx',
    background: './background.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js' 
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}