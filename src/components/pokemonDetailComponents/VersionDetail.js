import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

import { Entypo } from '@expo/vector-icons';

const VersionDetail = ({ results, margin }) => {
  const [collapsed, setCollapsed] = useState(true);

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <TouchableOpacity style={styles.headerWrapper} onPressIn={() => setCollapsed(false)}>
          <Text allowFontScaling={false} style={[styles.headerText]}>Game Appearances</Text>  
          <Entypo name="plus" size={32} color="rgba(105, 105, 105, 0.6)" />
        </TouchableOpacity>
      )
    } if (el === false) {
      return(
        <TouchableOpacity style={styles.headerWrapper} onPressIn={() => setCollapsed(true)}>
          <Text allowFontScaling={false} style={[styles.headerText]}>Game Appearances</Text>  
          <Entypo name="minus" size={32} color="rgba(105, 105, 105, 0.6)" />
        </TouchableOpacity>
      )
    }
  }, []);
  
  const createVersionTextBox = (el) => {
    const versionBox = el.game_indices.map(item => {
      return (
        <View key={item.version.name} style={styles.versionTextBox}>
          <Text allowFontScaling={false} adjustsFontSizeToFit={true} numberOfLines={1} style={[styles.versionText]}>{item.version.name}</Text>
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
    backgroundColor: '#000000',
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
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  versionTextBox: {
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#000000',
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