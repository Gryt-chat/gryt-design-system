import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const description = 'Gryt UI - Official Design System'
  const imagePreview = '/images/meta/index.png'
  const site = 'https://ui.gryt.chat/'
  return (
    <Html lang='en' className='bg-base-300'>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />

        <meta name='title' content='Gryt' />
        <meta name='description' content={description} />
        <meta name='theme-color' content='#252732' />

        <meta property='og:type' content='website' />
        <meta property='og:url' content={site} />
        <meta property='og:title' content='Gryt' />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={imagePreview} />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={site} />
        <meta property='twitter:title' content='Gryt' />
        <meta property='twitter:description' content={description} />
        <meta property='twitter:image' content={imagePreview} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
