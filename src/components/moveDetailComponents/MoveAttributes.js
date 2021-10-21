import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MoveAttributes = ({ results, fontSize, alignSelf }) => {

  const checkForNull = (el) => {
    if (el === null) return 'N/A'
    else return el
  }

  return (
    <View style={[styles.container, { alignSelf: alignSelf }]}>
      <Text allowFontScaling={false} style={[styles.attributes, { fontSize: fontSize }]}>Power: <Text style={styles.attributeResult}>{checkForNull(results.power)}</Text> | PP: <Text style={styles.attributeResult}>{checkForNull(results.pp)}</Text> | Acc: <Text style={styles.attributeResult}>{checkForNull(results.accuracy)}</Text></Text>
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
    color: '#fff',
    fontSize: 14,
    textShadowColor: 'rgba(0, 0, 0, 0.712)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
    fontWeight: '500'
  },
  attributeResult: {
    color: 'rgb(223, 223, 223)',
    fontWeight: '400'
  },
});

export default React.memo(MoveAttributes);
