import { PageTitle } from '@/pageComponents/PageWrapper'
import React from 'react'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <PageTitle title='Colors' description='Eyecandy'>
      {children}
    </PageTitle>
  )
}
