import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Header from "../../components/PageHeader";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

import { Container, ProfileContent, Body, Name } from "./styles";

function ProfileContact({ route }) {
  const { userid } = route.params;

  const { goBack } = useNavigation();

  const [services, setServices] = useState([]);

  async function loadProfile() {
    const response = await api.get(`/user/show/${userid}`);
    setServices(response.data);
  }

  useEffect(() => {
    loadProfile();
  }, []);
  return (
    <Container>
      <Header />

      <ProfileContent>
        {services.avatar ? (
          <Image
            elevation={5}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              marginTop: -110,
              zIndex: 2,
            }}
            source={{ uri: `http://192.168.1.9:3333/files/${services.avatar}` }}
          />
        ) : (
          <View
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              marginTop: -110,
              zIndex: 2,
              backgroundColor:'grey'
            }}
          />
        )}

        <Body elevation={3}>
          <Name>{services.name}</Name>
          <Text style={{ fontSize: 20 }}>{services.email}</Text>

          <TouchableOpacity
            elevation={5}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: 15,
              borderRadius: 8,
              width: "85%",
              borderWidth: 2,
              borderColor: "#04d361",
              marginTop: 30,
            }}
          >
            <FontAwesome name="whatsapp" color="#04d361" size={20} />
            <Text
              style={{
                color: "#04d361",
                fontWeight: "bold",
                fontSize: 18,
                marginLeft: 16,
              }}
            >
              Entrar em contato
            </Text>
          </TouchableOpacity>
        </Body>
      </ProfileContent>
    </Container>
  );
}

export default ProfileContact;

const styles = StyleSheet.create({
  uploadedImagesContaier: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    zIndex: 2,
  },

  uploadedImage: {
    width: 64,
    height: 64,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8,
  },

  imagesInput: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderStyle: "dashed",
    borderColor: "black",
    borderWidth: 1.4,
    borderRadius: 20,
    height: 55,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingBottom: 43,
    margin: -30,
    zIndex: 2,
  },
});
