'use client'

import { Box } from '@radix-ui/themes';
import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { GiTigerHead } from "react-icons/gi";


const NavBar = () => {
  const currentPath = usePathname();
  const {status, data: session} =useSession();

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
                           <li key={link.href}>    
                        <Link  
                          className={classNames({
              'text-zinc-900': link.href === currentPath,
              'text-zinc-500': link.href !== currentPath,
              'hover:text-zinc-800 transition-colors': true
            })} 
                          href={link.href}>
                          {link.label}
                        </Link>  
                        </li>                   
                ))}                
            </ul>
        <Box>
        {status === "authenticated" && (
          <Link href="/api/auth/signout">Log out</Link>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </Box>
        </nav>
    </div>
  )
}

export default NavBar
