import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Logo = () => {

  return (
    <View style={styles.logoContainer}>
      <Image style={styles.image} resizeMode={'contain'} source={require('../../../assets/dexmateFlat.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
  },
  image: {
    width: 160,
    height: '100%',
  }
});

export default Logo;