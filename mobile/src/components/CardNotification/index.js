import React from 'react';
import { View } from 'react-native';
import {Feather} from "@expo/vector-icons";

 import { Container,Profile,Name,Cargo,TextAcceptButton,ProfileInfo,Servico,ButtonsContainer,FavoriteButton,AcceptButton} from './styles';

const CardNotification = () => {
  return (
    <Container>
      <Profile>
        <ProfileInfo>
          <Name>Derek Enrique alves</Name>
          <Cargo>Programação</Cargo>
          <Servico>Programar site de uma padaria</Servico>
        </ProfileInfo>
      </Profile>

      <ButtonsContainer>
          <FavoriteButton>
               <Feather color="#FFF" size={25} name="heart"/>
          </FavoriteButton>
          <AcceptButton>
              <TextAcceptButton>
                Confirmar
              </TextAcceptButton>
          </AcceptButton>
      </ButtonsContainer>
    </Container>
  );
}

export default CardNotification;