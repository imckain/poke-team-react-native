import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MoveNameAndClass = ({ results, fontSize, alignSelf }) => {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const isValid = (el) => {
    if (el.damage_class === null) {
      return 'N/A'
    } else return Capitalize(el.damage_class.name)
  }

  return (
    <View style={[styles.dmgClassView, { alignSelf: alignSelf }]}>
      <Text allowFontScaling={false} style={[styles.name, { fontSize: fontSize, alignSelf: alignSelf }]}>{Capitalize(results.name.replace('-', ' '))}</Text>
      <Text allowFontScaling={false} style={[styles.damageClass]}>Damage Class:  <Text style={styles.damageClassSub}>{isValid(results)}</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    color: '#fff',
    fontWeight: '600',
    marginVertical: 8,
    alignSelf: 'center'
  },
  dmgClassView: {
    marginBottom: 10,
    alignSelf: 'center',
    marginBottom: 12,
  },
  damageClass: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  damageClassSub: {
    color: 'rgb(223, 223, 223)',
    fontSize: 16,
    fontWeight: '400',
    marginHorizontal: 12
  },
});

export default MoveNameAndClass;
