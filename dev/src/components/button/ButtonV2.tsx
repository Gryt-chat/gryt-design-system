import React from 'react'
import { ImSpinner2 } from 'react-icons/im'

interface buttonParameterType extends React.HTMLAttributes<HTMLButtonElement> {
  children?: any
  className?: string
  loading?: boolean
  disabled?: boolean
  square?: boolean
}

const commonButtonClass =
  'rounded-full h-11 font-bold transition-all duration-100 active:scale-95 flex items-center justify-center gap-2'
const content = (children: any, loading?: boolean) => {
  return loading ? (
    <>
      <ImSpinner2 className='animate-spin' />
    </>
  ) : (
    children
  )
}

export default function ButtonV2({
  children,
  className,
  loading,
  disabled,
  square,
  ...props
}: buttonParameterType) {
  return (
    <button
      className={`${commonButtonClass} ${
        square ? 'w-11' : 'px-4'
      } ${className}`}
      {...props}
    >
      {content(children, loading)}
    </button>
  )
}

ButtonV2.Primary = function Primary({
  children,
  className,
  loading,
  square,
  disabled,
  ...props
}: buttonParameterType) {
  return (
    <button
      className={`${commonButtonClass} ${
        square ? 'w-11' : 'px-4'
      } bg-primary text-primary-content`}
      {...props}
    >
      {content(children, loading)}
    </button>
  )
}

ButtonV2.Secondary = function Secondary({
  children,
  className,
  loading,
  square,
  disabled,
  ...props
}: buttonParameterType) {
  return (
    <button
      className={`${commonButtonClass} ${
        square ? 'w-11' : 'px-4'
      } bg-secondary text-secondary-content`}
      {...props}
    >
      {content(children, loading)}
    </button>
  )
}

ButtonV2.Accent = function Accent({
  children,
  className,
  loading,
  square,
  disabled,
  ...props
}: buttonParameterType) {
  return (
    <button
      className={`${commonButtonClass} ${
        square ? 'w-11' : 'px-4'
      } bg-accent text-accent-content`}
      {...props}
    >
      {content(children, loading)}
    </button>
  )
}
