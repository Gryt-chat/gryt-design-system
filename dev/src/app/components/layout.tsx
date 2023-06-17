import { NavBar } from '@/pageComponents/NavBar'
import { PageWrapper } from '@/pageComponents/PageWrapper'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  )
}
