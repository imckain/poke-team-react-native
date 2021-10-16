import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TypeDetail = ({ results, margin, headerFontSize, detailFontSize }) => {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={[styles.typeContainer, { marginBottom: margin }]}>
      <Text allowFontScaling={false} style={[styles.typeLabelText, { fontSize: headerFontSize }]}>Type:</Text>
      <Text allowFontScaling={false} style={[styles.typeText, { fontSize: detailFontSize }]}>{results.types.map(el => Capitalize(el.type.name) + ' ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  typeLabelText: {
    color: '#fff',
    marginTop: 7,
    fontWeight: '600'
  },
  typeText: {
    color: '#fff',
    marginLeft: 7,
  },
});

export default TypeDetail;