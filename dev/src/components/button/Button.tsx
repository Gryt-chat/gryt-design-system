import Link from 'next/link'
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
  isLink?: boolean
  href?: string
  disabled?: boolean
  loadingIcon?: boolean
}

export function Button({
  children,
  className,
  type = 'btn-primary',
  iconOnly,
  loading,
  noAnimation,
  size,
  isLink,
  href = '',
  disabled,
  loadingIcon,
  ...props
}: buttonParameterType) {
  const clsname = `btn gap-2${type ? ` ${type}` : ''}${size ? `${size}` : ''}${
    iconOnly ? ` ${iconOnly}` : ''
  }${noAnimation !== undefined ? ' glass' : ''} ${className ?? ''}`
  const content =
    loading && !loadingIcon ? (
      <span className='loading loading-dots loading-xs' />
    ) : loadingIcon ? (
      <React.Fragment>
        <span className='loading loading-dots loading-xs' />
        {children}
      </React.Fragment>
    ) : (
      children
    )
  return (
    <React.Fragment>
      {!isLink ? (
        <button disabled={disabled} className={clsname} {...props}>
          {content}
        </button>
      ) : (
        <Link href={href} className={clsname}>
          {content}
        </Link>
      )}
    </React.Fragment>
  )
}
