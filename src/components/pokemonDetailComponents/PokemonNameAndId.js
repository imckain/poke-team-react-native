import React from 'react';
import { Text, StyleSheet } from 'react-native';

const PokemonNameAndId = ({ results, fontSize }) => {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <Text adjustsFontSizeToFit={true} allowFontScaling={false} style={[styles.name, {fontSize: fontSize}]}>{Capitalize(results.name.replace('-', ' '))} #{results.id}</Text>
  );
};

const styles = StyleSheet.create({
  name: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 8,
    marginHorizontal: 12
  },
});

export default PokemonNameAndId;
