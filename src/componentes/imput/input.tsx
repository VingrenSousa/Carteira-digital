import {Containe,IConContaine,InputText} from './styled'
import React,
{
forwardRef
,useCallback
,useState
,useImperativeHandle
,useEffect
} from 'react'
import { useField } from '@unform/core'
import {Ionicons} from '@expo/vector-icons'
import { Text,TextInputProps } from 'react-native'

interface imputRef {
    focus():void
}
interface inputVelueRefe{
    value:string
}
interface inputProps extends TextInputProps{
    name:string
    value?:string
    iconName?:React.ComponentProps<typeof Ionicons >['name']


}
const Inputs:React.ForwardRefRenderFunction<imputRef,inputProps>=()=>{
    return(
        <Containe >
            <IConContaine 
            >
                <InputText
                
                />
                    
                
               
                
            </IConContaine>
        </Containe>
    )
}

export{Inputs}