import { IssueStatusBadge } from '@/app/components'
import { Issue } from '@prisma/client'
import { Heading, Flex, Card, Text, Container } from '@radix-ui/themes'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const IssueDetails = ({issue}: {issue: Issue})   => {
  return (
    <Container size="4" px="5"> 
    <>     
      <Heading >{issue.title}</Heading>
        <Flex className='my-3' gap='3' >
        <IssueStatusBadge status={issue.status}/>
        <Text className='mt-3'>{issue.createdAt.toDateString()}</Text>   
        </Flex >     
        <Card className='prose' mt='4'>
        <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>        
    </>
    </Container>
  )
}

export default IssueDetails
