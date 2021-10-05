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
    <View>
      <View style={styles.container}>
        <View style={styles.mainInfo}>
          <AbilityName results={results} />
          <AbilityShortEffect results={results} />
          {/* <FrontSprite width={150} height={150} results={results} /> */}
        </View>
        <View style={styles.detailInfo}>
          {/* <BaseStats headerFontSize={22} detailFontSize={16} results={results} />
          <TypeDetail margin={7} headerFontSize={22} detailFontSize={16} results={results} /> */}
        </View>
        <Text style={styles.infoNotice}>Tap for more info</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRadius: 10,
    width: '90%',
    height: 134,
    marginBottom: 90,
    alignSelf: 'center',
    backgroundColor: '#464450',
  },
  mainInfo: {
    justifyContent: 'flex-start',
    maxWidth: '100%'
  },
  detailInfo: {
    // flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
  infoNotice: {
    textAlign: 'center',
    color: '#ffffffa7',
    fontStyle: 'italic',
    paddingTop: 2,
  }
});

export default React.memo(ShowAbilitySearchResult);