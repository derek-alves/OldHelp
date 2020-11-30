import React, { useEffect, useState } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppLoading } from "expo";

import {
  Container,
  Profile,
  Name,
  Cargo,
  TextAcceptButton,
  ProfileInfo,
  Servico,
  ButtonsContainer,
  FavoriteButton,
  AcceptButton,
} from "./styles";

import api from "../../services/api";

const CardNotification = (props) => {
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleNavigateToConnection() {
    navigation.navigate("ProfileContact", {
      userid: props.userid,
    });
  }

  async function handleConfimConnection() {
    try {
      api.put("/connection/userss", null, {
        params: {
          service: props.id,
          user: props.userid,
        },
      });
    } catch (error) {
      throw new error();
    }
    Alert.alert("Foi");
    navigation.navigate("ProfileContact", {
      userid: props.userid,
    });
  }

  return (
    <Container elevation={3}>
      <Profile>
        <ProfileInfo>
          <TouchableOpacity onPress={handleNavigateToConnection}>
            <Name>{props.name}</Name>
          </TouchableOpacity>
          <Servico>
            <Text>Serviço: </Text>
            {props.service}
          </Servico>
        </ProfileInfo>
      </Profile>

      <ButtonsContainer>
        <FavoriteButton>
          <Feather color="#FFF" size={25} name="heart" />
        </FavoriteButton>
        <AcceptButton>
          <TextAcceptButton onPress={handleConfimConnection}>
            Confirmar
          </TextAcceptButton>
        </AcceptButton>
      </ButtonsContainer>
    </Container>
  );
};

export default CardNotification;
