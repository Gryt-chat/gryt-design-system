<h1 align="center">gryt-ui</h1>
<p>
  <a href="https://www.npmjs.com/package/@gryt/ui" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@gryt/ui.svg?style=flat-square">
  </a>
</p>

> Official design system from Gryt!

## Install

```sh
npm i @gryt/ui
```

or

```sh
yarn add @gryt/ui
```

## Usage

Import `@gryt/ui/src/styles/global.scss` to your `_app.tsx` file

```tsx
import "@gryt/ui/src/styles/globals.scss";
```

Add the following webpack configuration to your `next.config.js` file

```js
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(ts)x?$/, // Just `tsx?` file only
      use: [
        // options.defaultLoaders.babel, I don't think it's necessary to have this loader too
        {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
            onlyCompileBundledFiles: true,
          },
        },
      ],
    });
  
    return config;
  },
```

Here's an example `next.config.js` file

```js
/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(ts)x?$/, // Just `tsx?` file only
      use: [
        // options.defaultLoaders.babel, I don't think it's necessary to have this loader too
        {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
            onlyCompileBundledFiles: true,
          },
        },
      ],
    });
  
    return config;
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
```

Remove tailwind config from `postcss.config.js` file

```js
module.exports = {
  plugins: {
    // tailwindcss: {},
    autoprefixer: {},
  },
}
```

## Author

👤 **Gryt**

* Website: https://gryt.chat/
* Github: [@Gryt-chat](https://github.com/Gryt-chat)

## 📝 License

Copyright © 2023 [Gryt](https://github.com/Gryt-chat).<br />
This project is [ISC](https://github.com/Gryt-chat/gryt-ui/blob/master/LICENSE) licensed.