import React from 'react';
import { StyleSheet, Image } from 'react-native';

const ShinyFrontSprite = ({ results, width, height }) => {
  const sprite = (el) => {
    if (el.sprites.versions["generation-v"]["black-white"].animated.front_shiny === null) {
      return el.sprites.front_shiny
    } else {
      return el.sprites.versions["generation-v"]["black-white"].animated.front_shiny
    }
  }

  return (
    <Image 
      style={[{ width: width, height: height, overflow: 'hidden' }]} 
      resizeMode='contain' 
      source={{ uri: sprite(results) }} 
    />
  );
};

const styles = StyleSheet.create({});

export default ShinyFrontSprite;