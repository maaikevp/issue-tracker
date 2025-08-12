'use client'


import { Flex, Select } from '@radix-ui/themes'
import React from 'react'
import classnames from "classnames";

const AssigneeSelect = () => {
  return (
    <div className="block">
    <Flex className="block" maxWidth="100%" asChild>   
      <Select.Root >
        <Select.Trigger placeholder="Assign..." />
        <Select.Content>
            <Select.Group>
                <Select.Label>Suggestions</Select.Label>
                <Select.Item value="orange">Orange</Select.Item>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="grape" disabled>
                    Grape
                </Select.Item>
            </Select.Group>
            <Select.Separator />
            <Select.Group>
                <Select.Label>Vegetables</Select.Label>
                <Select.Item value="carrot">Carrot</Select.Item>
                <Select.Item value="potato">Potato</Select.Item>
            </Select.Group>
        </Select.Content>
    </Select.Root>
    </Flex> 
    </div>
  )
}

export default AssigneeSelect
