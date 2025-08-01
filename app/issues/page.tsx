import { prisma } from '@/prisma/client';
import { Button, Table } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import IssueStatusBadge from '../components/IssueStatusBadge';
import delay from 'delay';
import IssueActions from './IssueActions';

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(3000);

  return (
    
    <div>  
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
          <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
         <div className='block md:hidden'><IssueStatusBadge status={issue.status}/></div></Table.Cell>		
			<Table.Cell className='hidden sm:table-cell'><IssueStatusBadge status={issue.status}/></Table.Cell>
			<Table.Cell className='hidden sm:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
		</Table.Row>
    ))}
    </Table.Body>
    </Table.Root>
    </div>
  )
}

export default IssuesPage
