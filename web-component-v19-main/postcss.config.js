module.exports = {
  plugins: [
    require('postcss-prefix-selector')({
      prefix: '.aaaapb--',
      transform: (prefix, selector, prefixedSelector) => {
        if (selector === ':root') return selector; // Don't add prefix to :root
        return prefixedSelector;
      }
    })
  ]
}; 
module.exports = {
  plugins: [
    require('postcss-prefix-selector')({
      prefix: '.new-',
      exclude: ['html', 'body', '#app', ':root'], // Exclude global selectors
    }),
  ],
};