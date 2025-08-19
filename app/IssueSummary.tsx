import { Status } from '@prisma/client'
import { Card, Flex, Link, Text } from '@radix-ui/themes'
import { Label } from '@radix-ui/themes/components/context-menu'
import { Sniglet } from 'next/font/google'
import React from 'react'
import { string, number } from 'zod'

interface Props {
    open: number,
    inProgress: number,
    closed: number, 
}

const IssueSummary = ({open, inProgress, closed}: Props) => {
    const containers :
    {   label: string,
        value: number, 
        status: Status}[] =  [
        { label: 'Open issues', value: open, status: 'OPEN' },
        { label: 'In Progress issues', value: inProgress, status: 'IN_PROGRESS' },
        { label: 'Closed issues', value: closed, status: 'CLOSED' },
    ]

    
  return (
    <Flex gap="4">
        {containers.map((container) => (
        <Card key={container.label}>            
            <Flex direction="column">
                <Link href={`/issues?status=${container.status}`}>{container.label}</Link>
                <Text >{container.value}</Text>
            </Flex>
        </Card>))}
     </Flex>
  );
};

export default IssueSummary
