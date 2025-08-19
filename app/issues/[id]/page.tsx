
import EditIssueButton from '@/app/issues/[id]/EditIssueButton';
import { prisma } from '@/prisma/client';
import { Box, Flex, Grid } from '@radix-ui/themes';
import delay from 'delay';
import { notFound } from 'next/navigation';
import IssueDetails from './IssueDetails';
import DeleteIssueButton from './DeleteIssueButton';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/auth/authOptions';
import AssigneeSelect from './AssigneeSelect';
import React from 'react';
import { cache } from 'react';
import { Metadata } from 'next';


interface Props {
  params: { id: string }
}

const fetchUser = cache((issueId: number) => prisma.issue.findUnique({ where: { id: issueId }}));


const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);

  const issue = await fetchUser(parseInt(params.id));


  if (!params?.id || isNaN(Number(params.id))) {
    throw new Error("Invalid or missing issue ID");}

  const { id } = await params;

  console.log("IssueDetailPage params", params);

  
  if (!issue)
    notFound();

  // await delay(3000);


  return (
    <div>
      <Grid columns={{ initial: '1', sm: '5' }} gap="2">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue}/>
      </Box>  
      {session && (
        <Box className="align-content-stretch">
          <Flex direction="column" gap="4" className="flex-grow:true">
          <AssigneeSelect issue={issue}/>
          <EditIssueButton issueID={issue.id}/>  
          <DeleteIssueButton  issueID={issue.id} />
        </Flex>
      </Box>
    )}
      </Grid>      
    </div>
  );
};

export async function generateMetadata({ params }: Props) {
  const issue = await fetchUser(parseInt(params.id));

  return {
    title: issue?.title,
    description: 'Details of issue ' + issue?.id
  }
}

export default IssueDetailPage




// const resolvedParams:  { id: string } = React.use(params);

  // const issue = await prisma.issue.findUnique({
  //   where: {
  //     id : parseInt( await params.id)}
  // });

  // params: Promise<{ id: string }>;