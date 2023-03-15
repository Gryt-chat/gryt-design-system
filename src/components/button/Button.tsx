import React from 'react'

type buttonType =
  | 'btn-primary'
  | 'btn-secondary'
  | 'btn-accent'
  | 'btn-ghost'
  | 'btn-outline'
  | 'btn-success'
  | 'btn-warning'
  | 'btn-error'
  | 'btn-info'
  | 'btn-link'
  | 'btn-active'
  | 'btn-disabled'
type buttonSize =
  | 'btn-lg'
  | 'btn-md'
  | 'btn-sm'
  | 'btn-xs'
  | 'btn-wide'
  | 'btn-block'
interface buttonParameterType extends React.HTMLAttributes<HTMLButtonElement> {
  children?: any
  className?: string
  type?: buttonType
  loading?: boolean
  noAnimation?: boolean
  iconOnly?: 'btn-square' | 'btn-circle'
  size?: buttonSize
}

export function Button({
  children,
  className,
  type = 'btn-primary',
  iconOnly,
  loading,
  noAnimation,
  size,
  ...props
}: buttonParameterType) {
  return (
    <button
      className={`btn gap-2 ${type ?? ''} ${iconOnly ?? ''} ${size ?? ''}${
        loading !== undefined ? ' loading' : ''
      }${noAnimation !== undefined ? ' glass' : ''} ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  )
}
