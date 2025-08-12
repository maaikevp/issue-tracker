
'use client'
import { AlertDialog, Button, Flex, Spinner } from '@radix-ui/themes'
import axios from 'axios'
// import { Router } from 'next/router'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Router from 'next/router'


const DeleteIssueButton = ({ issueID }: {issueID: number }) => {
	const router = useRouter();
	const [error, setError] = useState(false);
	const [isDeleting, setDeleting] = useState(false);

  const deleteIssue = async () => {
    try {
		// throw new Error();
		setDeleting(true)
      await axios.delete('/api/issues/' + issueID);
      router.push('/issues');
      router.refresh();
    } catch (error) {
		setDeleting(false);
      	setError(true);
    }
  };
	

  return (
	<>   
      <AlertDialog.Root>
	    <AlertDialog.Trigger>
		<Button color="red" disabled={isDeleting} className="block"
	>Delete Issue
	{isDeleting && <Spinner/>}
	</Button>
	</AlertDialog.Trigger>
	<AlertDialog.Content maxWidth="450px">
		<AlertDialog.Title>Confirm deletion</AlertDialog.Title>
		<AlertDialog.Description size="2">
			Are you sure  you want to delete this issue? This action cannot be undone.
		</AlertDialog.Description>
		<Flex gap="3" mt="4" justify="end">
			<AlertDialog.Cancel>
				<Button variant="soft" color="gray" >
					Cancel
				</Button>
			</AlertDialog.Cancel>
			<AlertDialog.Action>
				<Button variant="solid" color="red" onClick={deleteIssue} >
					Delete Issue					
				</Button>
			</AlertDialog.Action>
		</Flex>
	</AlertDialog.Content>
</AlertDialog.Root>
<AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            This issue could not be deleted.
          </AlertDialog.Description>
          <Button
            color="gray"
            variant="soft"
            mt="2"
            onClick={() => setError(false)}
          >
            OK
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    
	</>
  )
}


export default DeleteIssueButton
