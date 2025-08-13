 'use client'

import {QueryClient, QueryClientProvider as ReactQueryPClientrovider} from '@tanstack/react-query'
import React, { PropsWithChildren } from 'react'

const queryClient = new QueryClient()

const QueryClientProvider = ({children}: PropsWithChildren) => {
  return (
    <div>
      <ReactQueryPClientrovider client={queryClient}>
        {children}  
        </ReactQueryPClientrovider>
    </div>
  )
}

export default QueryClientProvider
