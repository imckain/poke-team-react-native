import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import SearchBarByName from '../components/navigatorCards/searchBars/SearchBarByName';
import SearchBarByType from '../components/navigatorCards/searchBars/SearchBarByType';
import SearchBarByMove from '../components/navigatorCards/searchBars/SearchBarByMove';
import SearchBarByAbility from '../components/navigatorCards/searchBars/SearchBarByAbility';
import ShowAdvancedSearchResult from '../components/teamBuilder/ShowAdvancedSearchResult';

import useAdvancedResults from '../hooks/useAdvancedResults';
import PokedexCard from '../pokedex/PokedexCard';

import pokemonData from '../data/pokemon.json';
import typeData from '../data/type.json';
import moveData from '../data/moves.json';
import abilityData from '../data/abilities.json';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const AdvancedSearchScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [advancedSearchAPI, advancedResults] = useAdvancedResults([]);
  const [searchParam, setSearchParam] = useState('pokemon');

  const searchSelection = (param) => {
    if (param === 'pokemon') {
      return <SearchBarByName 
        searchTerm={searchTerm} 
        onSearchTermChange={setSearchTerm} 
        onSearchTermSubmit={() => advancedSearchAPI(searchParam, searchTerm)}
        style={styles.searchBar}
      />
    }
    if (param === 'type') {
      return <SearchBarByType 
        searchTerm={searchTerm} 
        onSearchTermChange={setSearchTerm} 
        onSearchTermSubmit={() => advancedSearchAPI(searchParam, searchTerm)}
        style={styles.searchBar}
      />
    }
    if (param === 'move') {
      return <SearchBarByMove 
        searchTerm={searchTerm} 
        onSearchTermChange={setSearchTerm} 
        onSearchTermSubmit={() => advancedSearchAPI(searchParam, searchTerm)}
        style={styles.searchBar}
      />
    }
    if (param === 'ability') {
      return <SearchBarByAbility 
        searchTerm={searchTerm} 
        onSearchTermChange={setSearchTerm} 
        onSearchTermSubmit={() => advancedSearchAPI(searchParam, searchTerm)}
        style={styles.searchBar}
      />
    }
  }

  const showPokeDex = (param) => {
    if (param === 'pokemon') {
      return <FlatList 
        horizontal={false}
        data={pokemonData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(
            <Pressable>
              <PokedexCard results={item} searchParam={searchParam} />
            </Pressable>
          )
        }}
      />
    }
    if (param === 'type') {
      return <FlatList 
        horizontal={false}
        data={typeData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(
            <Pressable>
              <PokedexCard results={item} searchParam={searchParam} />
            </Pressable>
          )
        }}
      />
    }
    if (param === 'move') {
      return <FlatList 
        horizontal={false}
        data={moveData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(
            <Pressable>
              <PokedexCard results={item} searchParam={searchParam} />
            </Pressable>
          )
        }}
      />
    }
    if (param === 'ability') {
      return <FlatList 
        horizontal={false}
        data={abilityData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(
            <Pressable>
              <PokedexCard results={item} searchParam={searchParam} />
            </Pressable>
          )
        }}
      />
    }
  }

  const showPokemonCard = (param) => {
    if (param !== '') {
      return <FlatList 
        horizontal={false}
        data={advancedResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(
            <Pressable onPress={() => props.navigation.navigate('Detail Modal', { results: item })}>
              <ShowAdvancedSearchResult results={item} />
            </Pressable>
          )
        }}
      />
    } else {
      return null;
    }
  }

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          {searchSelection(searchParam)}
          <View style={styles.searchParamsContainter}>
            <Pressable onPress={() => setSearchParam('pokemon')}>
              <View style={[searchParam === 'pokemon' ? styles.activeSearchParamText : styles.inactiveSearchParamText]}>
                <Text style={[searchParam === 'pokemon' ? styles.activeSearchParamText : styles.inactiveSearchParamText]}>Pokemon</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setSearchParam('type')}>
              <View style={[searchParam === 'type' ? styles.activeSearchParamText : styles.inactiveSearchParamText]}>
                <Text style={[searchParam === 'type' ? styles.activeSearchParamText : styles.inactiveSearchParamText]}>Type</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setSearchParam('move')}>
              <View style={[searchParam === 'move' ? styles.activeSearchParamText : styles.inactiveSearchParamText]}>
                <Text style={[searchParam === 'move' ? styles.activeSearchParamText : styles.inactiveSearchParamText]}>Move</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setSearchParam('ability')}>
              <View style={[searchParam === 'ability' ? styles.activeSearchParamText : styles.inactiveSearchParamText]}>
                <Text style={[searchParam === 'ability' ? styles.activeSearchParamText : styles.inactiveSearchParamText]}>Ability</Text>
              </View>
            </Pressable>
          </View>
        </View>
        {showPokemonCard(searchTerm)}
        {showPokeDex(searchParam)}
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
    justifyContent: 'space-evenly'
  },
  activeSearchParamText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    borderBottomWidth: 2,
    borderColor: '#fff',
    paddingBottom: 1,
  },
  inactiveSearchParamText: {
    color: 'rgb(175, 175, 175)',
    fontSize: 22,
    fontWeight: '400',
  }
});

export default React.memo(AdvancedSearchScreen);