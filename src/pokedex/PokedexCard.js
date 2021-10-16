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
      return <PokedexNameAndId fontSize={24} results={results} />
    }
    if (el === 'type') {
      return <PokedexType fontSize={24} results={results} />
    }
    if (el === 'move') {
      return <PokedexMove fontSize={24} results={results} />
    }
    if (el === 'ability') {
      return <PokedexAbility fontSize={24} results={results} />
    }
  }

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.mainInfo}>
          {checkDex(param)}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#fff', 
    width: '90%',
    height: 'auto',
    alignSelf: 'center',
    marginBottom: 12,
    marginTop: 2,
    backgroundColor: '#464450',
  },
  mainInfo: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default React.memo(PokedexCard);