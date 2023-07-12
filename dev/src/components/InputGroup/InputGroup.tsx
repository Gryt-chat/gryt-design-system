import React from 'react'

interface InputGroupProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export default function InputGroup({
  children,
  title,
  description
}: InputGroupProps) {
  return (
    <div className='flex flex-col gap-4 min-w-[512px]'>
      <div className='flex flex-col gap-2'>
        {title && <h1 className='font-bold text-xl'>{title}</h1>}
        {description && <p className='text-sm font-medium'>{description}</p>}
      </div>
      <div className='flex flex-col gap-0.5 overflow-hidden rounded-lg'>
        {React.Children.map(children, (child, index) => (
          <div key={index} className='bg-neutral p-3'>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
