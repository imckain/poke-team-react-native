import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Collapsible from 'react-native-collapsible';

import { Entypo } from '@expo/vector-icons';

const AbilityDetail = ({ results, margin, headerFontSize, detailFontSize }) => {
  const [collapsed, setCollapsed] = useState(true);

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <Pressable onPressIn={() => setCollapsed(false)}>
          <Text allowFontScaling={false} style={[styles.headerText, { fontSize: headerFontSize }]}>Abilities  <Entypo name="triangle-right" size={28} color="rgb(175, 175, 175)" /></Text>
        </Pressable>
      )
    } if (el === false) {
      return(
        <Pressable onPressIn={() => setCollapsed(true)}>
          <Text allowFontScaling={false} style={[styles.headerText, { fontSize: headerFontSize }]}>Abilities  <Entypo name="triangle-down" size={28} color="rgb(175, 175, 175)" /></Text>
        </Pressable>
      )
    }
  }, []);
  
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={[styles.container, { marginBottom: margin }]}>
      {checkForCollapse(collapsed)}
      <Collapsible collapsed={collapsed}>
        <Text allowFontScaling={false} style={[styles.abilityText, { fontSize: detailFontSize }]}>{results.abilities.map(el => Capitalize(el.ability.name) + ' ')}</Text>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'baseline'
  },
  headerText: {
    color: '#fff',
    fontWeight: '600',
  },
  abilityText: {
    color: '#fff',
    marginTop: 6,
    marginLeft: 7,
    flexWrap: 'wrap',
  },
});

export default AbilityDetail;