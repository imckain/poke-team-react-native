import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const TeamsNavigator = () => {

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name='pokeball' size={26} color='#fff' />
      <View style={styles.labelContainer}>
        <Text allowFontScaling={false} style={styles.label}>View Teams</Text>
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
    // paddingVertical: 8
  },
  label: {
    fontSize: 26,
    fontWeight: '600',
    color: '#fff',
    textShadowColor: '#535353d3',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  labelContainer: {
    paddingVertical: 8,
    borderBottomColor: '#ffffff18',
    borderBottomWidth: 1,
    marginLeft: 12,
    flex: 1,
  }
});

export default TeamsNavigator;