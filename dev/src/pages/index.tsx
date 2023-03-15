import Head from 'next/head'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import React from 'react'

function NavLink({
  children,
  href,
  router
}: {
  children: any
  href: string
  router: NextRouter
}) {
  return (
    <Link
      className={`link link-hover text-sm ${
        router.pathname === href ? 'font-medium text-primary' : ''
      }`}
      href={href}
    >
      {children}
    </Link>
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

      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold'>Input</h2>
        <NavLink href='/components/buttons' router={router}>
          Buttons
        </NavLink>
        <NavLink href='/components/badges' router={router}>
          Badges
        </NavLink>
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold'>Interactive</h2>
        <NavLink href='/components/servercards' router={router}>
          Server cards
        </NavLink>
        <NavLink href='/components/modals' router={router}>
          Modals
        </NavLink>
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold'>User</h2>
        <NavLink href='/components/avatars' router={router}>
          Avatars
        </NavLink>
      </div>
    </nav>
  )
}

export function ComponentsWrapper({ children }: { children?: any }) {
  return (
    <>
      <Head>
        <title>Components | Gryt</title>
      </Head>
      <main className='flex columns-2 w-screen h-screen items-center'>
        <Navbar />
        <div className='grid bg-neutral place-items-center h-full gap-12 p-24 w-full overflow-y-scroll overflow-x-hidden'>
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
