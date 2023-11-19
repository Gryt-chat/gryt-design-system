import React from 'react'

interface inputParameterType extends React.HTMLAttributes<HTMLInputElement> {
  header?: string
}

export default function Input({header, ...props}: inputParameterType) {
  return (
    <label className='flex flex-col gap-1'>
      <span className='font-bold'>
      {header}
      </span>
    <input className='bg-neutral text-neutral-content rounded-lg px-4 py-2' {...props} />
    </label>
  )
}
