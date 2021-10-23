import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import BaseStats from '../pokemonDetailComponents/BaseStats';
import TypeShowOnCard from '../pokemonDetailComponents/TypeShowOnCard';
import PokemonNameAndId from '../pokemonDetailComponents/PokemonNameAndId';
import FrontSprite from '../pokemonDetailComponents/FrontSprite';

const ShowSearchResult = (props) => {
  if (!props.results.length) {
    return null;
  }

  const results = props.results[0]

  return (
    <View>
      <View style={styles.container}>
        <PokemonNameAndId lines={1} fontSize={38} results={results} />
        <View style={styles.mainCardContainer}>
          <View style={styles.mainInfo}>
            <FrontSprite width={120} height={120} results={results} />
          </View>
          <View style={styles.detailInfo}>
            <BaseStats headerFontSize={20} detailFontSize={15} results={results} />
            <TypeShowOnCard margin={7} detailFontSize={14} results={results} />
          </View>
        </View>
      </View>
      <Text allowFontScaling={false} style={styles.infoNotice}>Tap for more info</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 'auto',
    alignSelf: 'center',
    backgroundColor: '#464450a6',
    borderRadius: 10,
  },
  mainCardContainer: {
    flexDirection: 'row',
    height: 'auto',
    alignSelf: 'center',
    alignItems: 'center'
  },
  mainInfo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
    paddingBottom: 20,
  },
  detailInfo: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
  infoNotice: {
    textAlign: 'center',
    color: '#ffffffa7',
    fontStyle: 'italic',
    paddingTop: 2,
    fontSize: 12
  }
});

export default React.memo(ShowSearchResult);