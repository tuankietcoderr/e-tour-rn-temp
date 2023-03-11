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
import AppProvider from '@screens/Init/AppProvider'
import { StatusBar, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './src/store'

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
                <AppProvider />
                <StatusBar barStyle={'default'} />
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
