import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Entypo, Ionicons } from '@expo/vector-icons';

const BuildTeamsNavigator = (props) => {

  return (
    <View style={[styles.container]}>
      <Entypo name="squared-plus" size={32} color='#fff' />
      <View style={styles.labelContainer}>
        <Text allowFontScaling={false} style={styles.label}>Build Teams</Text>
        <Ionicons style={styles.icon} name="ios-chevron-forward-sharp" size={18} color="rgba(105, 105, 105, 0.6)" />  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
    marginBottom: 6,
  },
  label: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    textShadowColor: '#535353d3',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  labelContainer: {
    paddingVertical: 1,
    borderBottomColor: 'rgba(105, 105, 105, 0.6)',
    borderBottomWidth: 1,
    marginLeft: 12,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default BuildTeamsNavigator;