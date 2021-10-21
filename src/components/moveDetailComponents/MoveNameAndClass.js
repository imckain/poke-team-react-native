import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import checkType from '../functions/checkType';

const MoveNameAndClass = ({ results, fontSize, alignSelf }) => {
  const isValid = (el) => {
    if (el.damage_class === null) {
      return 'N/A'
    } else return el.damage_class.name
  }

  return (
    <View style={[styles.dmgClassView, { alignSelf: alignSelf }]}>
      <Text allowFontScaling={false} style={[styles.name, { fontSize: fontSize, alignSelf: alignSelf, color: checkType(results.type.name) }]}>{results.name.replace('-', ' ')}</Text>
      <Text allowFontScaling={false} style={[styles.damageClass, { alignSelf: alignSelf }]}>Damage Class:  <Text style={styles.damageClassSub}>{isValid(results)}</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dmgClassView: {
    paddingTop: 8,
    paddingBottom: 6,
    width: '100%',
    height: 'auto',
  },
  name: {
    color: '#fff',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.712)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
    alignSelf: 'center',
    textTransform: 'capitalize',
  },
  damageClass: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.712)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
    paddingBottom: 6,
  },
  damageClassSub: {
    color: 'rgb(223, 223, 223)',
    fontSize: 16,
    fontWeight: '400',
    textShadowColor: 'rgba(0, 0, 0, 0.712)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
    textTransform: 'capitalize',
  },
});

export default MoveNameAndClass;
