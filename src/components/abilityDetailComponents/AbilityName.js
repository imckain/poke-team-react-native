import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const AbilityName = ({ results }) => {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={styles.nameView}>
      <Text allowFontScaling={false} style={[styles.name]}>{Capitalize(results.name)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '600',
    marginVertical: 8,
    marginHorizontal: 12,
  },
});

export default AbilityName;
