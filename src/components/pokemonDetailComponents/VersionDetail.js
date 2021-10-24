import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Collapsible from 'react-native-collapsible';

import { Entypo } from '@expo/vector-icons';

const VersionDetail = ({ results, margin }) => {
  const [collapsed, setCollapsed] = useState(true);

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <View style={styles.headerWrapper}>
          <Pressable style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} onPressIn={() => setCollapsed(false)}>
            <Text allowFontScaling={false} style={[styles.headerText]}>Game Appearances</Text>  
            <Entypo name="plus" size={32} color="rgb(175, 175, 175)" />
          </Pressable>
        </View>
      )
    } if (el === false) {
      return(
        <View style={styles.headerWrapper}>
          <Pressable style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} onPressIn={() => setCollapsed(true)}>
            <Text allowFontScaling={false} style={[styles.headerText]}>Game Appearances</Text>  
            <Entypo name="minus" size={32} color="rgb(175, 175, 175)" />
          </Pressable>
        </View>
      )
    }
  }, []);
  
  const createVersionTextBox = (el) => {
    const versionBox = el.game_indices.map(item => {
      return (
        <View key={item.version.name} style={styles.versionTextBox}>
          <Text allowFontScaling={false} adjustsFontSizeToFit={true} numberOfLines={1} style={[styles.versionText]}>{item.version.name.replace('-', ' ')}</Text>
        </View>
      )
    })
    return versionBox
  }

  return (
    <View style={[styles.container, {marginBottom: margin}]}>
      {checkForCollapse(collapsed)}
      <Collapsible collapsed={collapsed}>
        <View horizontal style={styles.scrollViewStyle}>
          {createVersionTextBox(results)}
        </View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#464450a6',
    paddingVertical: 5,
  },
  headerText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 28,
  },
  scrollViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 12
  },
  headerWrapper: {
    width: '100%',
    paddingHorizontal: 12,
  },
  versionTextBox: {
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#353340',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    marginVertical: 6
  },
  versionText: {
    color: 'rgb(223, 223, 223)',
    fontSize: 28,
    fontWeight: '600',
    paddingHorizontal: 12,
    paddingVertical: 3,
    textTransform: 'capitalize',
    textAlign: 'center'
  },
  moveDetailText: {
    color: 'rgb(223, 223, 223)',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingTop: 1
  },
});

export default React.memo(VersionDetail);