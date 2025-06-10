import React, { useState } from "react";
import { View, TextInput, Text, Button, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GO_MAP_PRO_API_KEY } from '@env'; // Make sure your .env key is named like this

export default function ServicesScreen() {

    console.log("GO_MAP_PRO_API_KEY:", GO_MAP_PRO_API_KEY); // Debugging line to check if the key is loaded
    if (!GO_MAP_PRO_API_KEY) {
        console.error("GO_MAP_PRO_API_KEY is not defined. Please check your .env file.");
    }
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    const Search = async () => {
        if (inputValue.trim() === '') {
            console.log("No input provided for search.");
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(`https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${encodeURIComponent(inputValue)}&key=${GO_MAP_PRO_API_KEY}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("API Data:", data);
            setSuggestions(data.predictions || []);
        } catch (error) {
            console.log("Error in search function:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Services Screen</Text>

            <TextInput
                value={inputValue}
                onChangeText={text => setInputValue(text)}
                placeholder="Enter place name"
                style={styles.input}
                onSubmitEditing={Search}
            />

            <Button title={loading ? "Searching..." : "Search"} onPress={Search} disabled={loading} />

            <Text style={styles.label}>Input value: {inputValue}</Text>

            <FlatList
                data={suggestions}
                keyExtractor={item => item.place_id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.description}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: 'red',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        marginVertical: 10,
    },
    item: {
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    itemText: {
        fontSize: 16,
    },
});
