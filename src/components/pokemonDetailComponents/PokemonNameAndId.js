import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const PokemonNameAndId = ({ results, fontSize }) => {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={{width: '100%' ,flexDirection: 'column', justifyContent: 'center'}}>
      <Text adjustsFontSizeToFit={true} allowFontScaling={false} style={[styles.name, {fontSize: fontSize}]}>{Capitalize(results.name.replace('-', ' '))}</Text>
      <Text style={[styles.name, {color: 'rgba(255, 255, 255, 0.5)'}]}>{results.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    // marginBottom: 12
  },
});

export default PokemonNameAndId;
