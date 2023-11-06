
import {  SafeAreaView } from 'react-native'
import React from 'react'
import { ButtonSocialGoogle } from '../../componentes/buttonSocialGoogle/buttonSocialGoogle'
import { ButtonSocial } from '../../componentes/buttonSocial/buttonSocial'
import {
    Container,
    ContaineHeader,
    Title,
    Description,
    ViewButtons,
    ContaineBody,
    Containefooter,
} from './style'
import{Inputs} from '../../componentes/imput/input'



const Login: React.FC = () => {
    return (
        <SafeAreaView style={{ paddingTop: 15 }}>
            <Container>
                <ContaineHeader>

                    <Title>Seja bem Vindo(a) {"\n"}a VN carteira</Title>

                    <Description>Entrar com redes social</Description>

                    <ViewButtons>
                        <ButtonSocialGoogle
                            title='Google'
                            activeOpacity={0.6}
                            underlayColor='#312f2f1c'
                            onPress={() => { console.log('ok') }} />
                        <ButtonSocial
                            title='Facebook'
                            icone="facebook-square"
                           
                            underlayColor='#cccccc4c'

                            onPress={() => { console.log('ok') }} />
                    </ViewButtons>

                </ContaineHeader>

                <ContaineBody>
                    <Inputs>

                    </Inputs>
                </ContaineBody>

                <Containefooter>

                </Containefooter>

            </Container>
        </SafeAreaView>
    )
}
export { Login }