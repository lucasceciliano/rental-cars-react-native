import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
   Container,
   Header,
   CarImages,
   Content,
   Details,
   Description,
   Brand,
   Name,
   Rent,
   Period,
   Price,
   About,
   Accessories,
   Footer,
} from './styles';
import { useNavigation } from '@react-navigation/native';
 
export function CarDetails(){

  const navigation = useNavigation()

  function handleConfirmRental() {
    navigation.navigate('Scheduling');
  }


  return (
      <Container>
          <Header>
              <BackButton onPress={() => {}} />
          </Header>

        <CarImages>
        <ImageSlider
            imageUrl={['https://production.autoforce.com/uploads/version/profile_image/3188/model_main_comprar-tiptronic_87272c1ff1.png']}
        />
        </CarImages>

        <Content>
            <Details>
              <Description>
                <Brand>Lamborgini</Brand>
                <Name>Huracan</Name>
              </Description>

              <Rent>
                <Period>Ao dia</Period>
                <Price>R$ 580</Price>
              </Rent>
            </Details>

            <Accessories>
              <Accessory name="380km/h" icon={speedSvg} />
              <Accessory name="3.2s" icon={accelerationSvg} />
              <Accessory name="800 HP" icon={forceSvg} />
              <Accessory name="Gasolina" icon={gasolineSvg} />
              <Accessory name="Auto" icon={exchangeSvg} />
              <Accessory name="2 pessoas" icon={peopleSvg} />
            </Accessories>
 
            <About>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </About>

            <Footer>
              <Button title='Escolher período do aluguel' onPress={handleConfirmRental} />
            </Footer>

        </Content>

      </Container>
  )
}