import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './src/pages/LandingPage';;
import Home from './src/pages/Home';



export default function App() {
    return (
      <>
        <Home/>
        <StatusBar style='auto'/>
      </>
    );
  }

