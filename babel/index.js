module.exports = function (api, options) {
  const assumptions = [];
  const plugins = [
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'),
    require.resolve('@babel/plugin-proposal-optional-chaining'),
    require.resolve('@babel/plugin-transform-runtime'),
  ];
  const presets = [
    [require.resolve('@babel/preset-env')],
    [require.resolve('@babel/preset-typescript')],
    [require.resolve('@babel/preset-react')]
  ];

  return {assumptions, plugins, presets};
}