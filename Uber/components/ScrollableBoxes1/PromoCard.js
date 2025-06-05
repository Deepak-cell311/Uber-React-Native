// components/PromoCard.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const PromoCard = ({ title, image, backgroundColor = '#ffffff' }) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    width: 340,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default PromoCard;
