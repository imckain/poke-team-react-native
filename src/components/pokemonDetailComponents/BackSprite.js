import React from 'react';
import { StyleSheet, Image } from 'react-native';

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
      style={{ width: width, height: height }} 
      resizeMode='contain' 
      source={{ uri: sprite(results) }} 
    />
  );
};

const styles = StyleSheet.create({});

export default BackSprite;