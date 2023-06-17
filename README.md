# @gryt/ui

## [Preview here](https://ui.gryt.chat/)

[![NPM](https://img.shields.io/npm/v/@gryt/ui.svg)](https://www.npmjs.com/package/@gryt/ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-typescript_eslint-darkblue.svg)](https://typescript-eslint.io/)

## Install

```bash
npm i @gryt/ui @tailwindcss/typography tailwind daisyui
```
or
```bash
yarn add @gryt/ui @tailwindcss/typography tailwind daisyui
```

### Tailwind configuration

```js
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

```jsx
// _app.tsx

import { AppProps } from 'next/app';
import "@gryt/ui/style.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

## Usage

### Button

```jsx
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

## Developing new components

**Clone** this repository and follow the steps below.

### Preparation

Use the `dev` folder.

```sh
cd dev
```

### Install dependencies

```sh
yarn
```

or

```sh
npm i
```

### Start development server

```sh
yarn dev
```

or

```sh
npm run dev
```

### Publish changes

Use `np`

```sh
yarn global add np
np
```

## License

MIT © [Gryt-chat](https://github.com/Gryt-chat)
