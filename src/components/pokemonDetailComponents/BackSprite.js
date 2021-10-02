import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const BackSprite = ({ results, width, height }) => {

  return (
    <Image style={[styles.imageStyle, { width: width, height: height }]} source={{ uri: results.sprites.back_default }} />
  );
};

const styles = StyleSheet.create({
  imageStyle: {
  }
});

export default BackSprite;