import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { RootState } from '@store/index'
import { increment } from '@store/features/test'
const Home = (): JSX.Element => {
    const value = useAppSelector((state: RootState) => state.test.value)
    const payload: number = 10
    const dispatch = useAppDispatch()
    const onPress = () => {
        dispatch(
            increment({
                value: payload,
            })
        )
    }
    return (
        <View>
            <Text>Home</Text>
            <Button title={value.toString()} onPress={onPress} />
        </View>
    )
}

export default Home
