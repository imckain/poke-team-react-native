import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

import useGetReultsFromUrl from '../../hooks/useGetResultsFromUrl';

import { Entypo } from '@expo/vector-icons';

const AbilityDetail = ({ results, margin, headerFontSize, detailFontSize, navigation }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [getResultsFromUrl, urlResults] = useGetReultsFromUrl();

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <TouchableOpacity style={styles.headerWrapper} onPressIn={() => setCollapsed(false)}>
          <Text allowFontScaling={false} style={[styles.headerText, { fontSize: headerFontSize }]}>Abilities</Text>  
          <Entypo name="plus" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      )
    } if (el === false) {
      return(
        <TouchableOpacity style={styles.headerWrapper} onPressIn={() => setCollapsed(true)}>
          <Text allowFontScaling={false} style={[styles.headerText, { fontSize: headerFontSize }]}>Abilities</Text>  
          <Entypo name="minus" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      )
    }
  }, []);
  
  const showAbilities = (el) => {
    const navigate = async(url, param) => {
      if (urlResults.name === param) {
        await getResultsFromUrl(url)
        return navigation.navigate('Ability Detail Modal', { results: urlResults })
      } else await getResultsFromUrl(url)
    }

    const abilityBox = el.abilities.map(item => {      
      return (
        <View key={item.ability.name} style={styles.abilityBox}>
          <TouchableOpacity 
            onPressIn={async() => {
              await getResultsFromUrl(item.ability.url)
            }}
            onPressOut={async() => {
              return navigate(item.ability.url, item.ability.name)
            }}
          >
            <Text allowFontScaling={false} style={[styles.abilityText, { fontSize: detailFontSize }]}>{item.ability.name}</Text>
          </TouchableOpacity>
        </View>
      )
    })

    return abilityBox
  }

  return (
    <View style={[styles.container, { marginBottom: margin }]}>
      {checkForCollapse(collapsed)}
      <Collapsible style={styles.collapsibleContainer} collapsed={collapsed}>{showAbilities(results)}</Collapsible>
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
  },
  collapsibleContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    paddingHorizontal: 12
  },
  headerText: {
    color: '#fff',
    fontWeight: '600',
  },
  headerWrapper: {
    width: '100%',
    paddingHorizontal: 12,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  abilityBox: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#000000',
    margin: 7,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 'auto',
  },
  abilityText: {
    color: 'rgb(223, 223, 223)',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3,
    textTransform: 'capitalize',
  },
});

export default React.memo(AbilityDetail);