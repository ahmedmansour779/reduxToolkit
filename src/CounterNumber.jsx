import { Button, Group } from '@mantine/core';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { decrease, increase } from './create slice/counterSlice';

function CounterNumber() {
    const dispatch = useDispatch();

    const counterHandler = useCallback((type, value) => {
        if (type === "increase") {
            dispatch(increase(value))
        } else if (type === "decrease") {
            dispatch(decrease(value))
        }
    }, [dispatch])

    //? to make after render increase to state +1
    // useEffect(() => {
    //     counterHandler("increase", 1)
    // }, [counterHandler])

    return (
        <>
            <Group
                position="center"
                spacing="xl">
                <Button
                    radius="md"
                    size="md"
                    uppercase
                    variant="outline"
                    onClick={() => counterHandler("increase", 5)}>increase</Button>
                <Button
                    color="red"
                    radius="md"
                    size="md"
                    uppercase
                    variant="outline"
                    onClick={() => dispatch(decrease())}>decrease</Button>
            </Group>
        </>
    )
}

export default CounterNumber