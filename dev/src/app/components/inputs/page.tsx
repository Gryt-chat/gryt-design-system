import React from 'react'
import { Section } from '@/pageComponents/Section'
import { Checkbox } from '@/components/checkbox/Checkbox'
import InputGroup from '@/components/InputGroup/InputGroup'

export default function buttons() {
  return (
    <div className='grid grid-cols-2 gap-12'>
      <Section header='Checkbox'>
        <Checkbox checkboxAnimated />
        <Checkbox
          checkboxAnimated
          inputSize='checkbox-sm'
          inputType='checkbox-primary'
        />
        <Checkbox
          checkboxAnimated
          inputSize='checkbox-xs'
          inputType='checkbox-success'
        />
      </Section>

      <Section header='Checkbox with label'>
        <Checkbox checkboxAnimated>Remember me</Checkbox>
        <Checkbox checkboxAnimated inputSize='checkbox-xs'>
          I agree
        </Checkbox>
      </Section>

      <Section header='Toggle'>
        <Checkbox isToggle />
        <Checkbox isToggle inputSize='toggle-sm' inputType='toggle-primary' />
        <Checkbox isToggle inputSize='toggle-xs' inputType='toggle-success' />
      </Section>

      <Section header='Toggle with label'>
        <Checkbox isToggle>Remember me</Checkbox>
        <Checkbox isToggle inputSize='toggle-xs'>
          I agree
        </Checkbox>
      </Section>

      <Section header='Input groups'>
        <div className='flex flex-col gap-10'>
          <InputGroup
            title='Friends'
            description='All actions related to friends.'
          >
            <Checkbox isToggle isRightSide>
              Friend comes online
            </Checkbox>
            <Checkbox isToggle isRightSide>
              Incoming message
            </Checkbox>
            <Checkbox isToggle isRightSide>
              Incoming friend request
            </Checkbox>
          </InputGroup>

          <InputGroup
            title='Games'
            description='Game invitations, party messages, etc.'
          >
            <Checkbox isToggle isRightSide>
              Game invitation
            </Checkbox>
            <Checkbox isToggle isRightSide>
              Party invitation
            </Checkbox>
            <Checkbox isToggle isRightSide>
              New party member
            </Checkbox>
            <Checkbox isToggle isRightSide>
              Match starting
            </Checkbox>
          </InputGroup>
        </div>
      </Section>
    </div>
  )
}
