import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const Button = ({ onPress, title, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, disabled && styles.disabledButton]}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  disabledButton: {
    backgroundColor: Colors.gray,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;