import { Table } from '@radix-ui/themes'
import React from 'react'
import IssueStatusBadge from '../components/IssueStatusBadge'
import { Skeleton } from '@/app/components';
import IssueActions from './IssueActions'



const LoadingIssuesPage = () => {
     const issues = [1,2,3,4,5];

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
      <Table.Row key={issue}>
        <Table.Cell >{issue}<div className='block md:hidden'><Skeleton/></div></Table.Cell>		
			<Table.Cell className='hidden sm:table-cell'><Skeleton/></Table.Cell>
			<Table.Cell className='hidden sm:table-cell'><Skeleton/></Table.Cell>
		</Table.Row>
    ))}
    </Table.Body>
    </Table.Root>
 </div>
  )
}

export default LoadingIssuesPage
