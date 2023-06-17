import React from 'react'
import { NavBar } from './NavBar'

export function PageWrapper({
  children,
  title,
  description
}: {
  children?: React.ReactNode
  title?: string
  description?: string
}) {
  return (
    <main>
      <NavBar />
      <div className='fixed overflow-x-hidden overflow-y-auto inset-0 left-96 p-24 flex flex-col gap-8 items-start'>
        <div>
          <h1 className='text-4xl text-primary font-bold'>{title}</h1>
          <p className='text-xl font-medium text-primary'>{description}</p>
        </div>
        {children}
      </div>
    </main>
  )
}
