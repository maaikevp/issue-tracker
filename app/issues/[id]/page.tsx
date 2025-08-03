import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import { prisma } from '@/prisma/client';
import { notFound } from 'next/navigation';
import React from 'react'
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import ReactMarkdown from 'react-markdown';
import delay from 'delay';



interface Props {
  params: { id: string }
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) }
  });

  if (!issue)
    notFound();

  await delay(3000);


  return (
    <div>
        <Heading>{issue.title}</Heading>
        <Flex className='my-3' gap='3' >
        <IssueStatusBadge status={issue.status}/>
        <Text className='mt-3'>{issue.createdAt.toDateString()}</Text>   
        </Flex >     
        <Card className='prose' mt='4'>
        <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>    
      
    </div>
  )
}

export default IssueDetailPage



