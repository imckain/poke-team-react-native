import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import BaseStats from '../pokemonDetailComponents/BaseStats';
import TypeShowOnCard from '../pokemonDetailComponents/TypeShowOnCard';
import PokemonNameAndId from '../pokemonDetailComponents/PokemonNameAndId';
import FrontSprite from '../pokemonDetailComponents/FrontSprite';

const ShowAdvancedSearchResult = (props) => {
  const results = props.results

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <FrontSprite width={80} height={80} results={results} />
        <PokemonNameAndId lines={1} fontSize={38} width={'auto'} results={results} />
      </View>
      <Text allowFontScaling={false} style={styles.infoNotice}>Tap for more info</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center'
  },
  info: {
    width: '100%',
    height: 'auto',
    alignSelf: 'center',
    backgroundColor: '#000000',
    borderRadius: 10,
    borderColor: 'rgba(105, 105, 105, 0.6)',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 12
  },
  infoNotice: {
    textAlign: 'center',
    color: '#ffffffa7',
    fontStyle: 'italic',
    paddingTop: 2,
    fontSize: 12
  }
});

export default React.memo(ShowAdvancedSearchResult);