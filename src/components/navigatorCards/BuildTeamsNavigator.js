import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BuildTeamsNavigator = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Build a Team</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: 140,
    backgroundColor: '#ff0000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginVertical: 15
  },
  label: {
    padding: 15,
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    textShadowColor: '#535353d3',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12
  },
});

export default BuildTeamsNavigator;