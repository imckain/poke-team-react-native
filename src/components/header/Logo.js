import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Logo = () => {

  return (
    <View style={styles.logoContainer}>
      <Text allowFontScaling={false} style={styles.logoText}>Poke-Pal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
  },
  logoText: {
    // paddingBottom: 48,
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'flex-start',
  }
});

export default Logo;