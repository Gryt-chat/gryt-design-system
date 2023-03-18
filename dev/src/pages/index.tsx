import Head from 'next/head'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import React from 'react'

function NavLink({
  children,
  href,
  router,
  ...props
}: {
  children: any
  href: string
  router: NextRouter
}) {
  return (
    <Link
      className={`rounded-xl p-2 text-sm ${
        router.pathname === href ? 'font-medium btn-primary ' : 'btn-ghost'
      }`}
      href={href}
      {...props}
    >
      {children}
    </Link>
  )
}

export function NavItems({ router }: { router: NextRouter }) {
  const navData = require('../navbar.json')
  return (
    <>
      {Object.keys(navData).map((value) => {
        return (
          <div key={value} className='flex flex-col gap-2'>
            <h2 className='text-xl font-semibold'>{value}</h2>
            {Object.keys(navData[value]).map((second) => {
              return (
                <NavLink
                  key={second}
                  href={`/components/${navData[value][second]}`}
                  router={router}
                >
                  {second}
                </NavLink>
              )
            })}
          </div>
        )
      })}
    </>
  )
}

export function Navbar() {
  const router = useRouter()

  return (
    <nav
      className='bg-base-300 flex flex-col p-12 gap-6 h-full'
      style={{ width: 500 }}
    >
      <Link
        href='/'
        className='text-4xl btn no-animation font-bold link-primary'
      >
        GDS
      </Link>

      <NavItems router={router} />
    </nav>
  )
}

export function ComponentsWrapper({
  children,
  className,
  ...props
}: {
  children?: any
  className?: string
}) {
  return (
    <>
      <Head>
        <title>Components | Gryt</title>
      </Head>
      <main className='flex columns-2 w-screen h-screen items-center'>
        <Navbar />
        <div
          className={`grid bg-neutral place-items-center h-full gap-12 w-full overflow-y-scroll overflow-x-hidden ${className}`}
          {...props}
        >
          {children}
        </div>
      </main>
    </>
  )
}

export default function Index() {
  return (
    <ComponentsWrapper>
      <div>
        <h1 className='text-2xl font-bold text-primary'>Welcome!</h1>
        <p>
          Use the navigation menu on the left to select a component from the
          Gryt Design System.
        </p>
      </div>
    </ComponentsWrapper>
  )
}
