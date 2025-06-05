// components/ServiceCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ChevronRight } from 'lucide-react-native'; // Optional arrow icon

const ServiceCard = ({ title, description, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
          <ChevronRight size={18} color="gray" />
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 250,
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#060606',
    color: "white"
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'fill',
    opacity: 1,
  },
  textContainer: {
    padding: 10,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#cccccc',
  },
  description: {
    color: '#555',
    fontSize: 14,
    marginTop: 4,
  },
});

export default ServiceCard;
