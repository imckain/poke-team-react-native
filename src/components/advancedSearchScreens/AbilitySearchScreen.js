import React, { useState } from 'react';
import { View, StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

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

  const showPokeDex = (param) => {
    if (param === 'ability') {
      return <FlatList 
        horizontal={false}
        data={abilityData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(
            <Pressable onPress={async() => {
              await setSearchTerm(item.identifier);
              return abilitySearchApi(item.identifier);
              }}>
              <PokedexCard results={item} searchParam={searchParam} />
            </Pressable>
          )
        }}
      />
    }
  }

  const showAbilityCard = (param) => {
    if (param !== '') {
      return <FlatList 
        horizontal={false}
        scrollEnabled={false}
        data={abilityResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(
            <Pressable onPress={() => props.navigation.navigate('Ability Detail Modal', { results: item })}>
              <ShowAbilitySearchResult results={item} />
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
          <SearchBarByAbility 
          searchTerm={searchTerm} 
          onSearchTermChange={setSearchTerm} 
          onSearchTermSubmit={() => abilitySearchApi(searchTerm.replace(' ', '-'))}
          style={styles.searchBar}
          />
        </View>
        <View style={{height: 'auto'}}>
          {showAbilityCard(searchTerm)}
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

export default React.memo(AbilitySearchScreen);