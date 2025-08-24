import { Pencil2Icon } from '@radix-ui/react-icons'
import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const EditIssueButton = ({ issueID }: {issueID: number }) => {
  return (
    <div>
      <Button className="block-look items-align-center" >
        <Flex direction="row" align="center" gap="2">
          <Pencil2Icon />
          <Link href={`/issues/${issueID}/edit`}>Edit issue</Link>          
        </Flex>
          </Button>
    </div>
  )
}

export default EditIssueButton
