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
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          ...StyleSheet.absoluteFill,
        }}
      >
        <Image
          source={require("../../assets/bg.jpg")}
          style={{ flex: 1, height: null, width: null }}
        />
      </View>

      <View style={{ height: height / 3 }}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleNavigateToSignIn}>
          <View
            style={{
              ...styles.button,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>SIGN IN</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity  activeOpacity={0.7} onPress={handleNavigateToCreateAccount}>
          <View
            style={{
              ...styles.button,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              SIGN UP
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
  },
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -20,
    left: width / 2 - 20,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
  },
  forgotPass: {
    alignItems: "center",
    justifyContent: "center",
  },
});
