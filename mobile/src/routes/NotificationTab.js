import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ServicesAccept from "../pages/ServicesAccept";
import ServicesRejected from "../pages/ServicesRejected";
import ServicesNotification from "../pages/ServiceNotification";

const { Navigator, Screen } = createBottomTabNavigator();

function NotificationTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
        inactiveBackgroundColor: "#Fafafc",
        activeBackgroundColor: "#ebebf5",
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#04d361",
      }}
    >
      <Screen
        name="Pendente"
        component={ServicesNotification}
        options={{
          tabBarLabel: "Pendente",
        }}
      />
      <Screen
        name="Rejeitado"
        component={ServicesRejected}
        options={{
          tabBarLabel: "Rejeitado",
        }}
      />

      <Screen
        name="Aceitos"
        component={ServicesAccept}
        options={{
          tabBarLabel: "Aceito"
        }}
      />
    </Navigator>
  );
}

export default NotificationTabs;
