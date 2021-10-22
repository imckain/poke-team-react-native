import React from 'react';
import { View, StyleSheet } from 'react-native';

import PokedexNameAndId from './PokedexNameAndId';
import PokedexType from './PokedexType';
import PokedexMove from './PokedexMove';
import PokedexAbility from './PokedexAbility';

const PokedexCard = (props) => {
  const results = props.results
  const param = props.searchParam

  const checkDex = (el) => {
    if (el === 'pokemon') {
      return <PokedexNameAndId fontSize={24} lines={1} numFontSize={16} results={results} />
    }
    if (el === 'type') {
      return <PokedexType fontSize={24} results={results} />
    }
    if (el === 'move') {
      return <PokedexMove fontSize={24} alignSelf='flex-start' lines={1} detailFontSize={20} results={results} />
    }
    if (el === 'ability') {
      return <PokedexAbility fontSize={24} results={results} />
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainInfo}>
        {checkDex(param)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#fff', 
    width: '90%',
    height: 'auto',
    alignSelf: 'center',
    backgroundColor: '#464450a6',
  },
  mainInfo: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
});

export default React.memo(PokedexCard);