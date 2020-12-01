import React, { useEffect, useState } from "react";
import { View, Image, Text, ScrollView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppLoading } from "expo";
import AsyncStorage from "@react-native-community/async-storage";

import { BorderlessButton } from "react-native-gesture-handler";

import backIcon from "../../assets/icons/back.png";

import CardNotification from "../../components/CardNotification";

import { Container, TopBar, Titulo, OldHelp } from "./styles";

import api from "../../services/api";

const ServiceNotification = () => {
  const navigation = useNavigation();

  const [connections, setConnections] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  async function loadServices() {
    const response = await api.get("/connection/users",{
      params:{
        status:'Pendente'
      }
    });
    setConnections(response.data);
  }

  useEffect(() => {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher) => {
          return teacher.user_id;
        });
        setFavorites(favoritedTeachersIds);
      }
    });
  }, []);

  useEffect(() => {
    loadServices();
  }, []);

  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <OldHelp>OldHelp</OldHelp>
      </TopBar>
      <Titulo>Solicitações disponíveis</Titulo>

      <ScrollView showsVerticalScrollIndicator={false}>
        {connections.map((user) => (
          <CardNotification
            favorited={favorites.includes(user.user_id)}
            key={Math.random().toString(36).substring(7)}
            user={user}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default ServiceNotification;
