// screens/Map/SearchScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

const GOOGLE_API_KEY = 'AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao';

const SearchScreen = ({ navigation }) => {
    const [region, setRegion] = useState(null);
    const [destination, setDestination] = useState(null);

    const [marker, setMarker] = useState([
        {
            id: 1,
            latitude: 26.423715,
            longitude: 80.295104,
            title: 'Tean A',
            description: 'Current location of Team A',
        },
        {
            id: 2,
            latitude: 26.805271,
            longitude: 72.268093,
            title: 'Team B',
            description: 'Current location of Team B',
        }
    ]);
    // , 

    const MyCustomMarkerView = () => {
        return (
            <Image style={{ width: 30, height: 30 }} source={require("../../assets/box/moto.webp")} />
        )
    }

    const MyCustomCalloutView = () => {
        return (
            <View style={{ width: 150, padding: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>Team A</Text>
                <Text>Current location of Team A</Text>
            </View>
        );
    }


    return (
        // <View style={{ flex: 1 }}>
        //     <GooglePlacesAutocomplete
        //         placeholder="Search Destination"
        //         onPress={(data, details = null) => {
        //             if (!details) return; // guard clause
        //             const location = details.geometry.location;
        //             setDestination({
        //                 description: data.description,
        //                 lat: location.lat,
        //                 lng: location.lng,
        //             });

        //             setRegion({
        //                 latitude: location.lat,
        //                 longitude: location.lng,
        //                 latitudeDelta: 0.01,
        //                 longitudeDelta: 0.01,
        //             });
        //         }}
        //         fetchDetails={true}
        //         query={{
        //             key: GOOGLE_API_KEY,
        //             language: 'en',
        //             // libraries: 'places' // optional
        //         }}
        //         styles={{
        //             container: { flex: 0, zIndex: 1 },
        //             textInput: { height: 50, fontSize: 18 },
        //         }}
        //     />

        //     {region && (
        //         <MapView style={styles.map} region={region}>
        //             <Marker coordinate={region} title="You" />
        //             {destination && (
        //                 <Marker
        //                     coordinate={{ latitude: destination.lat, longitude: destination.lng }}
        //                     title="Destination"
        //                     pinColor="green"
        //                 />
        //             )}
        //         </MapView>
        //     )}

        //     {destination && (
        //         <TouchableOpacity style={styles.button} onPress={handleConfirmRide}>
        //             <Text style={{ color: 'white', fontSize: 18 }}>Confirm Ride</Text>
        //         </TouchableOpacity>
        //     )}
        // </View>

        <View style={{ flex: 1 }}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: 20.5937,
                    longitude: 78.9629,
                    latitudeDelta: 8.4,
                    longitudeDelta: 37.6
                }}
                ColorScheme="dark"
                showsUserLocation={true}
            >
                <Marker coordinate={{ latitude: 20.5937, longitude: 78.9629 }}>
                    <MyCustomMarkerView />
                    <Callout>
                        <MyCustomCalloutView />
                    </Callout>
                </Marker>
                {
                    marker.map((marker) => (
                        <Marker
                            key={marker.id}
                            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}

                            title={marker.title}
                            description={marker.description}
                        >
                            <MyCustomMarkerView {...marker} />
                        </Marker>
                    ))
                }
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: '70%',
        marginTop: 10,
        flex: 1,
    },
    button: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 10,
    },
});

export default SearchScreen;
