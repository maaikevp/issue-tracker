import { Pencil2Icon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const EditIssueButton = ({ issueID }: {issueID: number }) => {
  return (
    <div>
      <Button>
          <Pencil2Icon/>
          <Link href={`/issues/${issueID}/edit`}>Edit issue</Link>          
          </Button>
    </div>
  )
}

export default EditIssueButton
