import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const AbilityEffect = ({ results }) => {

  const checkLanguage = (el) => {
    if (el.effect_entries[0] === null) return 'N/A'
    if (el.effect_entries[0] !== undefined) {
      const filter = el.effect_entries.filter((item) => item.language.name === 'en')
      return filter[0].effect
    } 
    if (el.effect_entries[0] === undefined) {
      if (el.flavor_text_entries[0] === null) {
        const filter = el.flavor_text_entries.filter((item) => item.language.name === 'en')
        return filter[0].flavor_text
      } else return 'Description not available'
    }
  }

  return (
    <View style={styles.nameView}>
      <Text allowFontScaling={false} style={[styles.name]}>{checkLanguage(results)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nameView: {
    marginBottom: 12,
  },
  name: {
    color: 'rgb(223, 223, 223)',
    fontSize: 22,
    fontWeight: '400',
    marginHorizontal: 12,
  },
});

export default AbilityEffect;
