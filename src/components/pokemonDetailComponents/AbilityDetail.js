import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Collapsible from 'react-native-collapsible';

import useGetReultsFromUrl from '../../hooks/useGetResultsFromUrl';

import { Entypo } from '@expo/vector-icons';

const AbilityDetail = ({ results, margin, headerFontSize, detailFontSize, navigation }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [getResultsFromUrl, urlResults] = useGetReultsFromUrl();

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
  
  const showAbilities = (el) => {
    const searchApiByUrl = useCallback(async(term) => {
      await getResultsFromUrl(term);
      return urlResults
    }, [])

    const navigate = async(url) => {
      if (urlResults.id !== undefined) {
        return navigation.navigate('Ability Detail Modal', { results: urlResults })
      } else searchApiByUrl(url)
    }

    const abilityBox = el.abilities.map(item => {      
      return (
        <View key={item.ability.name} style={styles.abilityBox}>
          <Pressable 
            onPressIn={async() => {
              await searchApiByUrl(item.ability.url)
            }}
            onPressOut={() => navigate(item.ability.url)}
          >
            <Text allowFontScaling={false} style={[styles.abilityText, { fontSize: detailFontSize }]}>{Capitalize(item.ability.name) + ' '}</Text>
          </Pressable>
        </View>
      )
    })

    return abilityBox
  }

  return (
    <View style={[styles.container, { marginBottom: margin }]}>
      {checkForCollapse(collapsed)}
      <Collapsible style={{flexDirection: 'row', flexWrap: 'wrap'}} collapsed={collapsed}>{showAbilities(results)}</Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'baseline',
    width: '100%'
  },
  headerText: {
    color: '#fff',
    fontWeight: '600',
  },
  abilityBox: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#464450',
    margin: 7,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 'auto'
  },
  abilityText: {
    color: 'rgb(223, 223, 223)',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3
  },
});

export default React.memo(AbilityDetail);