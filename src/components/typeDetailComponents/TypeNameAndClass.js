import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import checkType from '../functions/checkType';

const TypeName = ({ results, alignSelf, fontSize }) => {
  const isValid = (el) => {
    if (el.move_damage_class === null) {
      return 'N/A'
    } else return el.move_damage_class.name
  }

  return (
    <View style={[styles.dmgClassView, { alignSelf: alignSelf }]}>
      <Text allowFontScaling={false} style={[styles.name, { fontSize: fontSize, alignSelf: alignSelf, color: checkType(results.name) }]}>{results.name}</Text>
      <Text allowFontScaling={false} style={[styles.damageClass]}>Damage Class:  <Text style={styles.damageClassSub}>{isValid(results)}</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dmgClassView: {
    marginBottom: 10,
    alignSelf: 'center',
    marginBottom: 12,
  },
  name: {
    color: '#fff',
    fontWeight: '600',
    marginVertical: 8,
    alignSelf: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.712)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
    textTransform: 'capitalize',
  },
  damageClass: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.712)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
  },
  damageClassSub: {
    color: 'rgb(223, 223, 223)',
    fontSize: 16,
    fontWeight: '400',
    marginHorizontal: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.712)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
    textTransform: 'capitalize',
  },
});

export default TypeName;
