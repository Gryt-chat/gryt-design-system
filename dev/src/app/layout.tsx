import { Metadata } from 'next'
import '../styles/style.scss'
// eslint-disable-next-line camelcase
import { DM_Sans, Noto_Color_Emoji } from 'next/font/google'

const defaultFont = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

const emojiFont = Noto_Color_Emoji({
  subsets: ['emoji'],
  weight: '400'
})

const description = 'Gryt UI - Official Design System'
const imagePreview = '/images/meta/index.png'
const site = 'https://ui.gryt.chat/'

export const metadata: Metadata = {
  title: 'Home',
  description: description,
  icons: { apple: '/apple-touch-icon.png', icon: '/favicon-32x32.png' },
  themeColor: '#252732',
  twitter: { description: description, site: site, images: imagePreview },
  authors: { name: 'Gryt', url: 'https://gryt.chat' }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      style={{
        fontFamily: `${defaultFont.style.fontFamily}, ${emojiFont.style.fontFamily}`
      }}
    >
      <body>{children}</body>
    </html>
  )
}
