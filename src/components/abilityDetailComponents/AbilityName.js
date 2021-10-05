import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const AbilityName = ({ results }) => {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={styles.nameView}>
      <Text style={[styles.name]}>{Capitalize(results.name)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nameView: {
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '600',
    marginVertical: 8,
    marginHorizontal: 12,
  },
});

export default AbilityName;
