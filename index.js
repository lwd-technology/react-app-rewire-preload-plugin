const PreloadPlugin = require('preload-webpack-plugin')

/**
 * @param {object} config
 * @param {any[]} config.plugins
 */
function rewirePreloadPlugin(config, env, preloadPluginOptions = {}) {
  // Add the Appcache plugin to the list of plugins
  config.plugins = (config.plugins || [])
    .concat([new PreloadPlugin(preloadPluginOptions)])

  return config
}

module.exports = rewirePreloadPlugin
