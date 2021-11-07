import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const PokedexNameAndId = ({ results, fontSize, numFontSize }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.id, { fontSize: numFontSize }]}>{results.id}</Text>
      <View style={styles.labelContainer}>
        <View style={styles.nameContainer}>
          <Text allowFontScaling={false} adjustsFontSizeToFit={true} numberOfLines={1} style={[styles.name, { fontSize: fontSize }]}>{results.identifier.replaceAll('-', ' ')}</Text> 
        </View>
        <Ionicons style={{ }} name="ios-chevron-forward-sharp" size={18} color="rgb(175, 175, 175)" />  
      </View>
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
  labelContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#ffffff18',
    borderBottomWidth: 1,
    marginLeft: 12,
    flex: 1,
  },
  nameContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    width: '70%'
  },
  name: {
    color: '#fff',
    fontWeight: '600',
    marginVertical: 6,
    textTransform: 'capitalize',
  },
  id: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: '600',
    paddingHorizontal: 12,
    marginVertical: 6,
    textTransform: 'capitalize',
  },
});

export default React.memo(PokedexNameAndId);
