import React, { useState } from 'react';
import { View, StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
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
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(
            <Pressable onPress={async() => {
                await setSearchTerm(item.identifier); 
                return typeSearchApi(item.identifier)
                }}>
              <PokedexCard results={item} searchParam={searchParam} />
            </Pressable>
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
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(
            <Pressable onPress={() => props.navigation.navigate('Type Detail Modal', { results: item })}>
              <ShowTypeSearchResult navigation={props.navigation} results={item} />
            </Pressable>
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
        <Pressable 
          onPress={async() => {
            await typeSearchApi()
            setSearchTerm('')
          }} 
          style={styles.clear}
        >
          <Ionicons name="ios-close-circle" size={18} color="rgb(175, 175, 175)" />
        </Pressable>
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
        <View style={{height: 5 }} />
        {showPokeDex(searchParam)}
      </View>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353340',
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
    color: 'rgb(175, 175, 175)',
    fontSize: 22,
    fontWeight: '400',
  }
});

export default React.memo(TypeSearchScreen);