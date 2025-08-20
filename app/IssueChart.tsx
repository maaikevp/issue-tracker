
'use client' 


import { Card } from '@radix-ui/themes';
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';


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
    </Card>
  );
};


  




export default IssueChart
