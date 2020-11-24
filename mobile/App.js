import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppLoading } from 'expo';

import Routes from "./src/routes";
import AppProvider from "./src/hooks";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <AppProvider>
        <Routes />
      </AppProvider>
      <StatusBar style="light" />
    </>
  );
}
