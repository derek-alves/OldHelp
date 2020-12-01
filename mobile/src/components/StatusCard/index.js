import React, { useEffect, useState } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Container, Profile, Name, ProfileInfo, Servico,ServicoText } from "./styles";

const StatusCard = ({ user }) => {
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
            <Servico>
             <ServicoText>{user.title}</ServicoText> 
            </Servico>
          </ProfileInfo>
        </Profile>
      </TouchableOpacity>
    </Container>
  );
};

export default StatusCard;
