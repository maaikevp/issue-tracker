
import EditIssueButton from '@/app/issues/[id]/EditIssueButton';
import { prisma } from '@/prisma/client';
import { Box, Flex, Grid } from '@radix-ui/themes';
import delay from 'delay';
import { notFound } from 'next/navigation';
import IssueDetails from './IssueDetails';
import DeleteIssueButton from './DeleteIssueButton';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/auth/authOptions';


interface Props {
  params: { id: string }
}

const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id)}
  });

  if (!issue)
    notFound();

  await delay(3000);


  return (
    <div>
      <Grid columns={{ initial:"1", sm: "5" }} gap='5'>
      <Box className='md:col-span-4'>
        <IssueDetails issue={issue}/>
      </Box>  
      {session && (
        <Box>
          <Flex direction='column' gap='3'>
          <Box width="180px" ><EditIssueButton issueID={issue.id}/></Box>      
          <Box width="180px" ><DeleteIssueButton  issueID={issue.id} /></Box>
        </Flex>
      </Box>
    )}
      </Grid>
      
    </div>
  )
}

export default IssueDetailPage



