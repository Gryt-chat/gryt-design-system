import React from 'react'

export function PageWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <main className='fixed overflow-x-hidden overflow-y-auto inset-0 left-96 p-24 flex flex-col gap-8 items-start'>
      {children}
    </main>
  )
}

export function PageTitle({
  title,
  description,
  children
}: {
  title: string
  description?: string
  children?: React.ReactNode
}) {
  return (
    <>
      <div>
        <h1 className='text-4xl text-primary font-bold'>{title}</h1>
        {description && (
          <p className='text-xl font-medium text-primary'>{description}</p>
        )}
      </div>
      {children}
    </>
  )
}
