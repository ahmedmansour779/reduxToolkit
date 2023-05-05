import { Button, Flex, Group, Text, Title } from '@mantine/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './create slice/CreateSlice';
function Counter() {

  const globalState = useSelector((state) => state)
  const dispatch = useDispatch();

  return (
    <div>
      <Flex
        mih={50}
        miw={20}
        gap="xl"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <Title
          variant="gradient"
          gradient={{ from: 'blue', to: 'red', deg: 45 }}
          order={1}
          size="3rem">hello Redux Basic</Title>
        <>
          <Text size={"2rem"}>counter : {globalState.value}</Text>
          <Flex
            mih={50}
            gap="xl"
            justify="center"
            direction="column"
            wrap="wrap"
          >
            <Group
              position="center"
              spacing="xl">
              <Button
                radius="md"
                size="md"
                uppercase
                variant="outline"
                onClick={() => dispatch(increase(5))}
              >increase</Button>
              <Button
                color="red"
                radius="md"
                size="md"
                uppercase
                variant="outline"
                onClick={() => dispatch(decrease())}>decrease</Button>
            </Group>
            <Button
              variant="outline"
              radius="xl"
              size="xl"
              uppercase> Hide/Show Counter  Number </Button>
          </Flex>
        </>
      </Flex>
    </div >
  )
}

export default Counter