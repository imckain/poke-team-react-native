import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MoveNameAndClass = ({ results }) => {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const isValid = (el) => {
    if (el.damage_class === null) {
      return 'N/A'
    } else return Capitalize(el.damage_class.name)
  }

  return (
    <View style={styles.dmgClassView}>
      <Text allowFontScaling={false} style={[styles.name]}>{Capitalize(results.name)}</Text>
      <Text allowFontScaling={false} style={[styles.damageClass]}>Damage Class:  <Text style={styles.damageClassSub}>{isValid(results)}</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '600',
    marginVertical: 8,
    marginHorizontal: 12,
  },
  dmgClassView: {
    marginBottom: 10,
  },
  damageClass: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    marginHorizontal: 12
  },
  damageClassSub: {
    color: 'rgb(223, 223, 223)',
    fontSize: 20,
    fontWeight: '400',
    marginHorizontal: 12
  },
});

export default MoveNameAndClass;
