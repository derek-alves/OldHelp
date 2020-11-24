import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import landingImg from "../../assets/ld.png";
import { RectButton } from "react-native-gesture-handler";
import studyIcon from '../../assets/icons/study.png';
import giveClassIcon from '../../assets/icons/give-classes.png';

import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

const LandingPage = () => {
  const { navigate } = useNavigation();

  const handleNavigateToCreateAccount = useCallback(() => {
    navigate("CreateAccount");
  }, []);

  const handleNavigateToSignIn = useCallback(() => {
    navigate("SignIn");
  }, []);

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.boldTitle}>OldHelp</Text>
      <Text style={styles.title}>
        Seja bem-vindo,{"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton
          elevation={5}
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleNavigateToSignIn}
        >
           <Image source={giveClassIcon} style={{margin:3.9}} />
          <Text style={styles.buttonText}>Fazer login</Text>
         

        </RectButton>

        <RectButton
          elevation={5}
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleNavigateToCreateAccount}
        >
           <Image source={studyIcon} />
          <Text style={styles.buttonText}>Fazer cadastro</Text>
          
        </RectButton>
      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    padding: 40,
  },

  banner: {
    width: "100%",
    height: "40%",
    resizeMode: "contain",
  },

  title: {
    fontFamily: "Poppins_500Medium",
    color: "black",
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 20,
  },
  boldTitle: {
    fontSize: 30,
    fontFamily: "Poppins_900Black",
    lineHeight: 40,
    marginBottom: 20,
  },
  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    height: 150,
    width: "48%",
    backgroundColor: "#04d361",
    borderRadius: 8,
    padding: 15,
    justifyContent: "space-between",
  },

  buttonText: {
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
  },

  buttonPrimary: {
    backgroundColor: "#9871f5",
  },

  buttonSecondary: {
    backgroundColor: "#04d361",
  },
});
