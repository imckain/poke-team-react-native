import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Logo = () => {

  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>Poke Team</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
  },
  logoText: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'flex-start',
  }
});

export default Logo;