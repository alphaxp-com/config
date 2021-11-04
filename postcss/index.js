const postcss = require('postcss');

module.exports = ({calcOptions = {}, autoprefixerOptions = {}} = {}) => {
  return {
    ...postcss([
      require('autoprefixer')(autoprefixerOptions),
    ]),
    postcssPlugin: '@alphaxp/postcss-plugin',
  };
};
module.exports.postcss = true;