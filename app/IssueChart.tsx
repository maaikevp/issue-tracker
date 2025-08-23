
'use client' 

import { Button, Card, Flex } from '@radix-ui/themes';
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useRouter } from 'next/navigation'


interface Props {
    open: number,
    inProgress: number,
    closed: number, 
}

const IssueChart = ({open, inProgress, closed}: Props) => {
    const data =[
        { label: 'Open', value: open, },
        { label: 'In Progress', value: inProgress,  },
        { label:'Closed', value: closed },
    ]
    const router = useRouter();
    // router.refresh();
    const handleReload = () => {
    router.refresh(); }

  return (   
    
    <Card>
      <ResponsiveContainer width="100%" height={300} >
      <BarChart  data={data} >
      <XAxis dataKey="label" className='text-xs' />
      {/* <YAxis label="Issues"/> */}
      <YAxis  label={{ value: 'Issues', angle: -90, position: 'insideLeft' }} />
      <Bar dataKey="value" barSize={30}  fill="#c6d884" ></Bar>      
      </BarChart>            
      </ResponsiveContainer>
      <Button onClick={handleReload}>Refresh Page</Button> 
    </Card>
  );
};


  




export default IssueChart
