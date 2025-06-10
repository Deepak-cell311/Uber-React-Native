import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Home, Settings, Clock, User } from 'lucide-react-native'; // Import your icons
import HomeStackNavigator from './HomeStackNavigator';
import AccountScreen from '../screens/Profile/Account';
import ServicesScreen from '../services/ServicesScreen'; // Ensure this path is correct



// const HomeScreen = () => <View><Text>Home Screen</Text></View>;
// const ServicesScreen = () => <View><Text>Services Screen</Text></View>;
const ActivityScreen = () => <View><Text>Activity Screen</Text></View>;

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#cccccc',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#060606',
          height: 60,
          paddingBottom: 5,
          borderTopColor: 'black'
        },
        tabBarIcon: ({ color }) => {
          if (route.name === 'Home') return <Home color={color} size={24} />;
          if (route.name === 'Services') return <Settings color={color} size={24} />;
          if (route.name === 'Activity') return <Clock color={color} size={24} />;
          if (route.name === 'Account') return <User color={color} size={24} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
