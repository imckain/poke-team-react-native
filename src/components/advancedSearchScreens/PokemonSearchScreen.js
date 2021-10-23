import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';

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
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('all');
  const [params, setParams] = useState([
    {label: 'All Generations', value: 'all'},
    {label: 'Gen I', value: 1},
    {label: 'Gen II', value: 2},
    {label: 'Gen III', value: 3},
    {label: 'Gen IV', value: 4},
    {label: 'Gen V', value: 5},
    {label: 'Gen VI', value: 6},
    {label: 'Gen VII', value: 7},
    {label: 'Gen VIII', value: 8},
  ])
  
  const showPokeDex = (el, param) => {
    if (param === 'pokemon') {
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
    } else return showPokeDex(el, param)
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

  const showGeneration = (el, param) => {
    if (param === 'all') return el
    return el.filter(item => item.generation === param)
  }

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
    } else return null;
  }

  const showClear = (el) => {
    if(el !== null) {
      return <Pressable 
      onPress={async() => {
        await advancedSearchAPI()
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
          <View>
            {showClear(advancedResults)}
            {showPokemonCard(searchTerm)}
          </View>
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
          // listMode='MODAL'
          listMode='FLATLIST'
        />
        {displayFilteredResults(showGeneration(filteredResults, value), searchParam)}
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
  dropDown: {
    backgroundColor: '#464450a6',
    marginBottom: 22,
    borderWidth: 0,
    width: '90%',
    alignSelf: 'center'
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