import { PageTitle } from '@/pageComponents/PageWrapper'
import React from 'react'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <PageTitle title='Modals' description='Awesome popups'>
      {children}
    </PageTitle>
  )
}
