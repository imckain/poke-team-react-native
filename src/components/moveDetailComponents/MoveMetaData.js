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
    else return (
      <View>
        <Text allowFontScaling={false} style={styles.subHeaderText}>Ailment: {el.meta.ailment.name}</Text>
        {checkForCollapse(collapsed)}
        <Collapsible collapsed={collapsed}>
          <View style={styles.scrollViewStyle}>
            <Text allowFontScaling={false} style={styles.descriptionText}>{el.effect_entries[0].effect.replace('$effect_chance', el.effect_chance)}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Category: {el.meta.category.name}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Inflict Chance: {el.meta.ailment_chance}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Crit Rate: {el.meta.crit_rate}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Drain: {el.meta.drain}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Flinch Chance: {el.meta.flinch_chance}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Stat Chance: {el.meta.stat_chance}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Healing: {el.meta.healing}</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Max Hit: {el.meta.max_hits !== null ? el.meta.max_hits : ' N/A' }</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Max Turns: {el.meta.max_turns !== null ? el.meta.max_turns : ' N/A' }</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Min Hit: {el.meta.min_hits !== null ? el.meta.min_hits : ' N/A' }</Text>
            <Text allowFontScaling={false} style={styles.metaDataText}>Min Turns: {el.meta.min_turns !== null ? el.meta.min_turns : ' N/A' }</Text>
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