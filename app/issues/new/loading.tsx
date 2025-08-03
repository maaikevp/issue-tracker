import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Box, Card, Flex, Heading, Text } from '@radix-ui/themes';


const LoadingNewIssuePage = () => {
  return (
    <div>
      <Box className='max-w-xl'>
        <Skeleton />
        <Skeleton height="20rem"/>
      </Box>  
    </div>
  )
}

export default LoadingNewIssuePage
