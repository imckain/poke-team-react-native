import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const AbilityShortEffect = ({ results }) => {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const checkLanguage = (el) => {
    const filter = el.effect_entries.filter((item) => item.language.name === 'en')
    console.log(filter);
    return filter[0].short_effect
  }

  return (
    <View style={styles.nameView}>
      <Text style={[styles.name]}>{checkLanguage(results)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nameView: {
    marginBottom: 10,
  },
  name: {
    color: 'rgb(223, 223, 223)',
    fontSize: 18,
    fontWeight: '400',
    marginHorizontal: 12,
  },
});

export default AbilityShortEffect;
