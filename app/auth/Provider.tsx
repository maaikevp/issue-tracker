'use client'

import { SessionProvider } from "next-auth/react"
import { Session } from 'inspector/promises'
import { SessionProviderProps } from 'next-auth/react'
import React, { PropsWithChildren } from 'react'

const Authprovider = ({ children }: PropsWithChildren) => {
  return (    
      <SessionProvider>{children}</SessionProvider>
  )
}

export default Authprovider
