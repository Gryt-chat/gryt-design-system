import { Button } from '@/components/button/Button'
import React from 'react'
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

export default function page() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
