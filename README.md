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

## Usage

### Button

```tsx
// somePage.tsx
import React, { Component } from 'react'

import Button from '@gryt/ui'

class Example extends Component {
  render() {
    return <Button>Click me!</Button>
  }
}
```

### Add styling (including tailwind config)

```tsx
// _app.tsx
import { AppProps } from 'next/app';
import "@gryt/ui/src/styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps<{ initialSession: Session }>) {
  return <Component {...pageProps} />
}
```

## License

MIT © [Gryt-chat](https://github.com/Gryt-chat)
