import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const PokedexNameAndId = ({ results, fontSize }) => {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={styles.container}>
      <Image resizeMode='contain' style={styles.image} source={require('../../assets/pokeball.png')} />
      <Text allowFontScaling={false} style={[styles.name, {fontSize: fontSize}]}>{Capitalize(results.identifier)} <Ionicons name="ios-chevron-forward-sharp" size={24} color="rgb(175, 175, 175)" /> #{results.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  name: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 26,
    fontWeight: '600',
    marginVertical: 8,
    marginHorizontal: 12
  },
  image: {
    marginRight: 12,
    marginLeft: 7,
    marginBottom: 3,
    width: 40,
    height: 40,
  }
});

export default React.memo(PokedexNameAndId);
