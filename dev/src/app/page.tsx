import React from 'react'
import { Button } from '..'

export default function Page() {
  return (
    <div className='w-screen h-screen flex flex-col gap-8 place-items-center justify-center'>
      <div className='flex flex-col gap-2 items-center'>
        <h1 className='text-4xl text-primary font-bold'>Gryt UI</h1>
        <p className='font-medium text-primary'>Welcome!👋</p>
      </div>
      <Button isLink href='/components'>
        Continue
      </Button>
    </div>
  )
}
