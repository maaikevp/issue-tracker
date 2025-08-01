'use client'

import classNames from 'classnames';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { GiTigerHead } from "react-icons/gi";


const NavBar = () => {
  const currentPath = usePathname();

  const links= [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" }
  ]
  
  return (
    <div>
        <nav className="flex space-x-6 border-b mb-5 h-14 px-5 items-center">
            <Link href="/"><GiTigerHead /></Link>
            <ul className="flex space-x-6">
                {links.map((link) => (                    
                        <Link key={link.href} 
                          className={classNames({
              'text-zinc-900': link.href === currentPath,
              'text-zinc-500': link.href !== currentPath,
              'hover:text-zinc-800 transition-colors': true
            })} 
                          href={link.href}>
                          {link.label}
                        </Link>                    
                ))}
                
            </ul>
        </nav>
    </div>
  )
}

export default NavBar
