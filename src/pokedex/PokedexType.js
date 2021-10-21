import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import checkType from '../components/functions/checkType';

import { Ionicons } from '@expo/vector-icons';

const PokedexType = ({ results, fontSize }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.typeBox, { backgroundColor: checkType(results.identifier) }]}>
        <Text allowFontScaling={false} style={[styles.typeText, {fontSize: fontSize}]}>{results.identifier}</Text>
      </View>
      <Ionicons style={{ paddingHorizontal: 12 }} name="ios-chevron-forward-sharp" size={18} color="rgb(175, 175, 175)" />  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: '100%'
  },
  typeBox: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 10,
    backgroundColor: '#464450',
    margin: 7,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 'auto'
  },
  typeText: {
    color: 'rgb(223, 223, 223)',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3,
    textShadowColor: 'rgb(0, 0, 0)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
    textTransform: 'capitalize',
  },
});

export default React.memo(PokedexType);
