import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const MoveAttributes = ({ results, fontSize }) => {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.attributes}> Power: {results.power} | PP: {results.pp} | Acc: {results.accuracy}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    alignItems: 'baseline',
    flexDirection: 'column'
  },
  attributes: {
    color: 'rgb(175, 175, 175)',
    fontSize: 18,
  },
});

export default React.memo(MoveAttributes);
