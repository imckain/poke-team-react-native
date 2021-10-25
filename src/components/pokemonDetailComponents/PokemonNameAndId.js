import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const PokemonNameAndId = ({ results, fontSize, lines }) => {
  return (
    <View style={{width: '90%', flexDirection: 'column', justifyContent: 'center', alignSelf: 'center', paddingHorizontal: 12}}>
      <Text adjustsFontSizeToFit={true} allowFontScaling={false} numberOfLines={lines} style={[styles.name, {fontSize: fontSize}]}>{results.name.replaceAll('-', ' ')}</Text>
      <Text style={[styles.id]}>{results.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'capitalize',
    marginTop: 6
  },
  id: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default PokemonNameAndId;
