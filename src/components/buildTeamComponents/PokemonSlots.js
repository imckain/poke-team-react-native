import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const PokemonSlots = ({ results, fontSize }) => {
  
  const isValid = (el) => {
    if (el.name !== undefined) {
      <Text allowFontScaling={false} style={[styles.name, {fontSize: fontSize}]}>{results.name.replaceAll('-', ' ')} <Ionicons name="ios-chevron-forward-sharp" size={24} color="rgb(175, 175, 175)" /> #{results.id}</Text>
    } else return <Text allowFontScaling={false} style={[styles.emptyName, {fontSize: fontSize}]}> Empty Slot</Text>
  }
  
  return (
    <View style={styles.container}>
      <Image resizeMode='contain' style={styles.image} source={require('../../../assets/pokeball.png')} />
      {isValid(results)}
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
    fontSize: 32,
    fontWeight: '600',
    marginVertical: 12,
    marginHorizontal: 12,
    textTransform: 'capitalize',
  },
  emptyName: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontStyle: 'italic',
    marginVertical: 12,
    marginHorizontal: 12
  },
  image: {
    marginRight: 12,
    marginLeft: 7,
    marginBottom: 3,
    width: 38,
    height: 38,
  }
});

export default React.memo(PokemonSlots);
