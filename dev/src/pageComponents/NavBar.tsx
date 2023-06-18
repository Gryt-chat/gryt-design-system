'use client'
import { useEffect, useState } from 'react'
import navbarData from '../navbar.json'
import { GenerateMenu } from '@/utils/GenerateMenu'
import Link from 'next/link'

export function NavBar() {
  const [menuItems, setmenuItems] = useState(GenerateMenu(navbarData))
  useEffect(() => {
    setmenuItems(GenerateMenu(navbarData))
  }, [])

  return (
    <nav className='fixed inset-0 right-auto w-96 bg-base-300 pt-12 flex flex-col items-center'>
      <div className='flex flex-col gap-6 items-start'>
        <Link href='/'>
          <h2 className='font-bold text-xl text-primary'>Gryt UI</h2>
        </Link>
        {menuItems}
      </div>
    </nav>
  )
}
