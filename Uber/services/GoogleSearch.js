import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const mockPlaces = [
  { id: '1', name: 'Kanpur Central Railway Station', latitude: 26.4499, longitude: 80.3319 },
  { id: '2', name: 'Z Square Mall', latitude: 26.4490, longitude: 80.3210 },
  { id: '3', name: 'Kanpur Airport Chakeri', latitude: 26.5121, longitude: 80.2277 },
  { id: '4', name: 'Jhakarkati Bus Stand', latitude: 26.4485, longitude: 80.3172 },
  { id: '5', name: 'Govindpuri Railway Station', latitude: 26.4210, longitude: 80.2760 },
];

const LocalPlacesAutocomplete = ({ onPlaceSelected }) => {
  const [query, setQuery] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const handleSearch = (text) => {
    setQuery(text);
    if (text.length > 0) {
      const filtered = mockPlaces.filter(place =>
        place.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredPlaces(filtered);
    } else {
      setFilteredPlaces([]);
    }
  };

  const handleSelect = (place) => {
    setQuery(place.name);
    setFilteredPlaces([]);
    if (onPlaceSelected) onPlaceSelected(place);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search places"
        value={query}
        onChangeText={handleSearch}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
      />
      {filteredPlaces.length > 0 && (
        <FlatList
          keyboardShouldPersistTaps="handled"
          data={filteredPlaces}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          style={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    zIndex: 10, // So dropdown stays above other UI
  },
  input: {
    height: 40,
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  list: {
    backgroundColor: '#fff',
    borderColor: '#888',
    borderWidth: 1,
    borderTopWidth: 0,
    maxHeight: 150,
  },
  item: {
    padding: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 16,
  },
});

export default LocalPlacesAutocomplete;
