import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


import SearchBarByType from '../components/navigatorCards/searchBars/SearchBarByType';
import SearchBarByMove from '../components/navigatorCards/searchBars/SearchBarByMove';
import SearchBarByAbility from '../components/navigatorCards/searchBars/SearchBarByAbility';
import ShowAdvancedSearchResult from '../components/resultsCards/ShowAdvancedSearchResult';

import useAdvancedResults from '../hooks/useAdvancedResults';
import useTypeResults from '../hooks/useTypeResults';
import useGetPokemonFromUrl from '../hooks/useGetResultsFromUrl';
import PokedexCard from '../pokedex/PokedexCard';

import pokemonData from '../data/pokemon.json';
import typeData from '../data/type.json';
import moveData from '../data/moves.json';
import abilityData from '../data/abilities.json';
import PokemonSearchScreen from '../components/advancedSearchScreens/PokemonSearchScreen';
import TypeSearchScreen from '../components/advancedSearchScreens/TypeSearchScreen';
import MoveSearchScreen from '../components/advancedSearchScreens/MoveSearchScreen';
import AbilitySearchScreen from '../components/advancedSearchScreens/AbilitySearchScreen';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const AdvancedSearchScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [advancedSearchAPI, advancedResults] = useAdvancedResults([]);
  const [typeSearchApi, typeResults] = useTypeResults([]);
  // const [getPokemonFromUrl, pokemonResults] = useGetPokemonFromUrl([]);
  const [searchParam, setSearchParam] = useState('pokemon');

  const searchSelection = (param) => {
    if (param === 'pokemon') {
      return <PokemonSearchScreen navigation={props.navigation} />
    }
    if (param === 'type') {
      return <TypeSearchScreen navigation={props.navigation} />
    }
    if (param === 'move') {
      return <MoveSearchScreen navigation={props.navigation} />
    }
    if (param === 'ability') {
      return <AbilitySearchScreen navigation={props.navigation} />
    }
  }

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <View style={styles.searchParamsContainter}>
          <Pressable onPress={() => setSearchParam('pokemon')}>
            <View style={[searchParam === 'pokemon' ? styles.activeSearchParamText : styles.inactiveSearchParamText]}>
              <Text allowFontScaling={false} style={[searchParam === 'pokemon' ? styles.activeSearchParamText : styles.inactiveSearchParamText]}>Pokemon</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setSearchParam('type')}>
            <View style={[searchParam === 'type' ? styles.activeSearchParamText : styles.inactiveSearchParamText]}>
              <Text allowFontScaling={false} style={[searchParam === 'type' ? styles.activeSearchParamText : styles.inactiveSearchParamText]}>Type</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setSearchParam('move')}>
            <View style={[searchParam === 'move' ? styles.activeSearchParamText : styles.inactiveSearchParamText]}>
              <Text allowFontScaling={false} style={[searchParam === 'move' ? styles.activeSearchParamText : styles.inactiveSearchParamText]}>Move</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setSearchParam('ability')}>
            <View style={[searchParam === 'ability' ? styles.activeSearchParamText : styles.inactiveSearchParamText]}>
              <Text allowFontScaling={false} style={[searchParam === 'ability' ? styles.activeSearchParamText : styles.inactiveSearchParamText]}>Ability</Text>
            </View>
          </Pressable>
        </View>
        {searchSelection(searchParam)}
      </View>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353340',
    flexDirection: 'column',
    flex: 1
  },
  searchBarContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 100,
    marginBottom: 18
  },
  searchBar:{
    paddingHorizontal: 6
  },
  searchSettingIcon: {
    paddingRight: 20
  },
  searchParamsContainter: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: 16
  },
  activeSearchParamText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    borderBottomWidth: 2,
    borderColor: '#fff',
    paddingBottom: 1,
  },
  inactiveSearchParamText: {
    color: 'rgb(175, 175, 175)',
    fontSize: 18,
    fontWeight: '400',
  }
});

export default React.memo(AdvancedSearchScreen);