'use client'

import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl'>
      <TextField.Root placeholder="Title"/>	
      <TextArea placeholder='Description' className='my-3' rows={5} />  
        <Button size="3">Submit new Issue</Button>         

    </div>
  )
}

export default NewIssuePage
