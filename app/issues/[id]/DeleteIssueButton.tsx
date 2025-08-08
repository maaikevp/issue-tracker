
'use client'
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import axios from 'axios'
// import { Router } from 'next/router'
import React from 'react'
import { useRouter } from 'next/navigation'
import Router from 'next/router'


const DeleteIssueButton = ({ issueID }: {issueID: number }) => {
	const router = useRouter();
  return (
    <div>
      <AlertDialog.Root>
	    <AlertDialog.Trigger>
		<Button color="red" onClick={async() => {
		await axios.delete('/api/issues/' + issueID);
		router.push('/issues');
		router.refresh()
  		}}>Delete Issue</Button>
	</AlertDialog.Trigger>
	<AlertDialog.Content maxWidth="450px">
		<AlertDialog.Title>Confirm deletion</AlertDialog.Title>
		<AlertDialog.Description size="2">
			Are you sure  you want to delete this issue? This action cannot be undone.
		</AlertDialog.Description>
		<Flex gap="3" mt="4" justify="end">
			<AlertDialog.Cancel>
				<Button variant="soft" color="gray">
					Cancel
				</Button>
			</AlertDialog.Cancel>
			<AlertDialog.Action>
				<Button variant="solid" color="red">
					Delete Issue
				</Button>
			</AlertDialog.Action>
		</Flex>
	</AlertDialog.Content>
</AlertDialog.Root>
    </div>
  )
}

export default DeleteIssueButton
