import React from 'react';
import { View ,Image,Text,ScrollView} from 'react-native';

import {BorderlessButton} from 'react-native-gesture-handler';

import backIcon from '../../assets/icons/back.png';

import CardNotification from '../../components/CardNotification';

import { Container,TopBar,Titulo,OldHelp} from './styles';

const ServiceNotification = () => {
  return (
    <Container>
         <TopBar>
           <BorderlessButton>
             <Image source={backIcon} resizeMode="contain"/>
           </BorderlessButton>

           <OldHelp>OldHelp</OldHelp>
         </TopBar>
      <Titulo>
        Solicitações disponíveis
      </Titulo>

      <ScrollView
     showsVerticalScrollIndicator={false}
      >
      <CardNotification 
      name="Derek Enrique Alves"
      cargo="Programador"
      servico="Programar site de uma padaria"
      />

        <CardNotification 
              name="Derek Enrique Alves"
              cargo="Programador"
              servico="Programar site de uma padaria"
              />

        <CardNotification 
              name="Derek Enrique Alves"
              cargo="Programador"
              servico="Programar site de uma padaria"
              />

        <CardNotification 
              name="Derek Enrique Alves"
              cargo="Programador"
              servico="Programar site de uma padaria"
              />

        <CardNotification 
              name="Derek Enrique Alves"
              cargo="Programador"
              servico="Programar site de uma padaria"
              />
          
      </ScrollView>
    </Container>
  );
}

export default ServiceNotification;