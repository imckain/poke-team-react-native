import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Collapsible from 'react-native-collapsible';

import { Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const MovesDetail = ({ results }) => {
  const [collapsed, setCollapsed] = useState(true);

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <Pressable onPressIn={() => setCollapsed(false)}>
          <Text style={[styles.headerText]}>Moves  <Entypo name="triangle-right" size={28} color="rgb(175, 175, 175)" /></Text>
        </Pressable>
      )
    } if (el === false) {
      return(
        <Pressable onPressIn={() => setCollapsed(true)}>
          <Text style={[styles.headerText]}>Moves  <Entypo name="triangle-down" size={28} color="rgb(175, 175, 175)" /></Text>
        </Pressable>
      )
    }
  }, []);
  
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const createMoveTextBox = (el) => {
    const moveBox = el.moves.map(item => <View key={item.move.name} style={styles.moveTextBox}><Text style={[styles.moveText]}>{Capitalize(item.move.name)}</Text><Text style={styles.moveText}>Level Learned: {item.version_group_details[0].level_learned_at}</Text></View>)
    return moveBox
  }

  return (
    <View style={[styles.container]}>
      {checkForCollapse(collapsed)}
      <Collapsible collapsed={collapsed}>
        <View horizontal style={styles.scrollViewStyle}>
          {createMoveTextBox(results)}
          {/* <Text style={[styles.moveText]}>{results.moves.map(el => Capitalize(el.move.name) + ' ')}</Text> */}
        </View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '100%'
  },
  headerText: {
    color: '#fff',
    marginTop: 7,
    fontWeight: '600',
    fontSize: 28,
  },
  scrollViewStyle: {
    marginBottom: 60,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  moveTextBox: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#464450',
    margin: 7,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '45%'
  },
  moveText: {
    color: 'rgb(223, 223, 223)',
    fontSize: 22,
    textAlign: 'center',
    paddingHorizontal: 12,
  },
});

export default MovesDetail;