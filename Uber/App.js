import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';

import Colors from './constants/Colors';
import AuthProvider, { useAuth } from './AuthContext/AuthContext';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AlertNotificationRoot>
        <AuthProvider>
          <MainApp />
        </AuthProvider>
      </AlertNotificationRoot>
    </GestureHandlerRootView>
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