# @gryt/ui

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/@gryt/ui.svg)](https://www.npmjs.com/package/@gryt/ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i @gryt/ui @tailwindcss/typography tailwind daisyui
```
or
```bash
yarn add @gryt/ui @tailwindcss/typography tailwind daisyui
```

### Tailwind configuration

```ts
// tailwind.config.js

module.exports = {
    content: [
      // ...
      "./node_modules/@gryt/**/*.{js,ts}",
    ],
    presets: [
      // ...
      require('@gryt/ui/tailwind')
    ]
    // ...
  }
```

### Styling

```tsx
// _app.tsx

import { AppProps } from 'next/app';
import "@gryt/ui/style.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

## Usage

### Button

```tsx
// somepage.tsx

import React, { Component } from 'react'
import { Button } from '@gryt/ui'

export default function SomePage() {
  return (
      <div>
        <h1 className="text-2xl font-bold text-primary">Welcome!</h1>
        <Button>Click me!</Button>
      </div>
  );
}
```

## License

MIT © [Gryt-chat](https://github.com/Gryt-chat)
