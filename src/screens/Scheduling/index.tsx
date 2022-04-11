import React, { useState } from 'react';
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
import { Calendar, DayProps, generateInterval, MarketDateProps  } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';

 
export function Scheduling(){
  const [lastSelectedDate, setlastSelectedDate] = useState<DayProps>({} as DayProps)
  const [markedDates, setmarkedDates] = useState<MarketDateProps>({} as MarketDateProps)

  const navigation = useNavigation()

  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails');
  }

  function handleBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DayProps){
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
    let end = date

    if(start.timestamp > end.timestamp){
      start = end
      end = start
    }

    setlastSelectedDate(end)
    const interval = generateInterval(start, end)
    setmarkedDates(interval)

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
              onPress={handleBack} 
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
            <Calendar
            markedDates={markedDates}
            onDayPress={handleChangeDate}
            
            />
        </Content>

        <Footer>
            <Button
                title='Confirmar' onPress={handleConfirmRental}
            />
        </Footer>

      </Container>
  )
}