import React from 'react'
import Image from 'next/image'

type avatarStatus = 'online' | 'busy' | 'ingame' | 'away' | 'offline'
type avatarType = 'round' | 'sqround' | 'square'
type avatarParameterType = {
  className?: string
  type?: avatarType
  src: string
  size?: number
  status?: avatarStatus
}

function getType(type: avatarType) {
  switch (type) {
    case 'round':
      return 'rounded-full'
    case 'sqround':
      return 'rounded-md'
    case 'square':
      return 'rounded-0'
  }
}

function getStatus(status: avatarStatus) {
  switch (status) {
    case 'offline':
      return `border-gray-400`
    case 'online':
      return `border-green-400`
    case 'away':
      return `border-yellow-400`
    case 'ingame':
      return `border-primary`
    case 'busy':
      return `border-red-400`
  }
}

export function Avatar({
  className,
  type = 'sqround',
  src,
  size = 16,
  status = 'offline'
}: avatarParameterType) {
  return (
    <Image
      quality={100}
      src={src}
      width={size * 4}
      height={size * 4}
      draggable={false}
      style={{
        width: size * 4,
        height: size * 4,
        borderBottomWidth: `${size / 4}px`,
        objectFit: 'cover',
        maxWidth: 'none',
        maxHeight: 'none'
      }}
      className={`${getType(type)} ${getStatus(
        status
      )} bg-base-300 ${className}`}
      alt=''
    />
  )
}
