import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const AdvancedSearchNavigator = () => {

  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.label}>Advanced Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    backgroundColor: '#CFCFCF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 15
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

export default AdvancedSearchNavigator;