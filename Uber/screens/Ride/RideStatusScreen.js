import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const RideStatusScreen = ({ route }) => {
  const { pickup, dropoff, routeInfo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Ride Status</Text>
      <Text>Your driver is on the way!</Text>
      <Text>Pickup: {pickup}</Text>
      <Text>Dropoff: {dropoff}</Text>
      <Text>Fare: {routeInfo.fare}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: Colors.background, justifyContent: 'center' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
});

export default RideStatusScreen;