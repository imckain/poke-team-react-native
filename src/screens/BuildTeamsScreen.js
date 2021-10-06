import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList, ScrollView, TouchableWithoutFeedback, Pressable, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BuildTeamSearchBar from '../components/buildTeamComponents/BuildTeamSearchBar';
import useBuildResults from '../hooks/useBuildResults';
import ShowAdvancedSearchResult from '../components/resultsCards/ShowAdvancedSearchResult';
import BuildTeamsButton from '../components/buildTeamComponents/BuildTeamsButton';
import AddPokemonButton from '../components/buildTeamComponents/AddPokemon';
import PokemonSlotCard from '../components/buildTeamComponents/PokemonSlotCard';
import { TextInput } from 'react-native-gesture-handler';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const BuildTeamsScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [teamName, setTeamName] = useState('');
  const [buildSearchApi, buildResults] = useBuildResults([]);

  const showPokemonCard = (param) => {
    if (param !== '') {
      return <FlatList 
        horizontal={false}
        scrollEnabled={false}
        data={buildResults}
        style={{height: 'auto'}}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(
            <View style={styles.addMonCard}>
              <Pressable style={{flex: 1}} onPress={() => props.navigation.navigate('Detail Modal', { results: item })}>
                <ShowAdvancedSearchResult results={item} />
              </Pressable>
              <Pressable>
                <AddPokemonButton name={item.name} width={'90%'} height={40} />
              </Pressable>
            </View>
          )
        }}
      />
    } else {
      return null;
    }
  }

  const storePokemon = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@pokemon', jsonValue)
    } catch (error) {
      
    }
  }

  return (
    <HideKeyboard>
      <ScrollView style={styles.container}>
        <View style={styles.teamNameContainer}>
          <TextInput 
            placeholder={'Team 1'} 
            showSoftInputOnFocus={false}
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholderTextColor='rgb(175, 175, 175)'
            value={teamName}
            onChangeText={setTeamName}
            // onEndEditing={onSearchTermSubmit}
            // clearButtonMode='always'
            keyboardAppearance='dark'
            returnKeyType={'done'}
          />
        </View>
        <View style={styles.searchBarContainer}>
          <BuildTeamSearchBar 
          searchTerm={searchTerm} 
          onSearchTermChange={setSearchTerm} 
          onSearchTermSubmit={() => buildSearchApi(searchTerm)}
          style={styles.searchBar}
          />
        </View>
        <View style={{height: 'auto'}}>
          {showPokemonCard(searchTerm)}
        </View>
        <View style={{height: 5 }} />
        <View style={styles.teamSlotContainer}>
          <PokemonSlotCard results={buildResults} />
          <PokemonSlotCard results={buildResults} />
          <PokemonSlotCard results={buildResults} />
          <PokemonSlotCard results={buildResults} />
          <PokemonSlotCard results={buildResults} />
          <PokemonSlotCard results={buildResults} />
        </View>
      </ScrollView>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353340',
    flexDirection: 'column',
    flex: 1,
    paddingTop: 20,
    width: '100%',
  },
  teamSlotContainer: {
    marginBottom: 90
  },
  addMonCard: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
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
  teamNameContainer: {
    height: 'auto',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  inputStyle: {
    height: '100%',
    flex: 1,
    fontSize: 60,
    textAlign: 'center',
    fontWeight: '500',
    color: '#fff',
  }
});

export default React.memo(BuildTeamsScreen);