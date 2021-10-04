import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import SearchBarByMove from '../navigatorCards/searchBars/SearchBarByMove';
import ShowAdvancedSearchResult from '../teamBuilder/ShowAdvancedSearchResult';

import useAdvancedResults from '../../hooks/useAdvancedResults';
import PokedexCard from '../../pokedex/PokedexCard';

import moveData from '../../data/moves.json';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const TypeSearchScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [advancedSearchAPI, advancedResults] = useAdvancedResults([]);
  const [searchParam, setSearchParam] = useState('move');

  const showPokeDex = (param) => {
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
          <SearchBarByMove 
          searchTerm={searchTerm} 
          onSearchTermChange={setSearchTerm} 
          onSearchTermSubmit={() => advancedSearchAPI(searchParam, searchTerm)}
          style={styles.searchBar}
          />
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
    height: 80,
    marginBottom: 5
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

export default React.memo(TypeSearchScreen);