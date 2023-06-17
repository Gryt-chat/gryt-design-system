import { BsCartFill, BsCheckCircleFill, BsTrashFill } from 'react-icons/bs'
import React from 'react'
import { Button } from '@/index'
import { Section } from '@/pageComponents/Section'

export default function buttons() {
  return (
    <React.Fragment>
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

      <Section header='Icon only'>
        <Button iconOnly='btn-square'>
          <BsCheckCircleFill className='w-4 h-4' />
        </Button>
        <Button type='btn-outline' iconOnly='btn-circle'>
          <BsCheckCircleFill className='w-4 h-4' />
        </Button>
      </Section>
    </React.Fragment>
  )
}
