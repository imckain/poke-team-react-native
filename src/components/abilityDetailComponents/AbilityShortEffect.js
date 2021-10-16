import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const AbilityShortEffect = ({ results }) => {

  const checkLanguage = (el) => {
    const filter = el.effect_entries.filter((item) => item.language.name === 'en')
    return filter[0].short_effect
  }

  return (
    <View style={styles.nameView}>
      <Text allowFontScaling={false} style={[styles.name]}>{checkLanguage(results)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nameView: {
    marginBottom: 10,
  },
  name: {
    color: 'rgb(223, 223, 223)',
    fontSize: 16,
    fontWeight: '400',
    marginHorizontal: 12,
  },
});

export default AbilityShortEffect;
