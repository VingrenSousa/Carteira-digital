import { style } from './styled'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import {  View,Text} from 'react-native';
import { RectButton,RectButtonProps } from 'react-native-gesture-handler';
import { DefaultTheme } from 'styled-components/native';
import { ThemeConsumer } from 'styled-components';
import theme from '@src/styles/theme';


interface Props extends RectButtonProps{
    title:string
    icone:React.ComponentProps<typeof AntDesign>['name']
    iconeColor?:React.ComponentProps<typeof AntDesign>['color']
    color?:string
}

 const ButtonSocial=({title,icone,iconeColor,color,...rest}:Props)=>{
    const[colorIcone,setColorIcoone]=useState(iconeColor?iconeColor:'rgb(255, 255, 255)')
    const[colorBack,setColor]=useState(color?color:'#4368c7',)
    return(
        <RectButton 
        {...rest}
        style={[style.button,{backgroundColor:colorBack}]}>
            <View style={{elevation:20}}>
                <AntDesign name={icone} size={24} color={colorIcone}/>
            </View>
            <Text style={style.title}>{title}</Text>
        </RectButton>

    )
}
export {ButtonSocial}