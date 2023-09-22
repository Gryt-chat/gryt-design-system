'use client'

import React from 'react'
import { Section } from '@/pageComponents/Section'

export default function colors() {
  function ColorPalette({ className }: { className?: string | undefined }) {
    return (
      <button
        onClick={() => {
          if (className)
            navigator.clipboard.writeText(className?.slice(3, className.length))
        }}
        className='flex flex-col gap-1 items-center justify-center'
      >
        <div className={`${className} w-24 h-24 rounded-lg`} />
        <p className='text-xs font-medium'>
          {className?.slice(3, className.length)}
        </p>
      </button>
    )
  }

  return (
    <div className='grid grid-cols-2 gap-12'>
      <Section header='Base'>
        <ColorPalette className='bg-base-100' />
        <ColorPalette className='bg-base-200' />
        <ColorPalette className='bg-base-300' />
        <ColorPalette className='bg-base-content' />
      </Section>

      <Section header='Primary'>
        <ColorPalette className='bg-primary' />
        <ColorPalette className='bg-primary-focus' />
        <ColorPalette className='bg-primary-content' />
      </Section>

      <Section header='Secondary'>
        <ColorPalette className='bg-secondary' />
        <ColorPalette className='bg-secondary-focus' />
        <ColorPalette className='bg-secondary-content' />
      </Section>

      <Section header='Accent'>
        <ColorPalette className='bg-accent' />
        <ColorPalette className='bg-accent-focus' />
        <ColorPalette className='bg-accent-content' />
      </Section>

      <Section header='Neutral'>
        <ColorPalette className='bg-neutral' />
        <ColorPalette className='bg-neutral-focus' />
        <ColorPalette className='bg-neutral-content' />
      </Section>

      <Section header='Info'>
        <ColorPalette className='bg-info' />
        <ColorPalette className='bg-info-content' />
      </Section>

      <Section header='Success'>
        <ColorPalette className='bg-success' />
        <ColorPalette className='bg-success-content' />
      </Section>

      <Section header='Warning'>
        <ColorPalette className='bg-warning' />
        <ColorPalette className='bg-warning-content' />
      </Section>

      <Section header='Error'>
        <ColorPalette className='bg-error' />
        <ColorPalette className='bg-error-content' />
      </Section>
    </div>
  )
}
