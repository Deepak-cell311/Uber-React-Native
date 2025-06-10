import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, FlatList, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { GO_MAP_PRO_API_KEY } from "@env"
import { LocateIcon } from 'lucide-react-native';

const LocationInputScreen = ({ navigation }) => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [focusedInput, setFocusedInput] = useState(null);;

    const fetchSuggestions = async (input) => {
        if (!input) return;
        try {
            const url = `https://maps.gomaps.pro/maps/api/place/queryautocomplete/json?input=${input}&key=${GO_MAP_PRO_API_KEY}`;
            const res = await axios.get(url);
            setSuggestions(res.data?.predictions || []);
        } catch (err) {
            console.error("Autocomplete error:", err);
        }
    };

    const handleSelectSuggestion = (description) => {
        if (focusedInput === 'origin') {
            setOrigin(description);
        } else {
            setDestination(description);
        }
        setSuggestions([]);
    };

    const handleSubmit = async () => {
        if (!origin || !destination) return;
        setLoading(true);
        try {
            const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?destinations=${destination}&origins=${origin}&key=${GO_MAP_PRO_API_KEY}`;
            const response = await axios.get(url);

            const distance = response.data?.rows?.[0]?.elements?.[0]?.distance?.text || 'N/A';
            console.log('Distance:', distance);
            console.log('response: ', response.data);

            navigation.navigate('Search', { distance, origin, destination });
        } catch (err) {
            console.error('Distance fetch failed:', err);
        } finally {
            setLoading(false);
        }
    };

    const nearbyPlaces = [
        { id: '1', name: 'Kanpur Central Railway Station', distance: '8.7 km' },
        { id: '2', name: 'Z Square Mall', distance: '11 km' },
        { id: '3', name: 'Kanpur Airport Chakeri', distance: '18 km' },
        { id: '4', name: 'Jhakarkati Bus Stand', distance: '7.2 km' },
        { id: '5', name: 'Govindpuri Railway Station', distance: '4.9 km' },
        { id: '6', name: 'IIT Kanpur', distance: '16 km' },
        { id: '7', name: 'Allen Forest Zoo', distance: '13.5 km' },
        { id: '8', name: 'Phool Bagh', distance: '9.1 km' },
        { id: '9', name: 'Moti Jheel', distance: '10.3 km' },
        { id: '10', name: 'Green Park Stadium', distance: '9.5 km' },
    ];
    return (
        <View style={styles.container}>
            <View style={styles.dragBar} />
            <Text style={{color: "#cccccc", fontSize: 30, textAlign: "center"}}>Start your Journey</Text>
            <Text style={styles.label}>Current Location</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter origin"
                placeholderTextColor= "#cccccc"
                value={origin}
                onFocus={() => setFocusedInput('origin')}
                onChangeText={(text) => {
                    setOrigin(text);
                    fetchSuggestions(text);
                }}
            />

            <Text style={styles.label}>Destination</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter destination"
                placeholderTextColor= "#cccccc"
                value={destination}
                onFocus={() => setFocusedInput('destination')}
                onChangeText={(text) => {
                    setDestination(text);
                    fetchSuggestions(text);
                }}
            />

            {suggestions?.length > 0 && (
                <FlatList
                    data={suggestions}
                    keyExtractor={(item) => item.place_id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.suggestionItem}
                            onPress={() => handleSelectSuggestion(item.description)}
                        >
                            <Text style={{ color: '#fff' }}>{item.description}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}

            <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loading}>
                {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Get Your Ride</Text>}
            </TouchableOpacity>

            <ScrollView style={{ marginTop: 20 }}>
                {
                    nearbyPlaces.map(place => (
                        <TouchableOpacity key={place.id} style={styles.suggestionItem} onPress={() => {
                            if (focusedInput === 'origin') {
                                setOrigin(place.name);
                            } else {
                                setDestination(place.name);
                            }
                            setSuggestions([]);
                        }}>
                            <View style={{display: 'flex', flexDirection: "row"}}>
                                <LocateIcon style={{ width: 20, height: 20, marginRight: 20, color: "#cccccc" }} />
                                <Text style={{ color: '#cccccc' }}>{place.name} - {place.distance}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>

    );
};

export default LocationInputScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#111',
        paddingTop: 50,
    },
    dragBar: {
        height: 5,
        width: 60,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 3,
        marginBottom: 10,
    },
    label: {
        color: '#ccc',
        marginBottom: 5,
        marginTop: 15,
    },
    input: {
        backgroundColor: '#222',
        padding: 12,
        borderRadius: 8,
        color: '#fff',
        borderColor: '#444',
        borderWidth: 1,
    },
    suggestionItem: {
        padding: 10,
        backgroundColor: '#1e1e1e',
        borderBottomWidth: 1,
        borderColor: '#333',
    },
    button: {
        backgroundColor: '#00cc99',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
