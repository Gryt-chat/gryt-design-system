import {
  BsCalendarEventFill,
  BsCartFill,
  BsCheckCircleFill,
  BsDoorOpenFill,
  BsExclamationTriangleFill,
  BsFillExclamationCircleFill,
  BsHandIndexFill,
  BsInfoSquareFill,
  BsXCircleFill
} from 'react-icons/bs'
import React from 'react'
import { Badge } from '@/index'
import { PageWrapper } from '@/pageComponents/PageWrapper'

export default function badges() {
  return (
    <PageWrapper title='Badges' description='Used to display server tags'>
      <div
        className='grid gap-9 place-content-center w-full'
        style={{
          gridTemplateColumns: 'repeat(auto-fit, 280px)',
          gridAutoFlow: 'dense'
        }}
      >
        <div className='flex flex-col gap-2 items-center'>
          <h1 className='font-semibold text-lg'>Regular</h1>
          <Badge>Normal</Badge>
          <Badge type='badge-primary'>Primary</Badge>
          <Badge type='badge-secondary'>Secondary</Badge>
          <Badge type='badge-accent'>Accent</Badge>
          <Badge type='badge-ghost'>Ghost</Badge>
          <Badge type='badge-outline'>Outline</Badge>
          <Badge type='badge-error'>Error</Badge>
          <Badge type='badge-warning'>Warning</Badge>
          <Badge type='badge-info'>Info</Badge>
          <Badge type='badge-success'>Success</Badge>
        </div>

        <div className='flex flex-col gap-2 items-center'>
          <h1 className='font-semibold text-lg'>Icon and text</h1>
          <Badge>
            <BsCartFill className='w-4 h-4' /> Normal
          </Badge>
          <Badge type='badge-primary'>
            <BsHandIndexFill className='w-4 h-4' /> Primary
          </Badge>
          <Badge type='badge-secondary'>
            <BsCheckCircleFill className='w-4 h-4' />
            Secondary
          </Badge>
          <Badge type='badge-accent'>
            <BsXCircleFill className='w-4 h-4' />
            Accent
          </Badge>
          <Badge type='badge-ghost'>
            <BsCalendarEventFill className='w-4 h-4' />
            Ghost
          </Badge>
          <Badge type='badge-outline'>
            <BsDoorOpenFill className='w-4 h-4' />
            Outline
          </Badge>
          <Badge type='badge-error'>
            <BsExclamationTriangleFill className='w-4 h-4' />
            Error
          </Badge>
          <Badge type='badge-warning'>
            <BsFillExclamationCircleFill className='w-4 h-4' />
            Warning
          </Badge>
          <Badge type='badge-info'>
            <BsInfoSquareFill className='w-4 h-4' />
            Info
          </Badge>
          <Badge type='badge-success'>
            <BsCheckCircleFill className='w-4 h-4' />
            Success
          </Badge>
        </div>

        <div className='flex flex-col gap-2 items-center'>
          <h1 className='font-semibold text-lg'>Icons only</h1>
          <Badge>
            <BsCartFill className='w-4 h-4' />
          </Badge>
          <Badge type='badge-primary'>
            <BsHandIndexFill className='w-4 h-4' />
          </Badge>
          <Badge type='badge-secondary'>
            <BsCheckCircleFill className='w-4 h-4' />
          </Badge>
          <Badge type='badge-accent'>
            <BsXCircleFill className='w-4 h-4' />
          </Badge>
          <Badge type='badge-ghost'>
            <BsCalendarEventFill className='w-4 h-4' />
          </Badge>
          <Badge type='badge-outline'>
            <BsDoorOpenFill className='w-4 h-4' />
          </Badge>
          <Badge type='badge-error'>
            <BsExclamationTriangleFill className='w-4 h-4' />
          </Badge>
          <Badge type='badge-warning'>
            <BsFillExclamationCircleFill className='w-4 h-4' />
          </Badge>
          <Badge type='badge-info'>
            <BsInfoSquareFill className='w-4 h-4' />
          </Badge>
          <Badge type='badge-success'>
            <BsCheckCircleFill className='w-4 h-4' />
          </Badge>
        </div>
      </div>
    </PageWrapper>
  )
}
