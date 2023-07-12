import React from 'react'
import { Section } from '@/pageComponents/Section'
import { Checkbox } from '@/components/checkbox/Checkbox'

export default function buttons() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
