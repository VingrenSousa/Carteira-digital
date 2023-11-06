
import {RFValue} from 'react-native-responsive-fontsize'
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold
} from "@expo-google-fonts/poppins"

import { StyleSheet } from "react-native";
export const style=StyleSheet.create({
    button:{
        width:RFValue(130),
        height:RFValue(60),
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:RFValue(10),
        flexDirection:'row',
        marginBottom:RFValue(16),
        elevation:20,
        backgroundColor:'#fff',

        shadowColor:'#000',
        shadowOffset:{
            height:3,
            width:1
        },
        shadowRadius:5,
        shadowOpacity:0.4
      

    },
    title:{
        fontSize: RFValue(17),
        marginLeft:  RFValue(10),
        fontFamily:'Poppins_300Light',


    },
    Image:{
        width:RFValue(25),
        height:RFValue(25)
    }
})