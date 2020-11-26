import React from "react";
import { View, Image, Text ,Alert} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import api from "../../services/api";

import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

const ServiceItem = (props) => {

  async function handleCreateConnection() {
    try {
      const response = await api.post(`/connection/${props.id}`);
      Alert.alert("Aplicado com sucesso","Obrigado por se aplicar! \nAguarde um tempo até a confirmação do criador do serviço")
    } catch (error) {
      throw error;
    }
  }

  return (
    <View elevation={2} style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{props.title}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{props.description}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"   "}
          <Text style={styles.priceValue}>R$ {props.price}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={styles.contactButton} onPress={handleCreateConnection}>
            <AntDesign name="login" color="white" size={20} />
            <Text style={styles.contactButtonText}>Aplicar nesse serviço</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default ServiceItem;
