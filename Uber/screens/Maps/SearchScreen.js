import React, { useRef, useMemo, useState, useEffect, use } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout, Circle, Polyline } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from "lucide-react-native";
import polyline from '@mapbox/polyline';


const screenHeight = Dimensions.get('window').height;
import { GO_MAP_PRO_API_KEY } from "@env"
import axios, { Axios } from 'axios';

const SearchScreen = ({ navigation, route }) => {
    const sheetRef = useRef(null);
    // const navigation = useNavigate()

    const { distance, origin, destination } = route.params || {};
    console.log(distance, origin, destination);

    const [location, setLocation] = useState(null);
    const [region, setRegion] = useState(null);
    const [places, setPlaces] = useState([]);
    const [routeCoordinates, setRouteCoordinates] = useState([]);


    const [endLatitude, setEndLatitude] = useState(0);
    const [endLongitude, setEndLongitude] = useState(0);

    const [startLatitude, setStartLatitude] = useState(0);
    const [startLongitude, setStartLongitude] = useState(0);



    console.log("origin: ", origin);
    console.log("destination: ", destination);
    console.log("distance: ", distance);


    const nearbyPlaces = [
        { id: '1', name: 'Kanpur Central Railway Station', distance: '8.7 km' },
        { id: '2', name: 'Z Square Mall', distance: '11 km' },
        { id: '3', name: 'Kanpur Airport Chakeri', distance: '18 km' },
        { id: '4', name: 'Jhakarkati Bus Stand', distance: '7.2 km' },
        { id: '5', name: 'Govindpuri Railway Station', distance: '4.9 km' },
    ];

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

    const openSheet = () => {
        sheetRef.current?.snapToIndex(1);
    };
    // useEffect(() => {
    //     if (route.params?.distance) {
    //         console.log("Received Distance:", route.params.distance);
    //         // You can also update UI state with it
    //     }
    // }, [route.params]);

    const fetchPlacesDirection = async () => {
        try {
            const response = await axios.get(`https://maps.gomaps.pro/maps/api/directions/json?destination=${destination}&origin=${origin}&key=${GO_MAP_PRO_API_KEY}`);

            const encodedPolyline = response.data.routes[0]?.overview_polyline.points;
            const points = polyline.decode(encodedPolyline);
            const routeCoordinates = points.map(([lat, lng]) => ({
                latitude: lat,
                longitude: lng
            }));
            setRouteCoordinates(routeCoordinates);

            console.log("Response of fetchPlacesDirection: ", response.data);
            setEndLatitude(response.data.routes[0]?.legs[0]?.end_location.lat);
            setEndLongitude(response.data.routes[0]?.legs[0]?.end_location.lng);
            setStartLatitude(response.data.routes[0]?.legs[0]?.start_location.lat);
            setStartLongitude(response.data.routes[0]?.legs[0]?.start_location.lng);

            setRegion({
                latitude: response.data.routes[0]?.legs[0]?.start_location.lat,
                longitude: response.data.routes[0]?.legs[0]?.start_location.lng,
                latitudeDelta: 0.2,
                longitudeDelta: 0.2,
            });


        } catch (error) {
            console.error("Error fetching places direction:", error);
        }
    }

    useEffect(() => {
        fetchPlacesDirection()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#060606' }}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                region={region}
                onPress={() => sheetRef.current?.snapToIndex(1)} // Tap anywhere on map
                showsUserLocation={true}
                userInterfaceStyle='dark'
                showsTraffic={true}
                showsMyLocationButton={true}

            >
                {routeCoordinates.length > 0 && (
                    <Polyline
                        coordinates={routeCoordinates}
                        strokeColor="#00BFFF"
                        strokeWidth={4}
                    />
                )}

                {startLatitude !== 0 && startLongitude !== 0 && (
                    <Marker coordinate={{ latitude: startLatitude, longitude: startLongitude }}>
                        {/* <Image style={{ width: 30, height: 30 }} source={require("../../assets/box/moto.webp")} /> */}
                        <Callout>
                            <Text>Origin</Text>
                        </Callout>
                    </Marker>
                )}

                {endLatitude !== 0 && endLongitude !== 0 && (
                    <Marker coordinate={{ latitude: endLatitude, longitude: endLongitude }}>
                        <Callout>
                            <Text>Destination</Text>
                        </Callout>
                    </Marker>
                )}

                <Circle
                    center={{
                        latitude: 20.5937,
                        longitude: 78.9629,
                    }}
                    radius={200000000}
                    fillColor="rgba(255,0,0,0.3)"
                    strokeColor="rgba(255,0,0,0.5)"
                />

            </MapView>

            <ScrollView style={[styles.rideContainer, { paddingHorizontal: 20 }]} keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} keyboardVerticalOffset={80}>
                    {/* Drag Indicator */}
                    <View style={styles.dragBar} />

                    <View style={styles.headerRow}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <ArrowLeft color="#ccc" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Plan your ride</Text>
                    </View>


                    <View style={styles.cardContainer}>
                        {[
                            { id: 1, image: require("../../assets/box/trip.webp"), distance: "1 km", price: "₹50" },
                            { id: 3, image: require("../../assets/box/auto.webp"), distance: "10 km", price: "₹200" },
                            { id: 2, image: require("../../assets/box/moto.webp"), distance: "5 km", price: "₹120" },
                        ].map(item => (
                            <View key={item.id} style={styles.card}>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                    <Image source={item.image} style={styles.cardImage} />
                                    <Text style={styles.cardText}>{item.distance}</Text>
                                </View>
                                <Text style={styles.cardSubText}>Est. {item.price}</Text>
                            </View>
                        ))}
                    </View>

                    {distance && (
                        <View style={{ marginTop: 10, marginBottom: 10 }}>
                            <Text style={{ color: '#ccc', fontSize: 16 }}>
                                Distance between {origin} and {destination}: <Text style={{ fontWeight: 'bold', color: '#00cc99' }}>{distance}</Text>
                            </Text>
                        </View>
                    )}


                    <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('LocationInputScreen')}>
                        <Text style={styles.confirmButtonText}>Book Your Ride</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ScrollView>

        </SafeAreaView>
    );

};

const styles = StyleSheet.create({

    rideContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#111111',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        zIndex: 1,
        maxHeight: '60%',
    },

    dragBar: {
        height: 5,
        width: 50,
        backgroundColor: '#444',
        alignSelf: 'center',
        borderRadius: 3,
        marginBottom: 10,
    },

    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    headerTitle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
        flex: 1,
        textAlign: 'center',
    },

    timeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    timeButton: {
        backgroundColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
    },

    timeButtonText: {
        color: '#000',
        fontWeight: '500',
    },

    inputBox: {
        marginBottom: 20,
    },

    inputField: {
        backgroundColor: '#1e1e1e',
        color: '#fff',
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#444',
    },

    addStopIcon: {
        position: 'absolute',
        top: 22,
        right: 12,
    },

    confirmButton: {
        backgroundColor: '#00cc99',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#00cc99',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
    },

    confirmButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    cardContainer: {
        gap: 12,
        marginBottom: 20,
    },

    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#444',
        gap: 14,
        justifyContent: "space-between"
    },

    cardImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },

    cardText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },

    cardSubText: {
        color: 'rgb(66, 245, 96)',
        fontSize: 14,
    },

});
export default SearchScreen;