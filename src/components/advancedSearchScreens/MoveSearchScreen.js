import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import SearchBarByMove from '../navigatorCards/searchBars/SearchBarByMove';
import ShowAdvancedSearchResult from '../teamBuilder/ShowAdvancedSearchResult';

import useAdvancedResults from '../../hooks/useAdvancedResults';
import PokedexCard from '../../pokedex/PokedexCard';

import moveData from '../../data/moves.json';
import useMoveResults from '../../hooks/useMoveResults';
import ShowMoveSearchResult from '../teamBuilder/ShowMoveSearchResult';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const MoveSearchScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [moveSearchApi, moveResults] = useMoveResults([]);
  const [searchParam, setSearchParam] = useState('move');

  const showPokeDex = (param) => {
    if (param === 'move') {
      return <FlatList 
        horizontal={false}
        data={moveData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(
            <Pressable onPress={async() => {
              await setSearchTerm(item.identifier);
              return moveSearchApi(item.identifier)
              }}>
              <PokedexCard results={item} searchParam={searchParam} />
            </Pressable>
          )
        }}
      />
    }
  }

  const showMoveCard = (param) => {
    if (param !== '') {
      return <FlatList 
        horizontal={false}
        scrollEnabled={false}
        data={moveResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(
            <Pressable onPress={() => props.navigation.navigate('Move Detail Modal', { results: item })}>
              <ShowMoveSearchResult results={item} />
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
          onSearchTermSubmit={() => moveSearchApi(searchTerm)}
          style={styles.searchBar}
          />
        </View>
        {showMoveCard(searchTerm)}
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
    flex: 1
  },
  searchBarContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 80,
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

export default React.memo(MoveSearchScreen);