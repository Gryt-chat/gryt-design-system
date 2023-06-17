import React from 'react'

export function Section({
  children,
  header
}: {
  children: React.ReactNode
  header: string
}) {
  return (
    <div className='flex flex-col gap-4 min-w-[512px]'>
      <h2 className='font-medium text-lg'>{header}</h2>
      <div className='mockup-window bg-base-200 border border-base-200'>
        <div className='flex gap-4 justify-center px-4 py-16 bg-base-100'>
          {children}
        </div>
      </div>
    </div>
  )
}
