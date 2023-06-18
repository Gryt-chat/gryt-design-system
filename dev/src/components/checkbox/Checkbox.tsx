import React from 'react'

type checkboxType =
  | 'checkbox-primary'
  | 'checkbox-secondary'
  | 'checkbox-accent'
  | 'checkbox-success'
  | 'checkbox-warning'
  | 'checkbox-error'
  | 'checkbox-info'

type checkboxSize =
  | 'checkbox-xs'
  | 'checkbox-sm'
  | 'checkbox-md'
  | 'checkbox-lg'

type checkboxParameters = {
  children?: React.ReactNode
  checkboxRight?: boolean
  className?: string
  isAnimated?: boolean
  type?: checkboxType
  size?: checkboxSize
}

export function Checkbox({
  children,
  checkboxRight,
  className,
  isAnimated,
  type,
  size
}: checkboxParameters) {
  return children ? (
    <label className='label cursor-pointer flex gap-2'>
      {!checkboxRight && (
        <input
          type='checkbox'
          className={`checkbox${
            isAnimated ? ' interactive' : ''
          } ${type} ${size} ${className}`}
        />
      )}
      <span className='label-text'>{children}</span>
      {checkboxRight && (
        <input
          type='checkbox'
          className={`checkbox${
            isAnimated ? ' interactive' : ''
          } ${type} ${size} ${className}`}
        />
      )}
    </label>
  ) : (
    <input
      type='checkbox'
      className={`checkbox${
        isAnimated ? ' interactive' : ''
      } ${type} ${size} ${className}`}
    />
  )
}
