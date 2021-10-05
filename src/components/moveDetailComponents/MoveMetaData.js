import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Collapsible from 'react-native-collapsible';

import { Entypo } from '@expo/vector-icons';

const MoveMetaData = ({ results }) => {
  const [collapsed, setCollapsed] = useState(true);

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <Pressable onPressIn={() => setCollapsed(false)}>
          <Text style={[styles.metaDataHeaderText]}>Meta Data:  <Entypo name="triangle-right" size={18} color="rgb(175, 175, 175)" /></Text>
        </Pressable>
      )
    } if (el === false) {
      return(
        <Pressable onPressIn={() => setCollapsed(true)}>
          <Text style={[styles.metaDataHeaderText]}>Meta Data:  <Entypo name="triangle-down" size={18} color="rgb(175, 175, 175)" /></Text>
        </Pressable>
      )
    }
  }, []);

  const checkForNull = (el) => {
    if (el === null) return 'N/A'
    else return el
  }
  
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={[styles.container]}>
      <Text style={styles.subHeaderText}>Ailment: {results.meta.ailment.name}</Text>
      {checkForCollapse(collapsed)}
      <Collapsible collapsed={collapsed}>
        <View style={styles.scrollViewStyle}>
          <Text style={styles.descriptionText}>{results.effect_entries[0].effect}</Text>
          <Text style={styles.metaDataText}>Category: {results.meta.category.name}</Text>
          <Text style={styles.metaDataText}>Inflict Chance: {results.meta.ailment_chance}</Text>
          <Text style={styles.metaDataText}>Crit Rate: {results.meta.crit_rate}</Text>
          <Text style={styles.metaDataText}>Drain: {results.meta.drain}</Text>
          <Text style={styles.metaDataText}>Flinch Chance: {results.meta.flinch_chance}</Text>
          <Text style={styles.metaDataText}>Stat Chance: {results.meta.stat_chance}</Text>
          <Text style={styles.metaDataText}>Healing: {results.meta.healing}</Text>
          <Text style={styles.metaDataText}>Max Hit: {checkForNull(results.meta.max_hits)}</Text>
          <Text style={styles.metaDataText}>Max Turns: {checkForNull(results.meta.max_turns)}</Text>
          <Text style={styles.metaDataText}>Min Hit: {checkForNull(results.meta.min_hits)}</Text>
          <Text style={styles.metaDataText}>Min Turns: {checkForNull(results.meta.min_turns)}</Text>
        </View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '100%',
    marginHorizontal: 12,
    marginBottom: 10
  },
  subHeaderText: {
    color: '#fff',
    marginTop: 20,
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
    color: 'rgb(223, 223, 223)',
    fontSize: 18,
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
    // flexWrap: 'wrap',
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