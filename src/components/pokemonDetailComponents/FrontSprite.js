import React from 'react';
import { StyleSheet, Image } from 'react-native';

const FrontSprite = ({ results, width, height }) => {

  return (
    <Image style={[styles.imageStyle, { width: width, height: height }]} source={{ uri: results.sprites.front_default }} />
  );
};

const styles = StyleSheet.create({
  imageStyle: {
  }
});

export default FrontSprite;