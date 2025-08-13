
import React from 'react'
// import IssueForm from '../../_components/IssueForm'
import { prisma } from '@/prisma/client'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic';
import IssueFormSkeleton from './loading';

const IssueForm = dynamic(
  () => import('@/app/issues/_components/IssueForm'),
  { 
    ssr: !!false, 
    loading: () => <IssueFormSkeleton />
  }
);

interface Props {
  params: { id: number }
}

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findFirst({
    where: { id: params.id }
  });

  if (!issue) notFound();

  return (
    <IssueForm issue={issue} />
  )
}

export default EditIssuePage



// import { prisma } from "@/prisma/client";
// // import IssueForm from "../../_components/IssueForm"
// import { notFound } from "next/navigation";
// import dynamic from 'next/dynamic';
// import IssueFormSkeleton from './loading';

// const IssueForm = dynamic(
//   () => import('@/app/issues/_components/IssueForm'),
//   { 
//     ssr: !!false, 
//     loading: () => <IssueFormSkeleton />
//   }
// );


// interface Props {
//     params: { id: number}
// }

// export default async function EditIssuePage({ params }: { params: { id: number } }) {
//   const issue = await prisma.issue.findUnique({
//     where: { id: params.id }
//   });

//   // handle null case
//   if (!issue) return <div>Issue not found</div>;

//   return <IssueForm issue={issue} />;
// }



// const EditIssuePage = async({params}: Props) => {
//     const issue =  await prisma.issue.findUnique({
//         where: {id: parseInt(params.id)}
//     });
    
//     if (!issue) notFound();

//     return( 
//         <IssueForm issue={issue}/>
//     )

// }

// export default EditIssuePage
