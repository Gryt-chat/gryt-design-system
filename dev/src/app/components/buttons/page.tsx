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
  BsTrashFill,
  BsXCircleFill
} from 'react-icons/bs'
import React from 'react'
import { Button } from '@/index'
import { PageWrapper } from '@/pageComponents/PageWrapper'
import { Section } from '@/pageComponents/Section'

export default function buttons() {
  return (
    <PageWrapper title='Buttons' description='Clicky!'>
      <Section header='Normal'>
        <Button>Activate</Button>
        <Button type='btn-secondary'>Disable</Button>
      </Section>

      <Section header='Normal + Icon'>
        <Button>
          <BsCartFill className='w-4 h-4' /> Purchase
        </Button>
        <Button type='btn-secondary'>
          <BsTrashFill className='w-4 h-4' /> Trash
        </Button>
      </Section>

      <Section header='Loading'>
        <Button type='btn-outline' loading>
          Please wait
        </Button>
        <Button type='btn-outline' loading loadingIcon>
          Please wait
        </Button>
      </Section>

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
    </PageWrapper>
  )
}
