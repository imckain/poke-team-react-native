import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import checkType from '../components/functions/checkType';

const PokedexMove = ({ results, fontSize }) => {
  const checkForNull = (el) => {
    if (el === null) return 'N/A'
    else return el
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'column', paddingHorizontal: 12, paddingVertical: 4}}>
        <Text allowFontScaling={false} style={[styles.name, {fontSize: fontSize, color: checkType(results.type_id)}]}>{results.identifier.replace('-', ' ')}</Text>
        <Text allowFontScaling={false} style={styles.attributes}>Power: {checkForNull(results.power)} | PP: {checkForNull(results.pp)} | Acc: {checkForNull(results.accuracy)}</Text>
      </View>
      <Ionicons style={{ paddingHorizontal: 12 }} name="ios-chevron-forward-sharp" size={18} color="rgb(175, 175, 175)" />  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  name: {
    color: '#fff',
    fontWeight: '600',
    textShadowColor: 'rgb(34, 34, 34)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
    textTransform: 'capitalize',
  },
  attributes: {
    color: 'rgb(175, 175, 175)',
    fontSize: 14,
    paddingLeft: 12,
  },
});

export default React.memo(PokedexMove);
