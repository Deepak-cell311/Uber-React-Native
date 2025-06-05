import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import Colors from '../../constants/Colors';

const SearchScreen = ({ navigation }) => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');

  const handleSearch = () => {
    if (pickup && dropoff) {
      // Navigate to Details screen with pickup/dropoff info
      navigation.navigate('RideDetails', { pickup, dropoff });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter pickup location"
        value={pickup}
        onChangeText={setPickup}
        style={styles.input}
        autoFocus
      />
      <TextInput
        placeholder="Enter dropoff location"
        value={dropoff}
        onChangeText={setDropoff}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch} disabled={!pickup || !dropoff}>
        <Text style={styles.buttonText}>Confirm Locations</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.background },
  input: {
    height: 50,
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 10,
    backgroundColor: Colors.white,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: { color: Colors.white, fontWeight: '600', fontSize: 16 },
});

export default SearchScreen;