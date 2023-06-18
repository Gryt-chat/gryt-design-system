import { PageTitle } from '@/pageComponents/PageWrapper'
import React from 'react'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <PageTitle title='Inputs' description='Different kinds of inputs'>
      {children}
    </PageTitle>
  )
}
