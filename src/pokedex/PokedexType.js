import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import checkType from '../components/functions/checkType';

import { Ionicons } from '@expo/vector-icons';

const PokedexType = ({ results, fontSize }) => {
  return (
    <View style={[styles.container, { backgroundColor: checkType(results.identifier) }]}>
      <View style={[styles.typeBox, { backgroundColor: checkType(results.identifier) }]}>
        <Text allowFontScaling={false} style={[styles.typeText, {fontSize: fontSize}]}>{results.identifier.replaceAll('-', ' ')}</Text>
      </View>
      <Ionicons style={styles.icon} name="ios-chevron-forward-sharp" size={18} color="#fff" />  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 12,
    marginBottom: 4,
    borderRadius: 10
  },
  typeBox: {
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: '#000000',
    margin: 7,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1
  },
  typeText: {
    color: 'rgb(223, 223, 223)',
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3,
    textShadowColor: 'rgb(0, 0, 0)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
    textTransform: 'capitalize',
  },
  icon: {
    paddingHorizontal: 12,
    textShadowColor: 'rgb(0, 0, 0)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
  }
});

export default React.memo(PokedexType);
