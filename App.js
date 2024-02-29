
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/auth'

export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

