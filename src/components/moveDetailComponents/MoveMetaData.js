import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { LinearGradient } from 'expo-linear-gradient';

import { Entypo } from '@expo/vector-icons';

const MoveMetaData = ({ results }) => {
  const [collapsed, setCollapsed] = useState(false);

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <TouchableOpacity style={styles.headerWrapper} onPressIn={() => setCollapsed(false)}>
          <Text allowFontScaling={false} style={[styles.metaDataHeaderText]}>Meta Data:</Text>  
          <Entypo name="plus" size={28} color="rgb(175, 175, 175)" />
        </TouchableOpacity>
      )
    } if (el === false) {
      return(
        <TouchableOpacity style={styles.headerWrapper} onPressIn={() => setCollapsed(true)}>
          <Text allowFontScaling={false} style={[styles.metaDataHeaderText]}>Meta Data:</Text>  
          <Entypo name="minus" size={28} color="rgb(175, 175, 175)" />
        </TouchableOpacity>
      )
    }
  }, []);

  const checkForNull = (el) => {
    if (el.meta === null) {
      return <Text allowFontScaling={false} style={styles.subHeaderText}>Meta Data Not Available</Text>
    }
    else return (
      <View style={{width: '100%'}}>
        <Text allowFontScaling={false} style={styles.subHeaderText}>Ailment: {el.meta.ailment.name}</Text>
        <View style={styles.metaDataContainer}>
          {checkForCollapse(collapsed)}
          <Collapsible collapsed={collapsed}>
            <View style={styles.scrollViewStyle}>
              <Text allowFontScaling={false} style={styles.descriptionText}>{el.effect_entries[0].effect.replace('$effect_chance', el.effect_chance)}</Text>
              <LinearGradient 
                style={styles.break} 
                colors={['rgba(223, 223, 223, 0.747)', 'transparent']} 
                start={{ x: 0.5, y: 0.5 }}
                end={{ x: 1.1, y: 0.5 }}
              />
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
      </View>
    )
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
    alignItems: 'baseline',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#000000',
    paddingVertical: 5,
    marginBottom: 13,
    paddingHorizontal: 12,
  },
  subHeaderText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 28,
  },
  metaDataContainer: {
    backgroundColor: '#000000',
    borderRadius: 10,
    paddingVertical: 6,
    marginTop: 6,
    marginBottom: 6,
  },
  headerWrapper: {
    width: '100%',
    paddingHorizontal: 12,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%', 
    alignItems: 'center'
  },
  metaDataHeaderText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 24,
  },
  descriptionText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '500',
    fontStyle: 'italic',
    width: '100%',
    paddingVertical: 4,
  },
  break: {
    height: 1,
    width: '100%',
    marginBottom: 8,
    marginTop: 6,
  },
  scrollViewStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 24,
  },
  metaDataText: {
    color: 'rgb(223, 223, 223)',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 3
  },
});

export default MoveMetaData;