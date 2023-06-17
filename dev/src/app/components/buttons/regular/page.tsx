import { Button } from '@/components/button/Button'
import { PageWrapper } from '@/pageComponents/PageWrapper'
import React from 'react'

export default function page() {
  return (
    <PageWrapper title='Buttons' description='Clicky'>
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
    </PageWrapper>
  )
}
