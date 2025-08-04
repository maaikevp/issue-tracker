import React from 'react'
import { Box, Card, Flex, Heading, Text } from '@radix-ui/themes';
import ReactMarkdown from 'react-markdown';
import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import { Skeleton } from '@/app/components';




const LoadingIssueDetailPage = () => {


  return (
    <Box className='max-w-xl'>
     <Skeleton/>
        <Flex className='my-3' gap='3'>
        <Skeleton width="5rem"/>
        <Skeleton width="8rem"/>
        </Flex >     
        <Card className='prose' mt='4'>
        <Skeleton count={3}/>
        </Card>    
    </Box>
  )
}

export default LoadingIssueDetailPage
