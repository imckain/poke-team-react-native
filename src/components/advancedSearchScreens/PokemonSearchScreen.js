import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import SearchBarByName from '../navigatorCards/searchBars/SearchBarByName';
import ShowAdvancedSearchResult from '../resultsCards/ShowAdvancedSearchResult';

import useAdvancedResults from '../../hooks/useAdvancedResults';
import PokedexCard from '../../pokedex/PokedexCard';

import pokemonData from '../../data/pokemon.json';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const PokemonSearchScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [advancedSearchAPI, advancedResults] = useAdvancedResults([]);
  const [searchParam, setSearchParam] = useState('pokemon');
  const [filteredResults, setFilteredResults] = useState([]);
  
  const showPokeDex = (param) => {
    if (param === 'pokemon') {
      return <FlatList 
        horizontal={false}
        data={pokemonData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(
            <Pressable key={item.id} onPress={async() => {
              await setSearchTerm(item.identifier); 
              return advancedSearchAPI(item.identifier)
              }}>
              <PokedexCard results={item} searchParam={param} />
            </Pressable>
          )
        }}
      />
    }
  }
  
  const displayFilteredResults = (el, param) => {
    if (searchTerm !== '') {
      try {      
        return <FlatList 
          horizontal={false}
          data={el}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return(
              <Pressable key={item.id} onPress={async() => {
                await setSearchTerm(item.identifier); 
                return advancedSearchAPI(item.identifier)
                }}>
                <PokedexCard results={item} searchParam={param} />
              </Pressable>
            )
          }}
        />
      } catch (error) {
        console.log(error);
      }
    } else return showPokeDex(param)
  }
  
  const searchPokemon = (el, param) => {
    if (param === '') return setFilteredResults(el)
    try {
      const res = el.filter(item => item.identifier.includes(param.replace(' ', '-').toLowerCase()))
      return setFilteredResults(res)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchPokemon(pokemonData, searchTerm)
  }, [searchTerm])

  const showPokemonCard = (param) => {
    if (param !== '') {
      return <FlatList 
        horizontal={false}
        scrollEnabled={false}
        data={advancedResults}
        style={{height: 'auto'}}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(
            <Pressable style={{}} onPress={() => props.navigation.navigate('Detail Modal', { results: item, navigation: props.navigation })}>
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
          <SearchBarByName 
          searchTerm={searchTerm} 
          onSearchTermChange={setSearchTerm} 
          onSearchTermSubmit={() => {
            searchPokemon(pokemonData, searchTerm.replace(' ', '-').toLowerCase())
            return advancedSearchAPI(searchTerm.replace(' ', '-').toLowerCase())
          }}
          style={styles.searchBar}
          />
        </View>
        <View style={{height: 'auto'}}>
          {showPokemonCard(searchTerm)}
        </View>
        <View style={{height: 5 }} />
        {displayFilteredResults(filteredResults, searchParam)}
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

export default React.memo(PokemonSearchScreen);