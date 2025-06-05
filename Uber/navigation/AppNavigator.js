import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import BottomTabsNavigator from './BottomTabsNavigator';
import SearchScreen from '../screens/Maps/SearchScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomTabsNavigator} />
      <Stack.Screen name="Search" component={SearchScreen} /> 
    </Stack.Navigator>
  );
};

export default AppNavigator;