import React, { useCallback, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground,
} from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import backIcon from "../../assets/icons/back.png";
import api from "../../services/api";

import { useAuth } from "../../hooks/auth";
const Home = () => {
  const [user, setUser] = useState([]);
  const { signOut } = useAuth();
  const { navigate } = useNavigation();

  const handleNavigateToServiceNotification = useCallback(() => {
    navigate("ServiceNotification");
  }, []);

  const handleNavigateToProfile = useCallback(() => {
    navigate("Profile");
  }, []);

  const handleNavigateToFavoritos = useCallback(() => {
    navigate("Favorites");
  }, []);

  const handleNavigateToServicesPage = useCallback(() => {
    navigate("ServicesPages");
  }, []);

  async function loadProfile() {
    const response = await api.get("/user/show");
    setUser(response.data);
  }

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/bg.jpeg")}
          style={{ flex: 1 }}
        >
          <View style={styles.header}>
            <Text style={styles.title}>OldHelp</Text>
            <View style={styles.imagemMoldura} elevation={5}>
              {user.avatar ? (
                <Image
                  style={{
                    width: 106,
                    height: 100,
                    borderRadius: 13,

                    zIndex: 2,
                  }}
                  source={{
                    uri: `http://192.168.1.9:3333/files/${user.avatar}`,
                  }}
                />
              ) : (
                <View
                  style={{
                    width: 106,
                    height: 100,
                    borderRadius: 13,
                    backgroundColor:'grey',
                    zIndex: 2,
                  }}
                />
              )}
              <Text style={styles.textMoldura}>{user.name}</Text>
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonGroup}>
              <RectButton
                elevation={5}
                onPress={handleNavigateToServicesPage}
                style={styles.button}
              >
                <Icon name="home" size={70} color="#F0F0F5" />
                <Text style={styles.buttonText}>Home</Text>
              </RectButton>

              <RectButton 
              onPress={handleNavigateToFavoritos}
              style={styles.button} elevation={5}>
                <Icon name="heart" size={60} color="#F0F0F5" />
                <Text style={styles.buttonText}>Favoritos</Text>
              </RectButton>
            </View>

            <View style={styles.buttonGroup2}>
              <RectButton
                elevation={5}
                onPress={handleNavigateToProfile}
                activeOpacity={0.8}
                style={styles.button}
              >
                <Icon name="user" size={70} color="#F0F0F5" />
                <Text style={styles.buttonText}>Perfil</Text>
              </RectButton>

              <RectButton
                elevation={5}
                onPress={handleNavigateToServiceNotification}
                activeOpacity={0.8}
                style={styles.button}
              >
                <Icon name="bell" size={65} color="#F0F0F5" />
                <Text style={styles.buttonText}>Notificações</Text>
              </RectButton>
            </View>
            <BorderlessButton onPress={signOut}>
              <Text style={{ paddingVertical: 20 }}>Deslogar</Text>
            </BorderlessButton>
          </View>
        </ImageBackground>
      </View>
      <StatusBar style="dark" />
    </>
  );
};

export default Home;
