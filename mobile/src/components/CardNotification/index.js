import React, { useEffect, useState } from "react";
import { View, Text, Alert, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppLoading } from "expo";
import AsyncStorage from "@react-native-community/async-storage";

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

import HearthOutLineIcon from "../../assets/icons/heart-outline.png";
import UnfavoriteIcon from "../../assets/icons/unfavorite.png";

import api from "../../services/api";

const CardNotification = ({user, favorited}) => {

  const [isFavorited, setIsFavorited] = useState(favorited);

  const navigation = useNavigation();

  function handleNavigateToConnection() {
    navigation.navigate("ProfileContact", {
      userid: user.user_id,
    });
  }

  async function handleConfimConnection() {
      await api.patch("/connection/user1",null,{
        params: {
          service: user.id,
        },
      });

      await api.patch("/connection/user2", null, {
        params: {
          service: user.id,
          user: user.user_id,
        },
      });

      Alert.alert("Foi");
      navigation.navigate("ProfileContact", {
        userid: user.user_id,
      });
  
    } 
   

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem("favorites");

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((userItem) => {
        return userItem.user_id === user.user_id;
      });

      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(user);

      setIsFavorited(true);
    }
    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
  }

  return (
    <Container elevation={3}>
      <Profile>
        <ProfileInfo>
          <TouchableOpacity onPress={handleNavigateToConnection}>
            <Name>{user.name}</Name>
          </TouchableOpacity>
          <Servico>
            <Text>Serviço: </Text>
            {user.title}
          </Servico>
        </ProfileInfo>
      </Profile>

      <ButtonsContainer>
        <FavoriteButton onPress={handleToggleFavorite} favorited={isFavorited}>
          {isFavorited ? (
            <Image source={UnfavoriteIcon} />
          ) : (
            <Image source={HearthOutLineIcon} />
          )}
        </FavoriteButton>
        <AcceptButton onPress={handleConfimConnection}>
          <TextAcceptButton >
            Confirmar
          </TextAcceptButton>
        </AcceptButton>
      </ButtonsContainer>
    </Container>
  );
};

export default CardNotification;
