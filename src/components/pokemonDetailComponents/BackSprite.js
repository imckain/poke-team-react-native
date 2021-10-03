import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const BackSprite = ({ results, width, height }) => {
  const sprite = (el) => {
    if (el.sprites.versions["generation-v"]["black-white"].animated.back_default === null) {
      return el.sprites.back_default
    } else {
      return el.sprites.versions["generation-v"]["black-white"].animated.back_default
    }
  }

  return (
    <Image 
      style={[styles.imageStyle, { width: width, height: height }]} 
      resizeMode='contain' 
      source={{ uri: sprite(results) }} 
    />
  );
};

const styles = StyleSheet.create({
  imageStyle: {
  }
});

export default BackSprite;