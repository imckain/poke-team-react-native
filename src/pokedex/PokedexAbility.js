import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const PokedexAbility = ({ results, fontSize }) => {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <Text allowFontScaling={false} style={[styles.name, {fontSize: fontSize}]}>{Capitalize(results.identifier.replace('-', ' '))}</Text>
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
    marginHorizontal: 12,
    marginVertical: 6,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
});

export default React.memo(PokedexAbility);
