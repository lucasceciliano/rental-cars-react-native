import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg'
 
import {
   Container,
   Header,
   Title,
   RentalPeriod,
   DateInfo,
   DateTitle,
   DateValue,
   Content,
   Footer,
} from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';
 
export function Scheduling(){

  const navigation = useNavigation()

  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails');
  }


    const theme = useTheme()

  return (
      <Container>
          <Header>
              <StatusBar
                barStyle='light-content'
                translucent
                backgroundColor='transparent'
              />
              <BackButton
              onPress={() => {}} 
              color= {theme.colors.shape}
              />
              <Title>
                  Escolha uma {'\n'}
                  data de inicio e {'\n'}
                  fim do aluguel
              </Title>

            <RentalPeriod>
                <DateInfo>
                    <DateTitle>De</DateTitle>
                    <DateValue selected={false} >
                        03/03/2022
                    </DateValue>
                </DateInfo>

                <ArrowSvg />

                <DateInfo>
                    <DateTitle>Até</DateTitle>
                    <DateValue selected={false} >
                    05/03/2022
                    </DateValue>
                </DateInfo>

            </RentalPeriod>

            
        
          </Header>

        <Content>
            <Calendar />
        </Content>

        <Footer>
            <Button
                title='Confirmar' onPress={handleConfirmRental}
            />
        </Footer>

      </Container>
  )
}