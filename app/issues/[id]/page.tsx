
import { prisma } from '@/prisma/client';
import { notFound } from 'next/navigation';
import React from 'react'
import { Box, Button, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import ReactMarkdown from 'react-markdown';
import delay from 'delay';
import { IssueStatusBadge } from '@/app/components';
import { Pencil2Icon } from '@radix-ui/react-icons';
import Link from 'next/link';



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
      <Grid columns={{ initial:"1", md: "2" }} gap='4'>
      <Box>
        <Heading >{issue.title}</Heading>
        <Flex className='my-3' gap='3' >
        <IssueStatusBadge status={issue.status}/>
        <Text className='mt-3'>{issue.createdAt.toDateString()}</Text>   
        </Flex >     
        <Card className='prose' mt='4'>
        <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>    
      </Box>
      <Box>
        <Button>
          <Pencil2Icon/>
          <Link href={`/issues/${issue.id}/edit`}>Edit issue</Link>          
          </Button>
      </Box>
      </Grid>
      
    </div>
  )
}

export default IssueDetailPage



