
'use client' 


import React from 'react'
import { BarChart, Bar, XAxis, YAxis } from 'recharts';


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
      
  <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="label"  />
    <YAxis />
    <Bar dataKey="value" barSize={30}  fill="#c6d884"></Bar>      
  </BarChart>
  
  )
}




export default IssueChart
