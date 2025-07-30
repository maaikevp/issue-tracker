'use client'

import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


const NewIssuePage = () => {
  return (
    <div className='max-w-xl'>
      <TextField.Root placeholder="Title"/>	
      <SimpleMDE placeholder='Description' className='py-5'/>   
      {/* <TextArea placeholder='Description' className='my-3' rows={5} />   */}
        <Button size="3">Submit new Issue</Button>         

    </div>
  )
}

export default NewIssuePage
