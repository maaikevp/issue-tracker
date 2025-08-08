import dynamic from 'next/dynamic'
import IssueFormSkeleton from './loading'
import delay from 'delay';


const IssueForm = dynamic(
  () => import('@/app/issues/_components/IssueForm'),
  {  ssr: !!false,
    loading: () => <IssueFormSkeleton />
  }
);

  await delay(3000);

const NewIssuePage = () => {
  return (
    <div>
      <IssueForm />
    </div>
  )
}

export default NewIssuePage
