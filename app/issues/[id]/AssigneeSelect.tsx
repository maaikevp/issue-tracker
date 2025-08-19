'use client'


import { Flex, Select } from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import { Issue, User } from '@prisma/client';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import error from 'next/error';
import Skeleton from 'react-loading-skeleton';
import toast, { Toaster } from "react-hot-toast";

const AssigneeSelect = ({issue}: {issue: Issue}) => {


    const {data: users, error, isLoading } = useUsers();

    if (error) return null;      

    const [assigneeField, setAssigneeField] = useState(issue.assignedToUserId || "Unassigned")

    if(isLoading) return <Skeleton width="180px"/>;
  


    
    const assignIssue= async (userId: any) => {
          await axios.patch('/api/issues/'+ issue.id, {
          assignedToUserId: userId === 'Unassigned' ? null : userId,
          })
          .catch(() => { toast.error("Changes could not be saved") })
          setAssigneeField(userId)
          }

  return (
    <>
    <div className="block-look" >
    <Flex className="block-look" width="180px">   
      <Select.Root
          value={assigneeField}
          onValueChange={assignIssue}>
        <Select.Trigger placeholder="Assign..." />
        <Select.Content>
            <Select.Group>
                <Select.Label>Suggestions</Select.Label>
                <Select.Item value="Unassigned">Unassigned</Select.Item>
                {users?.map(user =>  (
                <Select.Item key={user.id} 
                    value={user.id}>{user.name}</Select.Item> )) }                    
            </Select.Group>            
        </Select.Content>
    </Select.Root>
    <Toaster/>
    </Flex> 
    </div>
    </>
  
);
};

    const useUsers = () =>
      useQuery<User[]>({
        queryKey: ["users"],
        queryFn: () =>
          axios.get("/api/users").then((res) => res.data),
        staleTime: 60 * 1000, //60s
        retry: 3,
      });


export default AssigneeSelect
