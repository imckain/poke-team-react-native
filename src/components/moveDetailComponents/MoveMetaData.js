import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Collapsible from 'react-native-collapsible';

import { Entypo } from '@expo/vector-icons';

const MoveMetaData = ({ results }) => {
  const [collapsed, setCollapsed] = useState(true);

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <Pressable onPressIn={() => setCollapsed(false)}>
          <Text allowFontScaling={false} style={[styles.metaDataHeaderText]}>Meta Data:  <Entypo name="triangle-right" size={16} color="rgb(175, 175, 175)" /></Text>
        </Pressable>
      )
    } if (el === false) {
      return(
        <Pressable onPressIn={() => setCollapsed(true)}>
          <Text allowFontScaling={false} style={[styles.metaDataHeaderText]}>Meta Data:  <Entypo name="triangle-down" size={16} color="rgb(175, 175, 175)" /></Text>
        </Pressable>
      )
    }
  }, []);

  const checkForNull = (el) => {
    if (el.meta === null) {
      return <Text allowFontScaling={false} style={styles.subHeaderText}>Meta Data Not Available</Text>
    }
    if (el === null) {
      return <Text allowFontScaling={false} style={styles.subHeaderText}>N/A</Text>
    }
    else return (
      <View>
        <Text allowFontScaling={false} style={styles.subHeaderText}>Ailment: {el.meta.ailment.name}</Text>
        {checkForCollapse(collapsed)}
        <Collapsible collapsed={collapsed}>
          <View style={styles.scrollViewStyle}>
            <Text allowFontScaling={false} style={styles.descriptionText}>{el.effect_entries[0].effect}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Category: {el.meta.category.name}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Inflict Chance: {el.meta.ailment_chance}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Crit Rate: {el.meta.crit_rate}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Drain: {el.meta.drain}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Flinch Chance: {el.meta.flinch_chance}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Stat Chance: {el.meta.stat_chance}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Healing: {el.meta.healing}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Max Hit: {el.meta.max_hits}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Max Turns: {el.meta.max_turns}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Min Hit: {el.meta.min_hits}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Min Turns: {el.meta.min_turns}</Text>
          </View>
        </Collapsible>
      </View>
    )
  }
  
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={[styles.container]}>
      {checkForNull(results)}
      {/* <Text allowFontScaling={false} style={styles.subHeaderText}>Ailment: {checkForNull(results, results.meta.ailment.name)}</Text>
      {checkForCollapse(collapsed)}
      <Collapsible collapsed={collapsed}>
        <View style={styles.scrollViewStyle}>
          <Text allowFontScaling={false} style={styles.descriptionText}>{checkForNull(results, results.effect_entries[0].effect)}</Text>
          <Text allowFontScaling={false} style={styles.metaDataText}>Category: {checkForNull(results, results.meta.category.name)}</Text>
          <Text allowFontScaling={false} style={styles.metaDataText}>Inflict Chance: {checkForNull(results, results.meta.ailment_chance)}</Text>
          <Text allowFontScaling={false} style={styles.metaDataText}>Crit Rate: {checkForNull(results, results.meta.crit_rate)}</Text>
          <Text allowFontScaling={false} style={styles.metaDataText}>Drain: {checkForNull(results, results.meta.drain)}</Text>
          <Text allowFontScaling={false} style={styles.metaDataText}>Flinch Chance: {checkForNull(results, results.meta.flinch_chance)}</Text>
          <Text allowFontScaling={false} style={styles.metaDataText}>Stat Chance: {checkForNull(results, results.meta.stat_chance)}</Text>
          <Text allowFontScaling={false} style={styles.metaDataText}>Healing: {checkForNull(results, results.meta.healing)}</Text>
          <Text allowFontScaling={false} style={styles.metaDataText}>Max Hit: {checkForNull(results, results.meta.max_hits)}</Text>
          <Text allowFontScaling={false} style={styles.metaDataText}>Max Turns: {checkForNull(results, results.meta.max_turns)}</Text>
          <Text allowFontScaling={false} style={styles.metaDataText}>Min Hit: {checkForNull(results, results.meta.min_hits)}</Text>
          <Text allowFontScaling={false} style={styles.metaDataText}>Min Turns: {checkForNull(results, results.meta.min_turns)}</Text>
        </View>
      </Collapsible> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '100%',
    marginHorizontal: 12,
    marginBottom: 16
  },
  subHeaderText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 22,
  },
  metaDataHeaderText: {
    color: '#fff',
    marginTop: 6,
    marginLeft: 22,
    fontWeight: '600',
    fontSize: 18,
  },
  descriptionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 22,
    paddingTop: 8,
    paddingBottom: 6,
    marginRight: 40,
    fontStyle: 'italic'
  },
  scrollViewStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginLeft: 22,
    marginBottom: 20,
  },
  metaDataText: {
    color: 'rgb(223, 223, 223)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 22,
    paddingVertical: 3
  },
});

export default MoveMetaData;