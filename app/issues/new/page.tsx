'use client'
import { Button, Callout, Text, TextField } from '@radix-ui/themes'
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { useFormStatus } from 'react-dom';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';


type IssueForm = z.infer<typeof createIssueSchema>;

const SimpleMDEClient = dynamic(() => import('react-simplemde-editor'), {
  ssr: false
})


const NewIssuePage = () => {

  const router = useRouter();  
  const {register, control, handleSubmit, formState: {errors}} = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  });
  const [error, setError] = useState ('');
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit= handleSubmit(async (data) => {
          try {
            setSubmitting(true);
            await axios.post('/api/issues', data)
            router.push('/issues');
          } catch (error) {
            setSubmitting(false);
            setError('An unexpected error occurred.');
          }
        });


  return (
<div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className='mb-5'>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={onSubmit}
      >
        <TextField.Root placeholder="Title" {...register('title')}/>
        {<ErrorMessage>{errors.title?.message}</ErrorMessage>}        
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDEClient placeholder="Description" {...field} />
          )}
        />
         {<ErrorMessage>{errors.description?.message}</ErrorMessage>}           
        <Button disabled={isSubmitting}>Submit New Issue {isSubmitting && <Spinner/>}</Button>
      </form>
    </div>
  );
};


 

export default NewIssuePage
