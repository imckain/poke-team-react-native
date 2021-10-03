import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import PokemonNameAndId from '../components/pokemonDetailComponents/PokemonNameAndId';
import FrontSprite from '../components/pokemonDetailComponents/FrontSprite';
import BackSprite from '../components/pokemonDetailComponents/BackSprite';
import TypeDetail from '../components/pokemonDetailComponents/TypeDetail';
import AbilityDetail from '../components/pokemonDetailComponents/AbilityDetail';
import ModalBaseStats from '../components/pokemonDetailComponents/ModalBaseStats';
import MovesDetail from '../components/pokemonDetailComponents/MovesDetail';
import { ScrollView } from 'react-native-gesture-handler';

const DetailModal = (props) => {
  let results;

  if (props.route.params.results[0] === undefined) {
    results = props.route.params.results
  } else results = props.route.params.results[0]

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.mainInfo}>
          <PokemonNameAndId fontSize={42} results={results} />
          <View style={styles.spriteContainer}>
            <FrontSprite width={160} height={160} results={results} />
            <BackSprite width={160} height={160} results={results} />
          </View>
        </View>
        <View style={styles.detailInfo}>
          <TypeDetail margin={13} headerFontSize={28} detailFontSize={22} results={results} />
          <AbilityDetail margin={13} headerFontSize={28} detailFontSize={22} results={results} />
          <ModalBaseStats headerFontSize={28} detailFontSize={18} results={results} />
          <MovesDetail results={results} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    backgroundColor: '#353340',
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