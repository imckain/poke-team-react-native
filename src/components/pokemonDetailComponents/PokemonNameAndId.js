import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const PokemonNameAndId = ({ results, fontSize }) => {
  return (
    <View style={{width: '100%' ,flexDirection: 'column', justifyContent: 'center'}}>
      <Text adjustsFontSizeToFit={true} allowFontScaling={false} style={[styles.name, {fontSize: fontSize}]}>{results.name.replace('-', ' ')}</Text>
      <Text style={[styles.id, {color: 'rgba(255, 255, 255, 0.5)'}]}>{results.id}</Text>
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
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6
  },
});

export default PokemonNameAndId;
