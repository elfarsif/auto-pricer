const path = require('path');

module.exports = {
  entry: './src/index.ts', // Replace with the entry point of your TypeScript project
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js', // The name of the output bundled file
    path: path.resolve(__dirname, 'dist'), // The output directory
  },
  mode: 'production', // Set mode to 'production' for optimized output
};
