import { Button, Flex, Text, Title } from '@mantine/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CounterNumber from './CounterNumber';
import { logIn, logout, toggleLog } from './create slice/authSlice';

function Counter() {
  const globalState = useSelector((state) => state)
  const dispatch = useDispatch();

  const isLoggedIn = () => {
    return globalState.auth.isLoggedIn
  }

  const handelButton = () => {
    if (isLoggedIn()) {
      return dispatch(logout(0))
    } else {
      dispatch(logIn())
    }
  }

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
        {isLoggedIn() && (
          <>
            <Text size={"2rem"}>counter : {globalState.counter.value}</Text>
            <Flex
              mih={50}
              gap="xl"
              justify="center"
              direction="column"
              wrap="wrap"
            >
              <CounterNumber />
              <hr />
              <Button
                variant="outline"
                radius="xl"
                size="xl"
                onClick={() => handelButton()}
                uppercase>{isLoggedIn() ? "logOut" : "login"}</Button>
              <Flex
                mih={50}
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
              >
                <Button
                  radius="md"
                  size="md"
                  uppercase
                  variant="outline"
                  onClick={() => dispatch(logIn())}>login</Button>
                <Button
                  color="red"
                  radius="md"
                  size="md"
                  uppercase
                  variant="outline"
                  onClick={() => dispatch(logout(0))}>logOut</Button>
                <Button
                  color="red"
                  radius="md"
                  size="md"
                  uppercase
                  variant="outline"
                  onClick={() => dispatch(toggleLog())}>toggleLog</Button>
              </Flex>
            </Flex>
          </>
        )}
        {isLoggedIn() ? null : (
          <Button
            variant="outline"
            radius="xl"
            size="xl"
            onClick={() => dispatch(toggleLog())}
            uppercase>{isLoggedIn() ? "logout" : "login"}</Button>
        )}

      </Flex>
    </div >
  )
}

export default Counter