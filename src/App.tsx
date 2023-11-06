import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display"
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans"
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold
} from "@expo-google-fonts/poppins"
import COLORS from "./styles/theme"
import { StatusBar } from 'expo-status-bar';



import { Login } from './screns/login/login';



const App: React.FC = () => {

    const [fontsLoand] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSerifDisplay_400Regular,
        DMSans_400Regular

    })
    if (!fontsLoand) {
        return <AppLoading />
    }

    return (
        <ThemeProvider theme={COLORS}>
            <GestureHandlerRootView style={{flex:1}}>
                <StatusBar
                    style='dark'
                    translucent
                    backgroundColor='transparent'
                />
                <Login/>
            </GestureHandlerRootView>
        </ThemeProvider>
    )


}
export default App
