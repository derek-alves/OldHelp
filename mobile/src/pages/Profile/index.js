import React, { useState, useEffect, useCallback } from "react";
import { Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Header from "../../components/PageHeader";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import api from "../../services/api";

import { Feather } from "@expo/vector-icons";

import { Container, ProfileContent, Body, Name ,Description} from "./styles";


function Profile() {
  const { goBack } = useNavigation();

  const handleNavigateTohome = useCallback(() => {
    goBack();
  }, []);

  const [services, setServices] = useState([]);

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== "granted") {
      alert("Eita, precisamos de acesso às suas fotos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }

    const data = new FormData();

    data.append("avatar", {
      type: "image/jpg",
      name: `${services.id}.jpg`,
      uri: result.uri,
    });

    await api.patch("/user/avatar", data);

    Alert.alert("Upload imagem", "Imagem atualizada com sucesso");
    handleNavigateTohome();
  }

  async function loadProfile() {
    const response = await api.get("/user/show");
    setServices(response.data);
  }

  useEffect(() => {
    loadProfile();
  }, []);
  return (
    <Container>
      <Header  color="#04d361" title="Perfil"/>

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
          <TouchableOpacity
            elevation={5}
            style={styles.imagesInput}
            onPress={handleSelectImages}
          >
            <Text
              style={{
                marginBottom: 10,
                fontFamily: "Poppins_500Medium",
                fontSize: 20,
              }}
            >
              Imagem do perfil
            </Text>
            <Feather name="plus" size={50} color="black" />
          </TouchableOpacity>
        )}

        <Body>
          
          <Name>{services.name}</Name>
          <Text style={{ fontWeight:"bold",fontSize: 20 }}>{services.email}</Text>

          <Description>Sou enfermeiro com 5 anos de experiência em hospital publico. Atualmente trabalho como cuidador de idosos</Description>
        </Body>
      </ProfileContent>
    </Container>
  );
}

export default Profile;
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
