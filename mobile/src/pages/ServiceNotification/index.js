import React, { useEffect, useState } from "react";
import { View, Image, Text, ScrollView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppLoading } from "expo";

import { BorderlessButton } from "react-native-gesture-handler";

import backIcon from "../../assets/icons/back.png";

import CardNotification from "../../components/CardNotification";

import { Container, TopBar, Titulo, OldHelp } from "./styles";

import api from "../../services/api";

const ServiceNotification = () => {
  const navigation = useNavigation();

  const [connections, setConnections] = useState([]);
  const handleGoBack = () => {
    navigation.goBack();
  };

  async function loadServices() {
    const response = await api.get("/connection/users");
    setConnections(response.data);
  }

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
        {
         
          connections.map((conn) => (
            <CardNotification
              key={Math.random().toString(36).substring(7)}
              id={conn.id}
              userid={conn.user_id}
              service={conn.title}
              name={conn.name}
            />
          ))
        }
      </ScrollView>
    </Container>
  );
};

export default ServiceNotification;
