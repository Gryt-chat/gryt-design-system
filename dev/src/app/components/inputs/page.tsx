import React from 'react'
import { Section } from '@/pageComponents/Section'
import { Checkbox } from '@/components/checkbox/Checkbox'

export default function buttons() {
  return (
    <React.Fragment>
      <Section header='Checkbox'>
        <Checkbox isAnimated />
        <Checkbox isAnimated type='checkbox-primary' />
        <Checkbox isAnimated type='checkbox-success' />
      </Section>

      <Section header='Checkbox with label'>
        <Checkbox isAnimated>Remember me</Checkbox>
        <Checkbox isAnimated>I agree</Checkbox>
      </Section>
    </React.Fragment>
  )
}
