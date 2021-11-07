import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import checkType from '../functions/checkType';

const TypeShowOnCard = ({ results, margin, detailFontSize }) => {

  const showType = (el) => {
    const typeBox = el.types.map(item => {      
      return (
        <View key={item.type.name} style={[styles.typeBox, { backgroundColor: checkType(item.type.name) }]}>
          <Text adjustsFontSizeToFit={true} numberOfLines={1} style={[styles.typeText, { fontSize: detailFontSize }]}>{item.type.name}</Text>
        </View>
      )
    })
    return typeBox
  }

  return (
    <View style={[styles.typeContainer, { marginBottom: margin }]}>
      {showType(results)}
    </View>
  );
};

const styles = StyleSheet.create({
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 7,
  },
  typeBox: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#464450',
    marginLeft: 7,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 70
  },
  typeText: {
    color: 'rgb(223, 223, 223)',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
    textShadowColor: 'rgb(0, 0, 0)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 4,
    textTransform: 'capitalize',
  },
});

export default TypeShowOnCard;