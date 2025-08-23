import { prisma } from "@/prisma/client";
import { Flex, Grid } from "@radix-ui/themes";
import { Metadata } from "next";
import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
// import { revalidatePath } from 'next/cache'



export default async function Home() {     

 
  await prisma.$connect();
    

    const open = await prisma.issue.count({ where: { status: 'OPEN' }, }) 
    {
    cache: 'no-store'} // Ensures no caching

    const inProgress = await prisma.issue.count({ where: { status: 'IN_PROGRESS' } });
    {
    cache: 'no-store'}

    const closed = await prisma.issue.count({ where: { status: 'CLOSED' } });
    {
    cache: 'no-store'}

    // revalidatePath("/") //whatever path you are calling it from

    console.log("Fetched issues:", open, inProgress, closed);

      
    return (
    
    <Grid columns={{ initial: '1',  md: '2' }} gap='5'>
    <Flex direction="column">
      <IssueSummary open={open} inProgress={inProgress} closed={closed} />         
      <IssueChart open={open} inProgress={inProgress} closed={closed} />
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

