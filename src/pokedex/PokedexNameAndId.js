import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const PokedexNameAndId = ({ results, fontSize, numFontSize }) => {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <Text style={[styles.name, {fontSize: numFontSize, color: 'rgba(255, 255, 255, 0.5)'}]}>{results.id}</Text>
        <Text allowFontScaling={false} style={[styles.name, {fontSize: fontSize }]}>{Capitalize(results.identifier.replace('-', ' '))}</Text> 
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
    color: '#fff',
    fontSize: 26,
    fontWeight: '600',
    paddingHorizontal: 12,
    marginVertical: 6
  },
});

export default React.memo(PokedexNameAndId);
