import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import checkType from '../functions/checkType';

const MoveNameAndClass = ({ results, fontSize, alignSelf, param }) => {
  const isValid = (el) => {
    if (el.damage_class === null) {
      return 'N/A'
    } else return el.damage_class.name
  }

  const showType = (el) => {
    if (el === 'card') {
      return (
        <View style={[styles.typeBox, { backgroundColor: checkType(results.type.name) }]}>
          <Text allowFontScaling={false} style={[styles.typeText]}>{results.type.name}</Text>
        </View>
      )
    }
  }

  return (
    <View style={[styles.dmgClassView, { alignSelf: alignSelf }]}>
      <View style={{ flexDirection: 'row', marginBottom: 6, alignSelf: alignSelf }}>
        <Text allowFontScaling={false} style={[styles.name, { fontSize: fontSize, alignSelf: alignSelf }]}>{results.name.replace('-', ' ')}</Text>
        {showType(param)}
      </View>
      <Text allowFontScaling={false} style={[styles.damageClass, { alignSelf: alignSelf }]}>Damage Class:  <Text style={styles.damageClassSub}>{isValid(results)}</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dmgClassView: {
    paddingTop: 8,
    paddingBottom: 6,
    width: 'auto',
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
  typeBox: {
    borderRadius: 10,
    backgroundColor: '#464450',
    marginLeft: 12,
    justifyContent: 'center',
    width: 'auto',
    height: 'auto',
  },
  typeText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    textShadowColor: 'rgb(0, 0, 0)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 4,
    textTransform: 'capitalize',
  },
});

export default MoveNameAndClass;
