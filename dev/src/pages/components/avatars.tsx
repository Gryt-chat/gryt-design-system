import { Avatar } from '@/index'
import React from 'react'
import { ComponentsWrapper } from '..'

export default function badges() {
  return (
    <ComponentsWrapper>
      <div
        className='grid gap-9 place-content-center w-full'
        style={{
          gridTemplateColumns: 'repeat(auto-fit, 64px)',
          gridAutoFlow: 'dense'
        }}
      >
        <div className='flex flex-col gap-2 items-center'>
          <h1 className='font-semibold text-lg'>Sqround</h1>
          <Avatar src='/images/duck.jpeg' status='online' />
        </div>

        <div className='flex flex-col gap-2 items-center'>
          <h1 className='font-semibold text-lg'>Round</h1>
          <Avatar src='/images/duck.jpeg' type='round' />
        </div>

        <div className='flex flex-col gap-2 items-center'>
          <h1 className='font-semibold text-lg'>Square</h1>
          <Avatar src='/images/duck.jpeg' status='ingame' type='square' />
        </div>
      </div>

      <div className='flex flex-col gap-2 place-items-center w-full'>
        <h1 className='font-semibold text-lg'>Grid of avatars</h1>

        <div
          className='grid gap-4 place-content-center w-full'
          style={{
            gridTemplateColumns: 'repeat(6, 64px)',
            gridAutoFlow: 'dense'
          }}
        >
          <Avatar src='/images/duck.jpeg' status='online' />
          <Avatar src='/images/duck.jpeg' status='away' />
          <Avatar src='/images/duck.jpeg' status='ingame' />
          <Avatar src='/images/duck.jpeg' status='online' />
          <Avatar src='/images/duck.jpeg' status='busy' />
          <Avatar src='/images/duck.jpeg' status='offline' />
          <Avatar src='/images/duck.jpeg' status='away' />
          <Avatar src='/images/duck.jpeg' status='busy' />
          <Avatar src='/images/duck.jpeg' status='ingame' />
          <Avatar src='/images/duck.jpeg' status='online' />
          <Avatar src='/images/duck.jpeg' status='busy' />
          <Avatar src='/images/duck.jpeg' status='online' />
          <Avatar src='/images/duck.jpeg' status='away' />
          <Avatar src='/images/duck.jpeg' status='ingame' />
          <Avatar src='/images/duck.jpeg' status='offline' />
          <Avatar src='/images/duck.jpeg' status='online' />
          <Avatar src='/images/duck.jpeg' status='away' />
          <Avatar src='/images/duck.jpeg' status='offline' />
        </div>
      </div>
    </ComponentsWrapper>
  )
}
