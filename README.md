# react-app-rewire-preload-plugin

Add [`preload-webpack-plugin`](https://github.com/GoogleChrome/preload-webpack-plugin) to a [`react-app-rewired`](https://github.com/timarney/react-app-rewired) config.

```js
const rewirePreloadPlugin = require('react-app-rewire-preload-plugin')

// Add preloading support
config = rewirePreloadPlugin(config, env)
```
