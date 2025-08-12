'use client'


import { Flex, Select } from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import classnames from "classnames";
import { User } from '@prisma/client';
import axios from 'axios';

const AssigneeSelect = () => {
      const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const {data} = await axios.get<User[]>('/api/users');
      setUsers(data);
    }

    fetchUsers();
  }, [])

  return (
    <div className="block">
    <Flex className="block" maxWidth="100%" asChild>   
      <Select.Root >
        <Select.Trigger placeholder="Assign..." />
        <Select.Content>
            <Select.Group>
                <Select.Label>Suggestions</Select.Label>
                {users.map(user => (
                    <Select.Item key={user.id} 
                    value={user.id}>{user.name}</Select.Item> )) }     
            </Select.Group>
            {/* <Select.Separator />
            <Select.Group>
                <Select.Label>Vegetables</Select.Label>
                <Select.Item value="carrot">Carrot</Select.Item>
                <Select.Item value="potato">Potato</Select.Item>
            </Select.Group> */}
        </Select.Content>
    </Select.Root>
    </Flex> 
    </div>
  )
}

export default AssigneeSelect
