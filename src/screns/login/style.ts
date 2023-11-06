import styled, { DefaultTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
 padding: ${RFValue(10)}px
`;

export const ContaineHeader = styled.View`
    padding: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
    
    `;

export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    text-align:center;
    font-family: ${({theme}:DefaultTheme)=> theme.FONTS.POPPINSMEDIUM};
    margin-top:${RFValue(40)}px ;
`;


export const Description = styled.Text`
    margin-top:${RFValue(60)}px ;
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}:DefaultTheme)=> theme.FONTS.POPPINSLIGHT};
`;

export const ViewButtons = styled.View`
    flex-direction:row;
    gap: 20px;
    margin-top:10px;

    `;

export const ContaineBody = styled.View``;

export const Containefooter = styled.View``;