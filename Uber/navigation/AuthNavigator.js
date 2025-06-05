import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import WelcomeScreen from "../screens/WelcomeScreen"

const Stack = createNativeStackNavigator();

const AuthNavigator = ({ setUser }) => {
  return (
    <Stack.Navigator initialRouteName="welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login">{(props) => <LoginScreen {...props} setUser={setUser} />}</Stack.Screen>
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;