'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { useFormStatus } from 'react-dom';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SimpleMDEClient = dynamic(() => import('react-simplemde-editor'), {
  ssr: false
})

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  
  const {register, control, handleSubmit} = useForm<IssueForm>();

  return (
    <form 
    className='max-w-xl space-y-3'  
    onSubmit={handleSubmit(async(data) => {
      axios.post('/api/issues', data);
      router.push('/issues')
    })}>
      <TextField.Root placeholder="Title" {...register('title')}/>	
      <Controller       
        name="description"
        control={control}
        render={({field}) =><SimpleMDE placeholder='Description' {...field}/>  } 
      />    
        <Button size="3">Submit new Issue</Button>         

    </form>
  )
}

export default NewIssuePage
