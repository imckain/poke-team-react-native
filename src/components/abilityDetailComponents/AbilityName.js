import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const AbilityName = ({ results }) => {
  return (
    <View style={styles.nameView}>
      <Text allowFontScaling={false} style={[styles.name]}>{results.name.replace('-', ' ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    color: '#fff',
    fontSize: 38,
    fontWeight: '600',
    marginVertical: 8,
    alignSelf: 'center',
    marginBottom: 12,
    textTransform: 'capitalize',
  },
});

export default AbilityName;
