import React from 'react';
import { StyleSheet, Image } from 'react-native';

const FrontSprite = ({ results, width, height }) => {
  const sprite = (el) => {
    if (el.sprites.versions["generation-v"]["black-white"].animated.front_default === null) {
      return el.sprites.front_default
    } else {
      return el.sprites.versions["generation-v"]["black-white"].animated.front_default
    }
  }

  return (
    <Image 
      style={{ width: width, height: height, overflow: 'hidden' }} 
      resizeMode='contain' 
      source={{ uri: sprite(results) }} 
    />
  );
};

const styles = StyleSheet.create({});

export default FrontSprite;