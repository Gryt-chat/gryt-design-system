import Link from 'next/link'
import React from 'react'
import navbarNames from '../navbar_names.json'

interface jsonData {
  [key: string]: any
}

interface TransformedData {
  [key: string]: any
  URL?: string
}

const ConvertJsonData = (data: jsonData): TransformedData => {
  const transformedData: TransformedData = {
    app: { URL: data.app }
  }

  for (const key in data) {
    if (key === 'app') continue

    const value = data[key]
    const parts = value.split('/').filter(Boolean)
    let currentObj: any = transformedData

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]

      if (!currentObj[part]) {
        currentObj[part] = { URL: `/${parts.slice(0, i + 1).join('/')}` }
      }

      currentObj = currentObj[part]
    }
  }

  return transformedData
}

function NavLink({
  children,
  size
}: {
  children: React.ReactNode
  size: number
}) {
  return (
    <h2
      className={`${
        size === 1
          ? 'text-2xl font-bold text-primary'
          : size <= 2
          ? 'text-xl font-medium'
          : 'text-secondary ml-4'
      }`}
    >
      {children}
    </h2>
  )
}

function checkData(
  data: TransformedData,
  currentName?: string,
  currentLevel = 0
) {
  const level = currentLevel + 1 // see if top level or not

  return Object.keys(data).map((level1Key) => {
    const name =
      level1Key !== undefined
        ? navbarNames[level1Key as keyof typeof navbarNames] ?? level1Key
        : currentName

    // If has children > 1 (aka a category🤓)
    if (
      typeof data[level1Key] === 'object' &&
      Object.keys(data[level1Key]).length > 1
    ) {
      return (
        <li className='flex flex-col gap-1' key={level1Key} id={name as string}>
          {level > 1 && (
            <Link href={data[level1Key].URL || '/'}>
              <NavLink size={level}>{name}</NavLink>
            </Link>
          )}
          <ul className={`flex flex-col ${level === 1 ? 'gap-4' : 'gap-1'}`}>
            {checkData(data[level1Key], name, level)}
          </ul>
        </li>
      )
    }
    // If has children == 1 (aka a link🤓)
    else if (
      typeof data[level1Key] === 'object' &&
      Object.keys(data[level1Key]).length === 1
    ) {
      return (
        level > 1 && (
          <li key={level1Key} id={`${name} URL`}>
            <Link href={data[level1Key].URL || '/'}>
              <NavLink size={level}>{name}</NavLink>
            </Link>
          </li>
        )
      )
    }
  })
}

function GenerateNavbarList(data: TransformedData) {
  return <ul className='flex flex-col gap-4'>{checkData(data)}</ul>
}

export function GenerateMenu(jsonData: jsonData) {
  const menuJson = ConvertJsonData(jsonData)

  return GenerateNavbarList(menuJson)
}
