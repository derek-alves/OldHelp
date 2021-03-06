import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import ServicesPages from "./ServicesTab";
import CreateAccount from "../pages/CreateAccount";
import LandingPage from "../pages/LandingPage";
import ServiceNotification from "./NotificationTab";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";
import ProfileContact from '../pages/ProfileContact';
import Favorites from "../pages/Favorites";

const { Navigator, Screen } = createStackNavigator();

function AuthRoutes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="LandingPage" component={LandingPage} />
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Home" component={Home} />
        <Screen name="ServicesPages" component={ServicesPages} />
        <Screen name="CreateAccount" component={CreateAccount} />
        <Screen name="ServiceNotification" component={ServiceNotification} />
        <Screen name="Profile" component={Profile} />
        <Screen name="ProfileContact" component={ProfileContact} />
        <Screen name="Favorites" component={Favorites} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AuthRoutes;''
