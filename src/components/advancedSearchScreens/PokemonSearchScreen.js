import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';

import { Ionicons } from '@expo/vector-icons';

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
  const [advancedSearchAPI, advancedResults] = useAdvancedResults();
  const [searchParam, setSearchParam] = useState('pokemon');
  const [filteredResults, setFilteredResults] = useState();
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
        keyExtractor={(item) => item.identifier}
        renderItem={({ item }) => {
          return(
            <TouchableOpacity onPress={async() => {
              await setSearchTerm(item.identifier); 
              return advancedSearchAPI(item.identifier)
              }}>
              <PokedexCard results={item} searchParam={param} />
            </TouchableOpacity>
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
          keyExtractor={(item) => item.identifier}
          renderItem={({ item }) => {
            return(
              <TouchableOpacity onPress={async() => {
                await setSearchTerm(item.identifier); 
                return advancedSearchAPI(item.identifier)
                }}>
                <PokedexCard results={item} searchParam={param} />
              </TouchableOpacity>
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
      const res = el.filter(item => item.identifier.includes(param.replaceAll(' ', '-').toLowerCase()))
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

  const showPokemonCard = (term) => {
    if (term !== '') {
      return <FlatList 
        horizontal={false}
        scrollEnabled={false}
        data={advancedResults}
        style={{height: 'auto'}}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return(
            <TouchableOpacity style={{}} onPress={() => props.navigation.navigate('Detail Modal', { results: [item], navigation: props.navigation })}>
              <ShowAdvancedSearchResult results={item} />
            </TouchableOpacity>
          )
        }}
      />
    } else return null;
  }

  const showClear = (el, term) => {
    if(el !== null || term !== '') {
      return (
        <TouchableOpacity 
          onPress={async() => {
            await advancedSearchAPI()
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
          <SearchBarByName 
            searchTerm={searchTerm} 
            onSearchTermChange={setSearchTerm} 
            onSearchTermSubmit={() => {
              searchPokemon(pokemonData, searchTerm.replaceAll(' ', '-').toLowerCase())
              return advancedSearchAPI(searchTerm.replaceAll(' ', '-').toLowerCase())
            }}
            style={{zIndex: 0}}
          />
          {showClear(advancedResults, searchTerm)}
        </View>
        <View>
          {showPokemonCard(searchTerm)}
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
          style={styles.dropDownHeader}
          textStyle={{
            color: '#fff',
            fontSize: 24,
            paddingLeft: 2,
            fontWeight: '500',
          }}
          dropDownContainerStyle={styles.dropDown}
          itemSeparator={true}
          listItemLabelStyle={{ fontWeight: '400', fontSize: 24 }}
          selectedItemLabelStyle={{ fontWeight: '600' }}
          closeAfterSelecting={true}
          theme='DARK'
          listMode='FLATLIST'
        />
        <View style={styles.dexContainer}>
          {displayFilteredResults(showGeneration(filteredResults, value), searchParam)}
        </View>
      </View>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flexDirection: 'column',
    flex: 1
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
  dropDownHeader: {
    backgroundColor: '#000000',
    marginBottom: 22,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'rgba(105, 105, 105, 0.6)'
  },
  dropDown: {
    backgroundColor: '#000000',
    marginBottom: 22,
    borderWidth: 0,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 12
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
  dexContainer: { 
    alignSelf: 'center',
    flex: 1
  }
});

export default React.memo(PokemonSearchScreen);