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
type buttonParameterType = {
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
  type,
  iconOnly,
  loading,
  noAnimation,
  size
}: buttonParameterType) {
  return (
    <button
      className={`${className ?? ''} btn gap-2 ${type ?? ''} ${
        iconOnly ?? ''
      } ${size ?? ''}${loading !== undefined ? ' loading' : ''}${
        noAnimation !== undefined ? ' glass' : ''
      }`}
    >
      {children}
    </button>
  )
}
