import { NavBar } from '@/pageComponents/NavBar'
import { PageWrapper } from '@/pageComponents/PageWrapper'
import React from 'react'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <React.Fragment>
      <NavBar />
      <PageWrapper>{children}</PageWrapper>
    </React.Fragment>
  )
}
