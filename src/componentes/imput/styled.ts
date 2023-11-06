import styled,{css} from "styled-components/native";
import { TextInput,View,ViewProps, } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { DefaultTheme } from "styled-components";

interface IcontainerProps extends ViewProps{
    hasError:boolean;
    isFocused:Boolean;
    isFilled:Boolean;
};
interface ITextcontainerProps extends ViewProps{
    hasError:boolean;
    isFocused:Boolean;
    isFilled?:Boolean;
    
};
export const Containe=styled.View`
    width: 85%;
    height: ${RFValue(50)}px;
    flex-direction: row;
    margin-bottom: ${RFValue(10)}px ;

`;
export const IConContaine=styled.View<IcontainerProps>`
    width:  ${RFValue(55)}px;
    height:  ${RFValue(50)}px;
    justify-content: center;
    align-items: center;
    ${({isFocused,isFilled }:IcontainerProps)=>(isFilled||isFocused)&& css`
        border-bottom-width: ${RFValue(2)}px;
        border-bottom-color: ${({theme})=>theme.COLORS.BLUE1};
    `}
    ${({hasError}:IcontainerProps)=>hasError&&css`
        border-bottom-color:${({theme})=>theme.COLORS.RED};
    `}
    margin-right:${RFValue(3)}px;
    border-top-left-radius:${RFValue(5)}px;
    border-Bottom-left-radius:${RFValue(5)}px;
    background-color:${({theme}:DefaultTheme)=>theme.COLORS.GRAY5}
`
export const InputText=styled(TextInput)<ITextcontainerProps>`
    flex: 1;
    font-size: ${RFValue(12)}px;
    border-top-left-radius:${RFValue(5)}px;
    border-bottom-left-radius: ${RFValue(5)}px;
    color: ${({ theme }:DefaultTheme)=>theme.COLORS.GRAY4};
    font-family: ${({theme}:DefaultTheme )=>theme.FONT.POPPINSLIGHT};
    background-color: ${({theme}:DefaultTheme)=>theme.COLORS.GRAY5};

    ${({isFocused,isFilled }:ITextcontainerProps)=>(isFilled||isFocused)&& css`
        border-bottom-width: ${RFValue(2)}px;
        border-bottom-color: ${({theme})=>theme.COLORS.BLUE1};
    `}
    ${({hasError}:ITextcontainerProps)=>hasError&&css`
        border-bottom-color:${({theme})=>theme.COLORS.RED};
    `}
    padding:0 ${RFValue(12)}px;

 `;
