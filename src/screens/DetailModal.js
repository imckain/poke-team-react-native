import React from 'react';
import { View, StyleSheet } from 'react-native';

import PokemonNameAndId from '../components/pokemonDetailComponents/PokemonNameAndId';
import FrontSprite from '../components/pokemonDetailComponents/FrontSprite';
import BackSprite from '../components/pokemonDetailComponents/BackSprite';
import BaseStats from '../components/pokemonDetailComponents/BaseStats';
import TypeDetail from '../components/pokemonDetailComponents/TypeDetail';

const DetailModal = (props) => {
  const results = props.route.params.results[0]

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainInfo}>
        <PokemonNameAndId fontSize={42} results={results} />
        <View style={styles.spriteContainer}>
          <FrontSprite width={200} height={200} results={results} />
          <BackSprite width={200} height={200} results={results} />
        </View>
      </View>
      <View style={styles.detailInfo}>
        <TypeDetail margin={13} headerFontSize={32} detailFontSize={32} results={results} />
        <BaseStats headerFontSize={32} detailFontSize={18} results={results} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    backgroundColor: '#464450',
    paddingHorizontal: 10,

  },
  spriteContainer: {
    flexDirection: 'row'
  },
  mainInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
    paddingTop: 20
  },
  detailInfo: {
    flex: 1,
    paddingLeft: 5,
    paddingVertical: 8,
  },
});

export default React.memo(DetailModal);