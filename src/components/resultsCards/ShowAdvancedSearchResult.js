import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import BaseStats from '../pokemonDetailComponents/BaseStats';
import TypeDetail from '../pokemonDetailComponents/TypeDetail';
import PokemonNameAndId from '../pokemonDetailComponents/PokemonNameAndId';
import FrontSprite from '../pokemonDetailComponents/FrontSprite';

const ShowAdvancedSearchResult = (props) => {
  const results = props.results

  return (
    <View style={styles.container}>
      <View style={styles.mainCardContainer}>
        <View style={styles.mainInfo}>
          <PokemonNameAndId fontSize={26} results={results} />
          <FrontSprite width={120} height={120} results={results} />
        </View>
        <View style={styles.detailInfo}>
          <BaseStats headerFontSize={22} detailFontSize={14} results={results} />
          <TypeDetail margin={7} headerFontSize={16} detailFontSize={12} results={results} />
        </View>
      </View>
      <Text allowFontScaling={false} style={styles.infoNotice}>Tap for more info</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto'
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
    alignItems: 'center',
    maxWidth: '60%'
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

export default React.memo(ShowAdvancedSearchResult);