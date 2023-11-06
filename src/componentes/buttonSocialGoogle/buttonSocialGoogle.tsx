import { style } from './styled'
import React from 'react'
import { Text,Image } from 'react-native'
import { RectButton,RectButtonProps } from 'react-native-gesture-handler';


interface Props extends RectButtonProps{
    title:string
    
}


 const ButtonSocialGoogle=({title,...rest}:Props)=>{

    const iconeGoogle:string ='../../assets/pngGoogle.png'
    return(
        <RectButton
            {...rest}
        
         style={style.button}>
            <Image style={style.Image} source={require(iconeGoogle)} />
            <Text style={style.title}>{title}</Text>
        </RectButton>

    )
}
export {ButtonSocialGoogle}