import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons';

import SearchBarByType from '../navigatorCards/searchBars/SearchBarByType';
import ShowTypeSearchResult from '../resultsCards/ShowTypeSearchResult';

import useTypeResults from '../../hooks/useTypeResults';
import PokedexCard from '../../pokedex/PokedexCard';

import typeData from '../../data/type.json';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const TypeSearchScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeSearchApi, typeResults] = useTypeResults([]);
  const [searchParam, setSearchParam] = useState('type');

  const showPokeDex = (param) => {
    if (param === 'type') {
      return <FlatList 
        horizontal={false}
        data={typeData}
        keyExtractor={(item) => item.identifier}
        renderItem={({ item }) => {
          return(
            <TouchableOpacity onPress={async() => {
                await setSearchTerm(item.identifier); 
                return typeSearchApi(item.identifier)
                }}>
              <PokedexCard results={item} searchParam={searchParam} />
            </TouchableOpacity>
          )
        }}
      />
    }
  }

  const showTypeCard = (param) => {
    if (param !== '') {
      return <FlatList 
        horizontal={false}
        scrollEnabled={false}
        data={typeResults}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return(
            <TouchableOpacity onPress={() => props.navigation.navigate('Type Detail Modal', { results: item })}>
              <ShowTypeSearchResult navigation={props.navigation} results={item} />
            </TouchableOpacity>
          )
        }}
      />
    } else {
      return null;
    }
  }

  const showClear = (el, term) => {
    if(el !== null || term !== '') {
      return (
        <TouchableOpacity 
          onPress={async() => {
            await typeSearchApi()
            setSearchTerm('')
          }} 
          style={styles.clear}
        >
          <Ionicons name="ios-close-circle" size={18} color="rgb(42, 42, 42)" />
        </TouchableOpacity>
      )
    } else return null
  }

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBarByType 
          searchTerm={searchTerm} 
          onSearchTermChange={setSearchTerm} 
          onSearchTermSubmit={() => typeSearchApi(searchTerm.replaceAll(' ', '-').toLowerCase())}
          style={{zIndex: 0}}
          />
          {showClear(typeResults, searchTerm)}
        </View>
        <View style={{height: 'auto'}}>
          {showTypeCard(searchTerm)}
        </View>
        <View style={styles.pokedexCardContainer}>
          {showPokeDex(searchParam)}
        </View>
      </View>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flexDirection: 'column',
    flex: 1,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  clear: { 
    zIndex: 1, 
    position: 'absolute', 
    alignSelf: 'center',
    right: 34, 
    width: 'auto',
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
    color: 'rgba(105, 105, 105, 0.6)',
    fontSize: 22,
    fontWeight: '400',
  },
  pokedexCardContainer: {
    flex: 1,
    marginTop: 12
  }
});

export default React.memo(TypeSearchScreen);