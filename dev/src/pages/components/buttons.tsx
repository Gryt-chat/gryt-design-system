import {
  BsCalendarEventFill,
  BsCartFill,
  BsCheckCircleFill,
  BsDoorOpenFill,
  BsExclamationTriangleFill,
  BsFillExclamationCircleFill,
  BsHandIndexFill,
  BsInfoSquareFill,
  BsLink,
  BsXCircleFill
} from 'react-icons/bs'
import React from 'react'
import { ComponentsWrapper } from '..'
import { Button } from '@/index'

export default function buttons() {
  return (
    <ComponentsWrapper>
      <div
        className='grid gap-9 place-content-center w-full'
        style={{
          gridTemplateColumns: 'repeat(auto-fit, 280px)',
          gridAutoFlow: 'dense'
        }}
      >
        <div className='flex flex-col gap-2 items-center'>
          <h1 className='font-semibold text-lg'>Regular</h1>
          <Button>Default</Button>
          <Button type='btn-primary'>Primary</Button>
          <Button type='btn-secondary'>Secondary</Button>
          <Button type='btn-accent'>Accent</Button>
          <Button type='btn-ghost'>Ghost</Button>
          <Button type='btn-outline'>Outline</Button>
          <Button type='btn-active'>Active</Button>
          <Button type='btn-disabled'>Disabled</Button>
          <Button type='btn-error'>Error</Button>
          <Button type='btn-warning'>Warning</Button>
          <Button type='btn-info'>Info</Button>
          <Button type='btn-success'>Success</Button>
          <Button type='btn-link'>Link</Button>
        </div>

        <div className='flex flex-col gap-2 items-center'>
          <h1 className='font-semibold text-lg'>Icon and text</h1>
          <Button>
            <BsCartFill className='w-4 h-4' /> Default
          </Button>
          <Button type='btn-primary'>
            <BsHandIndexFill className='w-4 h-4' /> Primary
          </Button>
          <Button type='btn-secondary'>
            <BsCheckCircleFill className='w-4 h-4' />
            Secondary
          </Button>
          <Button type='btn-accent'>
            <BsXCircleFill className='w-4 h-4' />
            Accent
          </Button>
          <Button type='btn-ghost'>
            <BsCalendarEventFill className='w-4 h-4' />
            Ghost
          </Button>
          <Button type='btn-outline'>
            <BsDoorOpenFill className='w-4 h-4' />
            Outline
          </Button>
          <Button type='btn-active'>
            <BsDoorOpenFill className='w-4 h-4' />
            Active
          </Button>
          <Button type='btn-disabled'>
            <BsDoorOpenFill className='w-4 h-4' />
            Disabled
          </Button>
          <Button type='btn-error'>
            <BsExclamationTriangleFill className='w-4 h-4' />
            Error
          </Button>
          <Button type='btn-warning'>
            <BsFillExclamationCircleFill className='w-4 h-4' />
            Warning
          </Button>
          <Button type='btn-info'>
            <BsInfoSquareFill className='w-4 h-4' />
            Info
          </Button>
          <Button type='btn-success'>
            <BsCheckCircleFill className='w-4 h-4' />
            Success
          </Button>
          <Button type='btn-link'>
            <BsLink className='w-4 h-4' />
            Link
          </Button>
        </div>

        <div className='flex flex-col gap-2 items-center'>
          <h1 className='font-semibold text-lg'>Icons only</h1>
          <Button iconOnly='btn-square'>
            <BsCartFill className='w-4 h-4' />
          </Button>
          <Button type='btn-primary' iconOnly='btn-square'>
            <BsHandIndexFill className='w-4 h-4' />
          </Button>
          <Button type='btn-secondary' iconOnly='btn-square'>
            <BsCheckCircleFill className='w-4 h-4' />
          </Button>
          <Button type='btn-accent' iconOnly='btn-square'>
            <BsXCircleFill className='w-4 h-4' />
          </Button>
          <Button type='btn-ghost' iconOnly='btn-square'>
            <BsCalendarEventFill className='w-4 h-4' />
          </Button>
          <Button type='btn-outline' iconOnly='btn-square'>
            <BsDoorOpenFill className='w-4 h-4' />
          </Button>
          <Button type='btn-active' iconOnly='btn-square'>
            <BsDoorOpenFill className='w-4 h-4' />
          </Button>
          <Button type='btn-disabled' iconOnly='btn-square'>
            <BsDoorOpenFill className='w-4 h-4' />
          </Button>
          <Button type='btn-error' iconOnly='btn-square'>
            <BsExclamationTriangleFill className='w-4 h-4' />
          </Button>
          <Button type='btn-warning' iconOnly='btn-square'>
            <BsFillExclamationCircleFill className='w-4 h-4' />
          </Button>
          <Button type='btn-info' iconOnly='btn-square'>
            <BsInfoSquareFill className='w-4 h-4' />
          </Button>
          <Button type='btn-success' iconOnly='btn-square'>
            <BsCheckCircleFill className='w-4 h-4' />
          </Button>
          <Button type='btn-link' iconOnly='btn-square'>
            <BsLink className='w-4 h-4' />
          </Button>
        </div>
      </div>
    </ComponentsWrapper>
  )
}
