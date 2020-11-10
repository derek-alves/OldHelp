import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppStack from './src/routes/AppStack';
import AppProvider from './src/hooks';

export default function App() {
    return (
      <>
      <AppProvider>
        <AppStack/>
      </AppProvider>
        <StatusBar style='light'/>
      </>
    );
  }

