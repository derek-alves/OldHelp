import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import AppStack from './src/routes/AppStack';
import LandingPage from './src/pages/LandingPage';
export default function App() {
    return (
      <>
        {/* <AppStack/> */}
        <LandingPage/>
        <StatusBar style='light'/>
      </>
    );
  }

