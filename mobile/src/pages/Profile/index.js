import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import Header from "../../components/PageHeader";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

import { Container, ProfileContent, Body, Name } from "./styles";

function Profile() {
  return (
    <Container>
      <Header />
      <ProfileContent>
        <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            marginTop: -110,
            zIndex: 2,
          }}
          source={require("../../assets/0.jpeg")}
        />

        <Body>
          <Name>Derek Enrique Alves</Name>
          <Text style={{ fontSize: 20 }}>derek@derek.com</Text>
  

          <TouchableOpacity
            style={{
              flexDirection:"row",
              justifyContent:"center",
              alignItems: "center",
              padding: 15,
              borderRadius: 8,
              width: "85%",
              borderWidth: 2,
              borderColor: "#04d361",
              marginTop:30
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

export default Profile;
