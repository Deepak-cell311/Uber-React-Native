import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Colors from '../../constants/Colors';
import Strings from '../../constants/Strings';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title={Strings.profile.screenTitle} />
      <View style={styles.content}>
        {/* Placeholder content for profile overview */}
        <Text style={styles.text}>User profile details will appear here.</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 24,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '600',
  },
});

export default ProfileScreen;