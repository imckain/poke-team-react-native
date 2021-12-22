import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons';

import SearchBarByAbility from '../navigatorCards/searchBars/SearchBarByAbility';
import useAbilityResults from '../../hooks/useAbilityResults';
import PokedexCard from '../../pokedex/PokedexCard';
import abilityData from '../../data/abilities.json';
import ShowAbilitySearchResult from '../resultsCards/ShowAbilitySearchResult';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const AbilitySearchScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [abilitySearchApi, abilityResults] = useAbilityResults([]);
  const [searchParam, setSearchParam] = useState('ability');
  const [filteredResults, setFilteredResults] = useState([]);

  const showPokeDex = (param) => {
    if (param === 'ability') {
      return <FlatList 
        horizontal={false}
        data={abilityData}
        keyExtractor={(item) => item.identifier}
        renderItem={({ item }) => {
          return(
            <TouchableOpacity 
              delayPressIn={50}
              onPressIn={async() => {
                await abilitySearchApi(item.identifier);
              }}
              onPressOut={async() => {
                await abilitySearchApi(item.identifier);
                if (abilityResults !== null && abilityResults[0].name.replaceAll(' ', '-') === item.identifier) {
                  await abilitySearchApi(item.identifier);
                  return props.navigation.navigate('Ability Detail Modal', { results: abilityResults[0] })
                }
              }}
            >
              <PokedexCard results={item} searchParam={searchParam} />
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
              <TouchableOpacity 
                delayPressIn={50}
                onPressIn={async() => {
                  await abilitySearchApi(item.identifier);
                }}
                onPressOut={async() => {
                  await abilitySearchApi(item.identifier);
                  if (abilityResults !== null && abilityResults[0].name.replaceAll(' ', '-') === item.identifier) {
                    await abilitySearchApi(item.identifier);
                    return props.navigation.navigate('Ability Detail Modal', { results: abilityResults[0] })
                  }
                }}
              >
                <PokedexCard results={item} searchParam={searchParam} />
              </TouchableOpacity>
            )
          }}
        />
      } catch (error) {
        console.log(error);
      }
    } else return showPokeDex(param)
  }
  
  const searchAbilities = (el, param) => {
    if (param === '') return setFilteredResults(el)
    try {
      const res = el.filter(item => item.identifier.includes(param.replaceAll(' ', '-').toLowerCase()))
      return setFilteredResults(res)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchAbilities(abilityData, searchTerm)
  }, [searchTerm])

  // const showAbilityCard = (el, term) => {
  //   if (term !== '') {
  //     return <FlatList 
  //       horizontal={false}
  //       scrollEnabled={false}
  //       data={abilityResults}
  //       keyExtractor={(item) => item.name}
  //       renderItem={({ item }) => {
  //         return(
  //           <TouchableOpacity onPress={() => props.navigation.navigate('Ability Detail Modal', { results: item })}>
  //             <ShowAbilitySearchResult results={item} />
  //           </TouchableOpacity>
  //         )
  //       }}
  //     />
  //   } else {
  //     return null;
  //   }
  // }

  // const showClear = (el, term) => {
  //   if(el !== null || term !== '') {
  //     return (
  //       <TouchableOpacity 
  //         onPress={async() => {
  //           await abilitySearchApi()
  //           setSearchTerm('')
  //         }} 
  //         style={styles.clear}
  //       >
  //         <Ionicons name="ios-close-circle" size={18} color="rgb(75, 75, 75)" />
  //       </TouchableOpacity>
  //     )
  //   } else return null
  // }

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBarByAbility 
          searchTerm={searchTerm} 
          onSearchTermChange={setSearchTerm} 
          onSearchTermSubmit={() => {
            searchAbilities(abilityData, searchTerm.replaceAll(' ', '-').toLowerCase())
          }}
          style={{zIndex: 0}}
          />
        </View>
        <View style={styles.dexContainer}>
          {displayFilteredResults(filteredResults, searchParam)}
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

export default React.memo(AbilitySearchScreen);