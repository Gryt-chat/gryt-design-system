import { Button } from '@/components/button/Button'
import { PageWrapper } from '@/pageComponents/PageWrapper'
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
    <PageWrapper title='Buttons' description='Clicky'>
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
    </PageWrapper>
  )
}
