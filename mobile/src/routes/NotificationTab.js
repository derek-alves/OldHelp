import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

import NewService from '../pages/NewService';
import ServicesPage from '../pages/ServicesPage';

const {Navigator,Screen} = createBottomTabNavigator();

function NotificationTabs(){
    return(
      <Navigator
      tabBarOptions={{
        style:{
          elevation:0,
          shadowOpacity:0,
          height:64
        },
        tabStyle:{
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center'
        },
        iconStyle:{
          flex:0,
          width:20,
          height:20
        },
        labelStyle:{
          fontWeight:'bold',
          fontSize:20,
          marginLeft:16
        },
        inactiveBackgroundColor:'#Fafafc',
        activeBackgroundColor:'#ebebf5',
        inactiveTintColor:'#c1bccc',
        activeTintColor:'#04d361'
      }}
      >
        <Screen 
        name="Services" 
        component={ServicesPage}
        options={{
          tabBarLabel:'Serviços',
          tabBarIcon:({color,size}) => {
            return(
              <Ionicons name="ios-easel" size={size} color={color}/>
            )
          }
        }}
        />
        <Screen 
        name="NewService" 
        component={NewService}
        options={{
          tabBarLabel:'Novo Serviço',
          tabBarIcon:({color,size}) => {
            return(
              <Ionicons name="ios-clipboard" size={size} color={color}/>
            )
          }
        }}
        />
      </Navigator>
    );
}

export default NotificationTabs;