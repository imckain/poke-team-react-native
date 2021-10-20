import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MoveAttributes = ({ results, fontSize, alignSelf }) => {

  const checkForNull = (el) => {
    if (el === null) return 'N/A'
    else return el
  }

  return (
    <View style={[styles.container, { alignSelf: alignSelf }]}>
      <Text allowFontScaling={false} style={[styles.attributes, { fontSize: fontSize }]}>Power: {checkForNull(results.power)} | PP: {checkForNull(results.pp)} | Acc: {checkForNull(results.accuracy)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'baseline',
    flexDirection: 'column',
    marginBottom: 12
  },
  attributes: {
    color: 'rgb(175, 175, 175)',
    fontSize: 14,
  },
});

export default React.memo(MoveAttributes);
