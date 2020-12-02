import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";

import UserAccepted from "../../components/UserAccepted";

import PageHeader from "../../components/PageHeader";
import styles from "./styles";

import api from "../../services/api";

import AsyncStorage from "@react-native-community/async-storage";

function ServicesAccept() {
  const [services, setServices] = useState([]);
  const [favorites, setFavorites] = useState([]);

  async function loadServices() {
    const response = await api.get("/connection/users", {
      params: {
        status: "Aceito",
      },
    });
    setServices(response.data);
  }
  useEffect(() => {
    loadServices();
  }, []);

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

  return (
    <View style={styles.container}>
      <PageHeader color="#04d361" title="Usuários aceitos" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
        style={styles.serviceList}
      >
        {services.map((service) => (
          <UserAccepted
            favorited={favorites.includes(service.user_id)}
            key={Math.random().toString(36).substring(7)}
            user={service}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default ServicesAccept;
