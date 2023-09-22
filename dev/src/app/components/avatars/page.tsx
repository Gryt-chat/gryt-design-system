import { Avatar } from '@/index'
import { Section } from '@/pageComponents/Section'
import React from 'react'

export default function badges() {
  return (
    <div className='grid grid-cols-2 gap-12'>
      <Section header='Rounded'>
        <Avatar src='/images/duck.jpeg' status='online' />
        <Avatar src='/images/cowboy.jpeg' />
        <Avatar src='/images/cat.png' status='ingame' />
      </Section>

      <Section header='Round'>
        <Avatar src='/images/duck.jpeg' type='round' status='online' />
        <Avatar src='/images/cowboy.jpeg' type='round' />
        <Avatar src='/images/cat.png' type='round' status='ingame' />
      </Section>

      <Section header='Square'>
        <Avatar src='/images/duck.jpeg' type='square' status='online' />
        <Avatar src='/images/cowboy.jpeg' type='square' />
        <Avatar src='/images/cat.png' type='square' status='ingame' />
      </Section>
    </div>
  )
}
