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


import api from "../../services/api";

const FavoriteCard = ({user}) => {


  const navigation = useNavigation();

  function handleNavigateToConnection() {
    navigation.navigate("ProfileContact", {
      userid: user.user_id,
    });
  }
 
  return (
    <Container elevation={3}>
      <TouchableOpacity onPress={handleNavigateToConnection}>
      <Profile>
        <ProfileInfo>
          
            <Name>{user.name}</Name>
   
        </ProfileInfo>
      </Profile>
      </TouchableOpacity>
    </Container>
  );
};

export default FavoriteCard;
