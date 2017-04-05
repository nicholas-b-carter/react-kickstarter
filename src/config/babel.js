module.exports = {
  "babelrc": false,
  "presets": [
    require.resolve('babel-preset-env'),
    require.resolve("babel-preset-react")
  ],
  "plugins": [
    require.resolve("babel-plugin-add-module-exports"),
    require.resolve("babel-plugin-transform-class-properties"),
    require.resolve("babel-plugin-transform-object-rest-spread"),
    require.resolve("babel-plugin-transform-runtime")
  ]
};