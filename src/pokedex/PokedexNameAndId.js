import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const PokedexNameAndId = ({ results, fontSize, numFontSize }) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', width: '70%'}}>
        <Text style={[styles.name, {fontSize: numFontSize, color: 'rgba(255, 255, 255, 0.5)'}]}>{results.id}</Text>
        <Text allowFontScaling={false} adjustsFontSizeToFit={true} numberOfLines={1} style={[styles.name, { fontSize: fontSize }]}>{results.identifier.replaceAll('-', ' ')}</Text> 
      </View>
      <Ionicons style={{ paddingHorizontal: 12 }} name="ios-chevron-forward-sharp" size={18} color="rgb(175, 175, 175)" />  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  name: {
    color: '#fff',
    fontWeight: '600',
    paddingHorizontal: 12,
    marginVertical: 6,
    textTransform: 'capitalize',
  },
});

export default React.memo(PokedexNameAndId);
