
import { prisma } from '@/prisma/client';
import { Issue, Status } from '@prisma/client';
import { Container, Flex } from '@radix-ui/themes';
import Pagination from '../components/Pagination';
import IssueActions from './IssueActions';
import IssueTable, { columnNames, IssueQuery } from './IssueTable';
import { Metadata } from 'next';


interface Props {
  searchParams: Promise<IssueQuery>}

  
type SearchParams = Promise<{ status: Status, orderBy: keyof Issue, page: string }>;


export default async function IssuesPage (props: Props) {
  const searchParams = await props.searchParams;
  const statuses = Object.values(Status);

  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;
  const where = { status } ;

  const orderBy = columnNames
    .includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: 'asc' }
    : undefined; 

  const page  = parseInt(searchParams.page) || 1;
  const pageSize = 10;


  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize
  });

  const issueCount = await prisma.issue.count({where})

  // await delay(3000);

  // const status = searchParams.get('status')


  return (
    
    <Flex direction="column" gap="3" className="mt-5"> 
      <Container size="4"> 
        <IssueActions />    
        <IssueTable searchParams={searchParams} issues={issues} />     
            <Pagination
            pageSize={pageSize}
            currentPage={page}
            itemCount={issueCount}/>
      </Container>
    </Flex>
  )
}

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
      title: "Issue Tracker - Issues",
      description: "View all project issues"
     }

// export default IssuesPage
