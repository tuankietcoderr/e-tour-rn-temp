import { AppColors } from '@assets/themes/colors'
import {
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
    useFonts,
} from '@expo-google-fonts/manrope'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import History from '@screens/History'
import Home from '@screens/Home'
import AppProvider from '@screens/Init/AppProvider'
import Onboarding from '@screens/Init/Onboarding'
import Signin from '@screens/Init/Signin'
import SignUp from '@screens/Init/Signup'
import NextSignUp from '@screens/Init/Signup/next'
import { StatusBar, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './src/store'

const Stack = createNativeStackNavigator()
export default function App() {
    const [fontsLoaded] = useFonts({
        Manrope_200ExtraLight,
        Manrope_300Light,
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_700Bold,
        Manrope_800ExtraBold,
    })

    if (!fontsLoaded) {
        return null
    } else {
        console.log('fontsLoaded')
    }
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Onboarding"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Onboarding" component={Onboarding} />
                    <Stack.Screen name="Signin" component={Signin} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="AppProvider" component={AppProvider} />
                    <Stack.Screen name="History" component={History} />
                    <Stack.Group screenOptions={{ presentation: 'modal' }}>
                        <Stack.Screen name="Signup" component={SignUp} />
                        <Stack.Screen name="NextSignup" component={NextSignUp} />
                    </Stack.Group>
                </Stack.Navigator>
                <StatusBar barStyle={'default'} animated backgroundColor={AppColors.primary} />
            </NavigationContainer>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
