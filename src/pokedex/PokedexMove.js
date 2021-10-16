import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const PokedexMove = ({ results, fontSize }) => {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={[styles.name, {fontSize: fontSize}]}>{Capitalize(results.identifier)}  </Text>
      <Text allowFontScaling={false} style={styles.attributes}> Power: {results.power} | PP: {results.pp} | Acc: {results.accuracy}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    marginHorizontal: 12,
    alignItems: 'baseline',
    flexDirection: 'column'
  },
  name: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '600',
  },
  attributes: {
    paddingVertical: 2,
    color: 'rgb(175, 175, 175)',
    fontSize: 14,
  },
});

export default React.memo(PokedexMove);
