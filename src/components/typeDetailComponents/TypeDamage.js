import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Collapsible from 'react-native-collapsible';

import { Entypo } from '@expo/vector-icons';

const TypeDamage = ({ results }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [dblDmgToCollapsed, setDblDmgToCollapsed] = useState(true);
  const [halfDmgToCollapsed, setHalfDmgToCollapsed] = useState(true);
  const [noDmgToCollapsed, setNoDmgToCollapsed] = useState(true);
  const [dblDmgFrmCollapsed, setDblDmgFrmCollapsed] = useState(true);
  const [halfDmgFrmCollapsed, setHalfDmgFrmCollapsed] = useState(true);
  const [noDmgFrmCollapsed, setNoDmgFrmCollapsed] = useState(true);

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <Pressable onPressIn={() => setCollapsed(false)}>
          <Text allowFontScaling={false} style={[styles.headerText]}>Damage Mulitpliers  <Entypo name="triangle-right" size={22} color="rgb(175, 175, 175)" /></Text>
        </Pressable>
      )
    } if (el === false) {
      return(
        <Pressable onPressIn={() => setCollapsed(true)}>
          <Text allowFontScaling={false} style={[styles.headerText]}>Damage Mulitpliers  <Entypo name="triangle-down" size={22} color="rgb(175, 175, 175)" /></Text>
        </Pressable>
      )
    }
  }, []);

  const checkForCollapseOnMultipliers = useCallback((el, fn) => {
    if (el === true) {
      return (
        <Pressable onPressIn={() => fn(false)}>
          <Entypo name="triangle-right" size={16} color="rgb(175, 175, 175)" />
        </Pressable>
      )
    } if (el === false) {
      return(
        <Pressable onPressIn={() => fn(true)}>
          <Entypo name="triangle-down" size={16} color="rgb(175, 175, 175)" />
        </Pressable>
      )
    }
  }, []);
  
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  const createDamageTextBox = (el) => {
    const damageBox = el.map(item => <View key={item.name} style={styles.damageTextBox}><Text allowFontScaling={false} style={[styles.damageText]}>{Capitalize(item.name)}</Text></View>)
    return damageBox
  }

  const doubleDmgTo = (el) => {
    return createDamageTextBox(el.damage_relations.double_damage_to)
  }

  const halfDmgTo = (el) => {
    return createDamageTextBox(el.damage_relations.half_damage_to)
  }

  const noDmgTo = (el) => {
    return createDamageTextBox(el.damage_relations.half_damage_to)
  }

  const doubleDmgFrom = (el) => {
    return createDamageTextBox(el.damage_relations.double_damage_from)
  }

  const halfDmgFrom = (el) => {
    return createDamageTextBox(el.damage_relations.half_damage_from)
  }

  const noDmgFrom = (el) => {
    return createDamageTextBox(el.damage_relations.half_damage_from)
  }

  return (
    <View style={[styles.container]}>
      {checkForCollapse(collapsed)}
      <Collapsible collapsed={collapsed}>
        <View horizontal style={styles.scrollViewStyle}>
          <View style={styles.damageContainer}>
            <View style={styles.dmgCaseView}>
              <Text allowFontScaling={false} style={styles.dmgCaseHeader}>2x Damage To: {checkForCollapseOnMultipliers(dblDmgToCollapsed, setDblDmgToCollapsed)}</Text>
            </View>
            <Collapsible collapsed={dblDmgToCollapsed}>
              <View style={styles.dmgResultsContainer}>
                {doubleDmgTo(results)}
              </View>
            </Collapsible>
            <View style={styles.dmgCaseView}>
              <Text allowFontScaling={false} style={styles.dmgCaseHeader}>0.5x Damage To: {checkForCollapseOnMultipliers(halfDmgToCollapsed, setHalfDmgToCollapsed)}</Text>
            </View>
            <Collapsible collapsed={halfDmgToCollapsed}>
              <View style={styles.dmgResultsContainer}>
                {halfDmgTo(results)}
              </View>
            </Collapsible>
            <View style={styles.dmgCaseView}>
              <Text allowFontScaling={false} style={styles.dmgCaseHeader}>0x Damage To: {checkForCollapseOnMultipliers(noDmgToCollapsed, setNoDmgToCollapsed)}</Text>
            </View>
            <Collapsible collapsed={noDmgToCollapsed}>
              <View style={styles.dmgResultsContainer}>
                {noDmgTo(results)}
              </View>
            </Collapsible>
            <View style={styles.dmgCaseView}>
              <Text allowFontScaling={false} style={styles.dmgCaseHeader}>2x Damage From: {checkForCollapseOnMultipliers(dblDmgFrmCollapsed, setDblDmgFrmCollapsed)}</Text>
            </View>
            <Collapsible collapsed={dblDmgFrmCollapsed}>
              <View style={styles.dmgResultsContainer}>
                {doubleDmgFrom(results)}
              </View>
            </Collapsible>
            <View style={styles.dmgCaseView}>
              <Text allowFontScaling={false} style={styles.dmgCaseHeader}>0.5x Damage From: {checkForCollapseOnMultipliers(halfDmgFrmCollapsed, setHalfDmgFrmCollapsed)}</Text>
            </View>
            <Collapsible collapsed={halfDmgFrmCollapsed}>
              <View style={styles.dmgResultsContainer}>
                {halfDmgFrom(results)}
              </View>
            </Collapsible>
            <View style={styles.dmgCaseView}>
              <Text allowFontScaling={false} style={styles.dmgCaseHeader}>0x Damage From: {checkForCollapseOnMultipliers(noDmgFrmCollapsed, setNoDmgFrmCollapsed)}</Text>
            </View>
            <Collapsible collapsed={noDmgFrmCollapsed}>
              <View style={styles.dmgResultsContainer}>
                {noDmgFrom(results)}
              </View>
            </Collapsible>
          </View>
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
  headerText: {
    color: '#fff',
    marginTop: 7,
    fontWeight: '600',
    fontSize: 22,
  },
  scrollViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: 20,
  },
  damageContainer: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: 10,
    // paddingBottom: 10,
  },
  dmgCaseView: {
    alignItems: 'flex-start',
  },
  dmgCaseHeader: {
    color: '#fff',
    marginTop: 9,
    marginBottom: 3,
    fontWeight: '600',
    fontSize: 16,
    // lineHeight: 38,
    alignItems: 'baseline'
  },
  dmgResultsContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  damageTextBox: {
    paddingVertical: 5,
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: '#464450',
    margin: 7,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '28%'
  },
  damageText: {
    color: 'rgb(223, 223, 223)',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3
  },
});

export default TypeDamage;