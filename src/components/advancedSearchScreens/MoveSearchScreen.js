import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';

import SearchBarByMove from '../navigatorCards/searchBars/SearchBarByMove';
import PokedexCard from '../../pokedex/PokedexCard';
import moveData from '../../data/moves.json';
import useMoveResults from '../../hooks/useMoveResults';
import ShowMoveSearchResult from '../resultsCards/ShowMoveSearchResult';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const MoveSearchScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [moveSearchApi, moveResults] = useMoveResults([]);
  const [searchParam, setSearchParam] = useState('move');
  const [filteredResults, setFilteredResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('all');
  const [params, setParams] = useState([
    {label: 'All Move Types', value: 'all'},
    {label: 'Normal', value: 1},
    {label: 'Fighting', value: 2},
    {label: 'Flying', value: 3},
    {label: 'Poison', value: 4},
    {label: 'Ground', value: 5},
    {label: 'Rock', value: 6},
    {label: 'Bug', value: 7},
    {label: 'Steel', value: 9},
    {label: 'Fire', value: 10},
    {label: 'Water', value: 11},
    {label: 'Grass', value: 12},
    {label: 'Electric', value: 13},
    {label: 'Psychic', value: 14},
    {label: 'Ice', value: 15},
    {label: 'Dragon', value: 16},
    {label: 'Dark', value: 17},
    {label: 'Fairy', value: 18},
  ])

  const showPokeDex = (el, param) => {
    if (param === 'move') {
      return <FlatList 
        horizontal={false}
        data={el}
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
                return moveSearchApi(item.identifier)
                }}>
                <PokedexCard results={item} searchParam={param} />
              </Pressable>
            )
          }}
        />
      } catch (error) {
        console.log(error);
      }
    } else return showPokeDex(el, param)
  }
  
  const searchMoves = (el, param) => {
    if (param === '') return setFilteredResults(el)
    try {
      const res = el.filter(item => item.identifier.includes(param.replace(' ', '-').toLowerCase()))
      return setFilteredResults(res)
    } catch (error) {
      console.log(error);
    }
  };

  const showType = (el, param) => {
    if (param === 'all') return el
    return el.filter(item => item.type_id === param)
  }

  useEffect(() => {
    searchMoves(moveData, searchTerm)
  }, [searchTerm])

  const showMoveCard = (param) => {
    if (param !== '') {
      return <FlatList 
        horizontal={false}
        scrollEnabled={false}
        data={moveResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(
            <View>
              <Pressable onPress={() => setSearchTerm('')} style={{width: '90%', alignSelf: 'center', zIndex: 1}}>
                <Text style={{ position: 'absolute', right: 6, top: 6, fontStyle: 'italic', color: 'rgb(175, 175, 175)' }}>CLEAR</Text>
              </Pressable>
              <Pressable onPress={() => props.navigation.navigate('Move Detail Modal', { results: item })}>
                <ShowMoveSearchResult results={item} />
              </Pressable>
            </View>
          )
        }}
      />
    } else {
      return null;
    }
  }

  const showClear = (el, term) => {
    if(el !== null || term !== '') {
      return <Pressable 
      onPress={async() => {
        await moveSearchApi()
        setSearchTerm('')
      }} 
      style={{ width: '90%', alignSelf: 'center', zIndex: 1 }}>
      <Text style={{ position: 'absolute', right: 6, top: 6, fontStyle: 'italic', color: 'rgb(175, 175, 175)' }}>CLEAR</Text>
    </Pressable>
    } else return null
  }

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBarByMove 
          searchTerm={searchTerm} 
          onSearchTermChange={setSearchTerm} 
          onSearchTermSubmit={() => {
            searchMoves(moveData, searchTerm.replace(' ', '-').toLowerCase())
            return moveSearchApi(searchTerm.replace(' ', '-').toLowerCase())
          }}
          style={styles.searchBar}
          />
        </View>
        <View style={{height: 'auto'}}>
          {showClear(moveResults, searchTerm)}
          {showMoveCard(searchTerm)}
        </View>
        <View style={{height: 5 }} />
        <DropDownPicker 
          open={open}
          value={value}
          items={params}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setParams}
          placeholder='Generations'
          style={styles.dropDown}
          textStyle={{
            color: '#fff',
            fontSize: 24,
            paddingLeft: 2,
            fontWeight: '500',
          }}
          dropDownContainerStyle={[styles.dropDown, { backgroundColor: '#464450', paddingHorizontal: 32 }]}
          itemSeparator={true}
          listItemLabelStyle={{ fontWeight: '400', fontSize: 24 }}
          selectedItemLabelStyle={{ fontWeight: '600' }}
          closeAfterSelecting={true}
          theme='DARK'
        />
        {displayFilteredResults(showType(filteredResults, value), searchParam)}
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
  dropDown: {
    backgroundColor: '#464450a6',
    marginBottom: 22,
    borderWidth: 0,
    width: '90%',
    alignSelf: 'center'
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