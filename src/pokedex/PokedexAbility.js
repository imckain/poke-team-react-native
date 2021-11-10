import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const PokedexAbility = ({ results, fontSize }) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <Text allowFontScaling={false} adjustsFontSizeToFit={true} numberOfLines={1} style={[styles.name, {fontSize: fontSize}]}>{results.identifier.replaceAll('-', ' ')}</Text>
      </View>
      <Ionicons style={{}} name="ios-chevron-forward-sharp" size={18} color="rgb(175, 175, 175)" />  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottomColor: 'rgb(175, 175, 175)',
    borderBottomWidth: 1,
  },
  name: {
    marginVertical: 6,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});

export default React.memo(PokedexAbility);
