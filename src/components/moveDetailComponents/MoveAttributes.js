import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MoveAttributes = ({ results, fontSize }) => {

  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={[styles.attributes, { fontSize: fontSize }]}> Power: {results.power} | PP: {results.pp} | Acc: {results.accuracy}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    alignItems: 'baseline',
    flexDirection: 'column',
    marginBottom: 15
  },
  attributes: {
    color: 'rgb(175, 175, 175)',
    fontSize: 14,
  },
});

export default React.memo(MoveAttributes);
