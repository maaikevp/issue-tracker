import { IssueStatusBadge } from '@/app/components'
import { Issue } from '@prisma/client'
import { Card, Container, Flex, Heading, Text } from '@radix-ui/themes'
import { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'

interface Props {
  params: { id: string };
}



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

export const metadata: Metadata = {
      title: "Issue Tracker - Issue details",
      description: "Issue details"
     }



// export async function generateMetadata({ params }: Props) {
//   const issue = await prisma.issue.findUnique({ where: { id: parseInt(params.id) }});

//   const metadata: Metadata = {
//     title: issue?.title,
//     description: 'Details of issue ' + issue?.id
//   }
// console.log("Generated Metadata:", metadata); // Debugging
//   return metadata;
// }





