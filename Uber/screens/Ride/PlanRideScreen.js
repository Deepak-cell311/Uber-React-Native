import React, { useRef, useMemo, useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BottomSheet from '@gorhom/bottom-sheet';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';

const screenHeight = Dimensions.get('window').height;
const GOOGLE_API_KEY = 'YOUR_GOOGLE_API_KEY'; // Replace with your API key

const PlanRideScreen = () => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ['30%', '70%'], []);

  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.warn('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      const coords = {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      setRegion(coords);
      setMarker({ latitude: loc.coords.latitude, longitude: loc.coords.longitude });
    })();
  }, []);

  const nearbyPlaces = [
    { id: '1', name: 'Kanpur Central Railway Station', distance: '8.7 km' },
    { id: '2', name: 'Z Square Mall', distance: '11 km' },
    { id: '3', name: 'Kanpur Airport Chakeri', distance: '18 km' },
    { id: '4', name: 'Jhakarkati Bus Stand', distance: '7.2 km' },
    { id: '5', name: 'Govindpuri Railway Station', distance: '4.9 km' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {region && (
        <MapView
          style={StyleSheet.absoluteFill}
          region={region}
          onRegionChangeComplete={(r) => setMarker({ latitude: r.latitude, longitude: r.longitude })}
        >
          {marker && <Marker coordinate={marker} />}
        </MapView>
      )}

      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        backgroundStyle={styles.sheetBackground}
        index={0}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Set your destination</Text>
          <Text style={styles.subtitle}>Drag map to move pin</Text>

          <GooglePlacesAutocomplete
            placeholder="Where to?"
            onPress={(data, details = null) => {
              const loc = details.geometry.location;
              setRegion({
                latitude: loc.lat,
                longitude: loc.lng,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              });
              setMarker({ latitude: loc.lat, longitude: loc.lng });
            }}
            fetchDetails={true}
            query={{
              key: GOOGLE_API_KEY,
              language: 'en',
            }}
            styles={{
              textInput: styles.input,
              listView: { backgroundColor: '#111' },
            }}
          />

          <Text style={styles.nearbyText}>Nearby Places</Text>
          <FlatList
            data={nearbyPlaces}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.placeItem}>
                <Text style={styles.placeName}>{item.name}</Text>
                <Text style={styles.placeDistance}>{item.distance}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sheetBackground: {
    backgroundColor: '#111',
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 12,
  },
  input: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#222',
    paddingHorizontal: 15,
    color: '#fff',
  },
  nearbyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
  },
  placeItem: {
    paddingVertical: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  placeName: {
    color: '#fff',
    fontSize: 16,
  },
  placeDistance: {
    color: '#aaa',
    fontSize: 14,
  },
});

export default PlanRideScreen;
