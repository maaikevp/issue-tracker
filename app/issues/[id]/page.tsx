
import EditIssueButton from '@/app/issues/[id]/EditIssueButton';
import { prisma } from '@/prisma/client';
import { Box, Grid } from '@radix-ui/themes';
import delay from 'delay';
import { notFound } from 'next/navigation';
import IssueDetails from './IssueDetails';
import DeleteIssueButton from './DeleteIssueButton';


interface Props {
  params: { id: string }
}

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id)}
  });

  if (!issue)
    notFound();

  await delay(3000);


  return (
    <div>
      <Grid columns={{ initial:"1", md: "2" }} gap='4'>
      <Box>
        <IssueDetails issue={issue}/>
      </Box>  
      <Box>
        <EditIssueButton issueID={issue.id}/>
      </Box>
      <Box>
        <DeleteIssueButton issueID={issue.id}/>
      </Box>
      </Grid>
      
    </div>
  )
}

export default EditIssuePage



