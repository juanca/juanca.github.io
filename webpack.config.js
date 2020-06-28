const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.md',
  },
  mode: 'development',
  module: {
    rules: [{
        test: /\.md$/i,
        use: [{
          loader: 'file-loader',
        }, {
          loader: 'extract-loader',
        }, {
          loader: 'html-loader',
        }, {
          loader: 'markdown-loader',
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: ({ compilation }) => {
        const mdAsset = Object.keys(compilation.assets).filter(asset => asset.includes('.md'));
        const mdSource = mdAsset.map(asset => compilation.assets[asset].source());
        return `
<html>
  <head>
    <title>juanca.github.io</title>
  </head>
  <body>
    ${mdSource}
  </body>
</html>
`
      },
    }),
  ]
};
