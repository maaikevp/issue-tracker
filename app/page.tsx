import { prisma } from "@/prisma/client";
import { Flex, Grid } from "@radix-ui/themes";
import { Metadata } from "next";
import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";


export default async function Home() {      
  // await prisma.$connect();
    const open_issue = await prisma.issue.count({ 
      where: { status: 'OPEN' }, })   ; 

    const inProgress_issue = await prisma.issue.count({ 
      where: { status: 'IN_PROGRESS' }, });    

    const closed_issue = await prisma.issue.count({ 
      where: { status: 'CLOSED' }, });

      
    return (    
    <Grid columns={{ initial: '1',  md: '2' }} gap='5'>
    <Flex direction="column">
      <IssueSummary open_issue={open_issue} inProgress_issue={inProgress_issue} closed_issue={closed_issue} />         
      <IssueChart open_issue={open_issue} inProgress_issue={inProgress_issue} closed_issue={closed_issue} />
    </Flex>
      <LatestIssues />      
    </Grid>

      )
   
  }

    export const metadata: Metadata = {
      title: "Issue Tracker - Dashboard",
      description: "View a summary of project issues"
     }

    //  export const fetchCache = 'no-store';

     // console.log("Fetched issues:", open, inProgress, closed);


         
  const groupStatus = await prisma.issue.groupBy({
    by: ["status"],
    _count: {
      status: true
    }
  });

    // console.log("result:", groupStatus) 
     
    export const dynamic = 'force-dynamic';