const postcssPrefixSelector = require('postcss-prefix-selector');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$|\.sass$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssPrefixSelector({
                    prefix: '.new-',
                    exclude: ['html', 'body', '#app', ':root'],
                  }),
                ],
              },
            },
          },
        ],
      },
    ],
  },
};