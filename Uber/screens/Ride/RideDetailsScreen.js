import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';

const RideDetailsScreen = ({ route, navigation }) => {
  const { pickup, dropoff } = route.params;
  const [loading, setLoading] = useState(true);
  const [routeInfo, setRouteInfo] = useState(null);

  useEffect(() => {
    async function fetchRoute() {
      // Call Google Directions API to get distance, duration, polyline, etc.
      // Sample fetch omitted; typically you'd fetch from your backend or directly Google Directions API with YOUR_GOOGLE_MAPS_API_KEY
      // For demo, fake data:
      setRouteInfo({
        distanceText: '5.4 km',
        durationText: '12 mins',
        fare: '$12.50',
      });
      setLoading(false);
    }
    fetchRoute();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color={Colors.primary} style={{ flex: 1, justifyContent: 'center' }} />;
  }

  const confirmRide = () => {
    navigation.navigate('RideStatus', { pickup, dropoff, routeInfo });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Ride Details</Text>
      <Text>Pickup: {pickup}</Text>
      <Text>Dropoff: {dropoff}</Text>
      <Text>Distance: {routeInfo.distanceText}</Text>
      <Text>Estimated Time: {routeInfo.durationText}</Text>
      <Text>Estimated Fare: {routeInfo.fare}</Text>
      {/* Extend to select car types */}
      <TouchableOpacity style={styles.button} onPress={confirmRide}>
        <Text style={styles.buttonText}>Confirm Ride</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: Colors.background },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: {
    marginTop: 30,
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});

export default RideDetailsScreen;