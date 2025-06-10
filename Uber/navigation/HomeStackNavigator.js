import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import SearchScreen from '../screens/Maps/SearchScreen';
import LocationInputScreen from '../screens/Ride/LocationInputScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="LocationInputScreen" component={LocationInputScreen} />
      
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
