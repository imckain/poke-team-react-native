import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Collapsible from 'react-native-collapsible';

import { Entypo } from '@expo/vector-icons';

const ModalBaseStats = ({ results, headerFontSize, detailFontSize, margin }) => {
  const [collapsed, setCollapsed] = useState(true);

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <View style={styles.headerWrapper}>
          <Pressable style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}} onPressIn={() => setCollapsed(false)}>
            <Text allowFontScaling={false} style={[styles.baseStatHeaderText, { fontSize: headerFontSize }]}>Base Stats</Text>  
            <Entypo name="plus" size={22} color="rgb(175, 175, 175)" />
          </Pressable>
        </View>
      )
    } if (el === false) {
      return(
        <View style={styles.headerWrapper}>
          <Pressable style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}} onPressIn={() => setCollapsed(true)}>
            <Text allowFontScaling={false} style={[styles.baseStatHeaderText, { fontSize: headerFontSize }]}>Base Stats</Text>  
            <Entypo name="minus" size={22} color="rgb(175, 175, 175)" />
          </Pressable>
        </View>
      )
    }
  }, []);

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={[styles.container, {marginBottom: margin}]}>
      {checkForCollapse(collapsed)}
      <View style={styles.infoContainer}>
        <Collapsible style={{paddingBottom: 12}} collapsed={collapsed}>
          <View style={styles.baseStatContainer}>
            <Text allowFontScaling={false} style={[styles.baseStatNameText, {fontSize: detailFontSize}]}>{Capitalize(results.stats[0].stat.name)}:</Text>
            <Text allowFontScaling={false} style={[styles.baseStatText, {fontSize: detailFontSize}]}>{results.stats[0].base_stat}</Text>
          </View>
          <View style={styles.baseStatContainer}>
            <Text allowFontScaling={false} style={[styles.baseStatNameText, {fontSize: detailFontSize}]}>{Capitalize(results.stats[1].stat.name)}:</Text>
            <Text allowFontScaling={false} style={[styles.baseStatText, {fontSize: detailFontSize}]}>{results.stats[1].base_stat}</Text>
          </View>
          <View style={styles.baseStatContainer}>
            <Text allowFontScaling={false} style={[styles.baseStatNameText, {fontSize: detailFontSize}]}>{Capitalize(results.stats[2].stat.name)}:</Text>
            <Text allowFontScaling={false} style={[styles.baseStatText, {fontSize: detailFontSize}]}>{results.stats[2].base_stat}</Text>
          </View>
          <View style={styles.baseStatContainer}>
            <Text allowFontScaling={false} style={[styles.baseStatNameText, {fontSize: detailFontSize}]}>{Capitalize(results.stats[3].stat.name)}:</Text>
            <Text allowFontScaling={false} style={[styles.baseStatText, {fontSize: detailFontSize}]}>{results.stats[3].base_stat}</Text>
          </View>
          <View style={styles.baseStatContainer}>
            <Text allowFontScaling={false} style={[styles.baseStatNameText, {fontSize: detailFontSize}]}>{Capitalize(results.stats[4].stat.name)}:</Text>
            <Text allowFontScaling={false} style={[styles.baseStatText, {fontSize: detailFontSize}]}>{results.stats[4].base_stat}</Text>
          </View>
          <View style={styles.baseStatContainer}>
            <Text allowFontScaling={false} style={[styles.baseStatNameText, {fontSize: detailFontSize}]}>{Capitalize(results.stats[5].stat.name)}:</Text>
            <Text allowFontScaling={false} style={[styles.baseStatText, {fontSize: detailFontSize}]}>{results.stats[5].base_stat}</Text>
          </View>
        </Collapsible>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: '#464450a6',
    paddingVertical: 5,
  },
  infoContainer: {
    width: '100%',
    paddingHorizontal: 24,
  },
  baseStatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 3,
    borderBottomColor: '#ffffff81',
    borderBottomWidth: 1,
  },
  headerWrapper: {
    width: '100%',
    paddingHorizontal: 12
  },
  baseStatHeaderText: {
    color: '#fff',
    fontWeight: '600'
  },
  baseStatNameText: {
    color: '#fff',
  },
  baseStatText: {
    color: '#fff',
    alignSelf: 'flex-end',
    fontWeight: '600',
  },
});

export default ModalBaseStats;