import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import checkType from '../components/functions/checkType';

import { Ionicons } from '@expo/vector-icons';

const PokedexType = ({ results, fontSize }) => {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <Text allowFontScaling={false} style={[styles.name, {fontSize: fontSize, color: checkType(results.identifier) }]}>{Capitalize(results.identifier)}</Text>
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
  name: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    marginHorizontal: 12,
    marginVertical: 6,
    textShadowColor: 'rgb(34, 34, 34)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
  },
});

export default React.memo(PokedexType);
