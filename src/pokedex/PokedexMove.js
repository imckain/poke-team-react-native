import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const PokedexNameAndId = ({ results, fontSize }) => {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.name]}>{Capitalize(results.identifier)}  </Text>
      <Text style={styles.attributes}> Power: {results.power} | PP: {results.pp} | Acc: {results.accuracy}</Text>
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
    fontSize: 16,
  },
});

export default React.memo(PokedexNameAndId);
