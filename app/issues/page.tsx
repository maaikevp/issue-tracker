import { prisma } from '@/prisma/client';
import { Container, Link } from '@radix-ui/themes';
import  IssueActions from './IssueActions';
import { IssueStatusBadge } from '@/app/components';
import { Table } from '@radix-ui/themes';
import { Issue } from '@prisma/client';


const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  // await delay(3000);

  const columns: 
  { label: string;  value: keyof Issue;  className?: string;
  }[] = [
    { label: "Issue", value: "title" },
    { label: "Status", value: "status", className: "hidden md:table-cell",    },
    { label: "Created", value: "createdAt", className: "hidden md:table-cell",  },
  ];

  return (
    
    <div> 
  <Container size="4"> 
    <IssueActions />     
    <Table.Root variant='surface' className='mt-5'>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell >Issue</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map(issue => ( 
        <Table.Row key={issue.id}>
          <Table.Cell >
            <Link href={`/issues/${issue.id}`} >{issue.title}</Link>
          <div className='block md:hidden'><IssueStatusBadge status={issue.status}/></div></Table.Cell>		
        <Table.Cell className='hidden sm:table-cell'><IssueStatusBadge status={issue.status}/></Table.Cell>
        <Table.Cell className='hidden sm:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
      </Table.Row>
        ))}
        </Table.Body>
        </Table.Root>
     </Container>
    </div>
  )
}

export const dynamic = 'force-dynamic';

export default IssuesPage
