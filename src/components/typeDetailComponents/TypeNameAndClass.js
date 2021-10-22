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
      <View style={[styles.typeBox, { alignSelf: alignSelf, backgroundColor: checkType(results.name)}]}>
        <Text allowFontScaling={false} style={[styles.typeText, { fontSize: fontSize, alignSelf: alignSelf }]}>{results.name}</Text>
      </View>
      <Text allowFontScaling={false} style={[styles.damageClass]}>Damage Class:  <Text style={styles.damageClassSub}>{isValid(results)}</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dmgClassView: {
    paddingVertical: 12,
    alignSelf: 'center',
  },
  damageClass: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.712)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
  },
  damageClassSub: {
    color: 'rgb(223, 223, 223)',
    fontSize: 20,
    fontWeight: '400',
    textShadowColor: 'rgba(0, 0, 0, 0.712)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
    textTransform: 'capitalize',
  },
  typeBox: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginBottom: 6,
    width: '100%'
  },
  typeText: {
    color: '#fff',
    fontWeight: '600',
    paddingHorizontal: 12,
    paddingVertical: 3,
    textShadowColor: 'rgb(0, 0, 0)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
    textTransform: 'capitalize',
  },
});

export default TypeName;
