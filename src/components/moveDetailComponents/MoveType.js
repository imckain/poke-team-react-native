import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MoveType = ({ results }) => {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const isValid = (el) => {
    if (el.type === null) {
      return 'N/A'
    } else return Capitalize(el.type.name)
  }

  return (
    <View style={styles.typeView}>
      <Text allowFontScaling={false} style={[styles.type]}>Type:  <Text style={styles.typeSub}>{isValid(results)}</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  typeView: {
    marginBottom: 10,
  },
  type: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    marginHorizontal: 12
  },
  typeSub: {
    color: 'rgb(223, 223, 223)',
    fontSize: 18,
    fontWeight: '400',
    marginHorizontal: 12
  },
});

export default MoveType;