import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const AbilityName = ({ results, alignSelf, fontSize }) => {
  return (
    <View style={styles.nameView}>
      <Text allowFontScaling={false} style={[styles.name, { alignSelf: alignSelf, fontSize: fontSize }]}>{results.name.replaceAll('-', ' ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    color: '#fff',
    fontSize: 38,
    fontWeight: '600',
    marginVertical: 8,
    marginBottom: 12,
    textTransform: 'capitalize',
  },
});

export default AbilityName;
