
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator}  from '@react-navigation/stack';
import Home from '../pages/Home';
import ServicesPages from './ServicesTab';
import CreateAccount from '../pages/CreateAccount';
import LandingPage from '../pages/LandingPage';
import ServiceNotification from '../pages/ServiceNotification';

const {Navigator,Screen} = createStackNavigator();

function AppStack(){
  return(
    <NavigationContainer>
       <Navigator screenOptions={{headerShown:false}}>
         <Screen name="Home" component={Home}/>
         <Screen name="LandingPage" component={LandingPage} />
         <Screen name="ServicesPages" component={ServicesPages}/>
         <Screen name="CreateAccount" component={CreateAccount}/>
         <Screen name="ServiceNotification" component={ServiceNotification}/>
       </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;