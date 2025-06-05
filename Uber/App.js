import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';

import Colors from './constants/Colors';
import AuthProvider, { useAuth } from './AuthContext/AuthContext';
import { AlertNotificationRoot } from 'react-native-alert-notification';


export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <AlertNotificationRoot>
      <AuthProvider>
        <MainApp />
      </AuthProvider>
    </AlertNotificationRoot>
  );
}

const MainApp = () => {
  const { authUser } = useAuth();

  return (
    <NavigationContainer>
      {authUser ? <AppNavigator /> : <AuthNavigator />}
      <StatusBar style="light" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  }
});