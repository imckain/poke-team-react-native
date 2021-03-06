import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

import useGetReultsFromUrl from '../../hooks/useGetResultsFromUrl';
import checkType from '../functions/checkType';

import { Entypo } from '@expo/vector-icons';

const TypeDamage = ({ results, navigation }) => {
  const [getResultsFromUrl, urlResults] = useGetReultsFromUrl();
  const [collapsed, setCollapsed] = useState(false);
  const [dblDmgToCollapsed, setDblDmgToCollapsed] = useState(true);
  const [halfDmgToCollapsed, setHalfDmgToCollapsed] = useState(true);
  const [noDmgToCollapsed, setNoDmgToCollapsed] = useState(true);
  const [dblDmgFrmCollapsed, setDblDmgFrmCollapsed] = useState(true);
  const [halfDmgFrmCollapsed, setHalfDmgFrmCollapsed] = useState(true);
  const [noDmgFrmCollapsed, setNoDmgFrmCollapsed] = useState(true);

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <TouchableOpacity style={styles.headerWrapper} onPressIn={() => setCollapsed(false)}>
          <Text allowFontScaling={false} style={[styles.headerText]}>Damage Multipliers</Text>  
          <Entypo name="plus" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      )
    } if (el === false) {
      return(
        <TouchableOpacity style={styles.headerWrapper} onPressIn={() => setCollapsed(true)}>
          <Text allowFontScaling={false} style={[styles.headerText]}>Damage Multipliers</Text>  
          <Entypo name="minus" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      )
    }
  }, []);

  const checkForCollapseOnMultipliers = useCallback((el, fn, dmg) => {
    if (el === true) {
      return (
        <TouchableOpacity style={styles.headerWrapper} onPressIn={() => fn(false)}>
          <Text allowFontScaling={false} style={styles.dmgCaseHeader}>{dmg}</Text> 
          <Entypo name="plus" size={24} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      )
    } if (el === false) {
      return(
        <TouchableOpacity style={styles.headerWrapper} onPressIn={() => fn(true)}>
          <Text allowFontScaling={false} style={styles.dmgCaseHeader}>{dmg}</Text> 
          <Entypo name="minus" size={24} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      )
    }
  }, []);

  const showType = (el) => {

    const navigate = async(url, param) => {
      if (urlResults.name === param) {
        await getResultsFromUrl(url)
        return navigation.navigate('Type Detail Modal', { results: urlResults })
      } else await getResultsFromUrl(url)
    }

    const typeBox = el.map(item => {  
      return (
        <View key={item.name} style={[styles.typeBox, { backgroundColor: checkType(item.name) }]}>
          <TouchableOpacity 
            onPressIn={async() => {
              await getResultsFromUrl(item.url)
            }}
            onPressOut={() => navigate(item.url, item.name)}
          >
            <Text allowFontScaling={false} style={[styles.typeText]}>{item.name + ' '}</Text>
          </TouchableOpacity>
        </View>
      )
    })

    return typeBox
  }

  const doubleDmgTo = (el) => {
    return showType(el.damage_relations.double_damage_to)
  }

  const halfDmgTo = (el) => {
    return showType(el.damage_relations.half_damage_to)
  }

  const noDmgTo = (el) => {
    return showType(el.damage_relations.half_damage_to)
  }

  const doubleDmgFrom = (el) => {
    return showType(el.damage_relations.double_damage_from)
  }

  const halfDmgFrom = (el) => {
    return showType(el.damage_relations.half_damage_from)
  }

  const noDmgFrom = (el) => {
    return showType(el.damage_relations.half_damage_from)
  }

  return (
    <View style={[styles.container]}>
      {checkForCollapse(collapsed)}
      <Collapsible collapsed={collapsed}>
        <View horizontal style={styles.scrollViewStyle}>
          <View style={styles.damageContainer}>
            <View style={styles.dmgCaseView}>
              {checkForCollapseOnMultipliers(dblDmgToCollapsed, setDblDmgToCollapsed, '2x Damage To:')}
              <Collapsible collapsed={dblDmgToCollapsed}>
                <View style={styles.dmgResultsContainer}>
                  {doubleDmgTo(results)}
                </View>
              </Collapsible>
            </View>
            <View style={styles.dmgCaseView}>
              {checkForCollapseOnMultipliers(halfDmgToCollapsed, setHalfDmgToCollapsed, '0.5x Damage To:')}
              <Collapsible collapsed={halfDmgToCollapsed}>
                <View style={styles.dmgResultsContainer}>
                  {halfDmgTo(results)}
                </View>
              </Collapsible>
            </View>
            <View style={styles.dmgCaseView}>
              {checkForCollapseOnMultipliers(noDmgToCollapsed, setNoDmgToCollapsed, '0x Damage To:')}
              <Collapsible collapsed={noDmgToCollapsed}>
                <View style={styles.dmgResultsContainer}>
                  {noDmgTo(results)}
                </View>
              </Collapsible>
            </View>
            <View style={styles.dmgCaseView}>
              {checkForCollapseOnMultipliers(dblDmgFrmCollapsed, setDblDmgFrmCollapsed, '2x Damage From:')}
              <Collapsible collapsed={dblDmgFrmCollapsed}>
                <View style={styles.dmgResultsContainer}>
                  {doubleDmgFrom(results)}
                </View>
              </Collapsible>
            </View>
            <View style={styles.dmgCaseView}>
              {checkForCollapseOnMultipliers(halfDmgFrmCollapsed, setHalfDmgFrmCollapsed, '0.5x Damage From:')}
              <Collapsible collapsed={halfDmgFrmCollapsed}>
                <View style={styles.dmgResultsContainer}>
                  {halfDmgFrom(results)}
                </View>
              </Collapsible>
            </View>
            <View style={styles.dmgCaseView}>
              {checkForCollapseOnMultipliers(noDmgFrmCollapsed, setNoDmgFrmCollapsed, '0x Damage From:')}
              <Collapsible collapsed={noDmgFrmCollapsed}>
                <View style={styles.dmgResultsContainer}>
                  {noDmgFrom(results)}
                </View>
              </Collapsible>
            </View>
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
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#000000',
    paddingVertical: 5,
  },
  headerText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 28,
  },
  headerWrapper: {
    width: '100%',
    paddingHorizontal: 12,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  scrollViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  damageContainer: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: 24,
  },
  dmgCaseView: {
    alignItems: 'flex-start',
    borderRadius: 10,
    backgroundColor: '#000000',
    marginVertical: 4,
    paddingVertical: 4,
  },
  dmgCaseHeader: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 22,
  },
  dmgResultsContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12
  },
  typeBox: {
    paddingVertical: 5,
    borderRadius: 10,
    margin: 5,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 'auto'
  },
  typeText: {
    color: 'rgb(223, 223, 223)',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3,
    textShadowColor: 'rgb(0, 0, 0)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
    textTransform: 'capitalize',
  },
});

export default TypeDamage;