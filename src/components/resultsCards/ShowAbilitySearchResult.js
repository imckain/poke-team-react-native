import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import BaseStats from '../pokemonDetailComponents/BaseStats';
import TypeDetail from '../pokemonDetailComponents/TypeDetail';
import PokemonNameAndId from '../pokemonDetailComponents/PokemonNameAndId';
import FrontSprite from '../pokemonDetailComponents/FrontSprite';
import TypeNameAndClass from '../typeDetailComponents/TypeNameAndClass';
import TypeMoves from '../typeDetailComponents/TypeMoves';
import MoveNameAndClass from '../moveDetailComponents/MoveNameAndClass';
import MoveAttributes from '../moveDetailComponents/MoveAttributes';
import AbilityName from '../abilityDetailComponents/AbilityName';
import AbilityShortEffect from '../abilityDetailComponents/AbilityShortEffect';

const ShowAbilitySearchResult = (props) => {
  const results = props.results

  return (
    <View style={styles.container} >
      <View style={styles.mainCardContainer}>
        <View style={styles.mainInfo}>
          <AbilityName results={results} />
          <AbilityShortEffect results={results} />
        </View>
      </View>
      <Text style={styles.infoNotice}>Tap for more info</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  mainCardContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    width: '90%',
    height: 'auto',
    alignSelf: 'center',
    backgroundColor: '#464450',
  },
  mainInfo: {
    justifyContent: 'flex-start',
    maxWidth: '100%'
  },
  infoNotice: {
    textAlign: 'center',
    color: '#ffffffa7',
    fontStyle: 'italic',
    paddingTop: 2,
    paddingBottom: 8,
  }
});

export default React.memo(ShowAbilitySearchResult);