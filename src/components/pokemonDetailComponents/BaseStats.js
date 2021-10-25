import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BaseStats = ({ results, detailFontSize }) => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.baseStatContainer}>
        <Text allowFontScaling={false} adjustsFontSizeToFit={true} style={[styles.baseStatNameText, {fontSize: detailFontSize}]}>{results.stats[0].stat.name.replaceAll('-', ' ')}:</Text>
        <Text allowFontScaling={false} adjustsFontSizeToFit={true} style={[styles.baseStatText, {fontSize: detailFontSize}]}>{results.stats[0].base_stat}</Text>
      </View>
      <View style={styles.baseStatContainer}>
        <Text allowFontScaling={false} adjustsFontSizeToFit={true} style={[styles.baseStatNameText, {fontSize: detailFontSize}]}>{results.stats[1].stat.name.replaceAll('-', ' ')}:</Text>
        <Text allowFontScaling={false} adjustsFontSizeToFit={true} style={[styles.baseStatText, {fontSize: detailFontSize}]}>{results.stats[1].base_stat}</Text>
      </View>
      <View style={styles.baseStatContainer}>
        <Text allowFontScaling={false} adjustsFontSizeToFit={true} style={[styles.baseStatNameText, {fontSize: detailFontSize}]}>{results.stats[2].stat.name.replaceAll('-', ' ')}:</Text>
        <Text allowFontScaling={false} adjustsFontSizeToFit={true} style={[styles.baseStatText, {fontSize: detailFontSize}]}>{results.stats[2].base_stat}</Text>
      </View>
      <View style={styles.baseStatContainer}>
        <Text allowFontScaling={false} adjustsFontSizeToFit={true} style={[styles.baseStatNameText, {fontSize: detailFontSize}]}>{results.stats[3].stat.name.replace('special-', 'SP ')}:</Text>
        <Text allowFontScaling={false} adjustsFontSizeToFit={true} style={[styles.baseStatText, {fontSize: detailFontSize}]}>{results.stats[3].base_stat}</Text>
      </View>
      <View style={styles.baseStatContainer}>
        <Text allowFontScaling={false} adjustsFontSizeToFit={true} style={[styles.baseStatNameText, {fontSize: detailFontSize}]}>{results.stats[4].stat.name.replace('special-', 'SP ')}:</Text>
        <Text allowFontScaling={false} adjustsFontSizeToFit={true} style={[styles.baseStatText, {fontSize: detailFontSize}]}>{results.stats[4].base_stat}</Text>
      </View>
      <View style={styles.baseStatContainer}>
        <Text allowFontScaling={false} adjustsFontSizeToFit={true} style={[styles.baseStatNameText, {fontSize: detailFontSize}]}>{results.stats[5].stat.name.replaceAll('-', ' ')}:</Text>
        <Text allowFontScaling={false} adjustsFontSizeToFit={true} style={[styles.baseStatText, {fontSize: detailFontSize}]}>{results.stats[5].base_stat}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    width: '100%',
    paddingHorizontal: 7
  },
  baseStatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 3,
    borderBottomColor: '#ffffff81',
    borderBottomWidth: 1,
  },
  baseStatHeaderText: {
    color: '#fff',
    fontWeight: '600'
  },
  baseStatNameText: {
    color: '#fff',
    textTransform: 'capitalize',
  },
  baseStatText: {
    color: '#fff',
    alignSelf: 'flex-end',
    fontWeight: '600',
  },
});

export default BaseStats;