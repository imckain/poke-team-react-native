import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ShinyBackSprite = ({ results, width, height }) => {
  const sprite = (el) => {
    if (el.sprites.versions["generation-v"]["black-white"].animated.back_shiny === null) {
      return el.sprites.back_shiny
    } else {
      return el.sprites.versions["generation-v"]["black-white"].animated.back_shiny
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

export default ShinyBackSprite;