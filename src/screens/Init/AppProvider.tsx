import { View, Text, Button, ScrollView } from 'react-native'
import React from 'react'
import { authCredential } from '@store/features/auth/selector'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { signIn } from '@store/features/auth'
import { AuthenticationType, UserType } from '@schema/User'
import Onboarding from './Onboarding'
import BottomTabs from '@components/BottomTabs'
import TopBar from '@components/TopBar'
// import { AuthenticationType, UserType } from '@types/User'

const AppProvider = () => {
    // const dispatch = useAppDispatch()
    // const credential = useAppSelector(authCredential)
    // console.log('credential', credential)
    // const isLoggedIn = credential.accessToken !== ''
    // const onPress = () => {
    //     dispatch(
    //         signIn({
    //             credential: {
    //                 accessToken: 'accessToken',
    //                 refreshToken: 'refreshToken',
    //                 userType: UserType.CLIENT,
    //                 username: 'username',
    //                 password: 'password',
    //                 authenticationType: AuthenticationType.PASSWORD,
    //                 _id: 'id',
    //             },
    //         })
    //     )
    // }
    return (
        <View
            style={{
                minHeight: '100%',
            }}
        >
            <TopBar />
            <BottomTabs />
        </View>
    )
}

export default AppProvider
