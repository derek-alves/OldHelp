import React from "react";
import { View, Image, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

const ServiceItem = (props) => {
  return (
    <View style={styles.container}>
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
          <RectButton style={styles.contactButton}>
            <AntDesign name="login" color="white" size={20} />
            <Text style={styles.contactButtonText}>Aplicar nesse serviço</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default ServiceItem;
