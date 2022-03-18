import React from 'react';
import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { StatusBar, useWindowDimensions } from 'react-native'
 
import {
   Container,
   Content,
   Title,
   Message,
   Footer,
} from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';
import { useNavigation } from '@react-navigation/native';
 
export function SchedulingComplete(){

  const navigation = useNavigation()

  function handleConfirmRental() {
    navigation.navigate('Home');
  }


    const {width} = useWindowDimensions()
  return (
      <Container>
          <StatusBar
            barStyle='light-content'
            translucent
            backgroundColor='transparent'
          />
          <LogoSvg width={width} />

          <Content>
              <DoneSvg />
              <Title>Carro alugado</Title>

              <Message>
                  Agora você só precisa ir {'\n'}
                  até a concessonária da RENTX {'\n'}
                  pegar o seu automóvel.
              </Message>
          </Content>

        <Footer>
          <ConfirmButton title='Ok' onPress={handleConfirmRental} />
        </Footer>
      </Container>
  )
}