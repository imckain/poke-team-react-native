import React, { useState, useContext, useCallback } from 'react';
import { View, StyleSheet, FlatList, ScrollView, TouchableWithoutFeedback, Pressable, Keyboard } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Context as TeamsContext } from '../context/TeamContext';

import * as SQLite from 'expo-sqlite';

import BuildTeamSearchBar from '../components/buildTeamComponents/BuildTeamSearchBar';
import useBuildResults from '../hooks/useBuildResults';
import ShowAdvancedSearchResult from '../components/resultsCards/ShowAdvancedSearchResult';
import AddPokemonButton from '../components/buildTeamComponents/AddPokemon';
import PokemonSlotCard from '../components/buildTeamComponents/PokemonSlotCard';
import SaveTeamButton from '../components/buildTeamComponents/SaveTeamButton';

import { Ionicons } from '@expo/vector-icons';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const BuildTeamsScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [teamName, setTeamName] = useState('');
  const [buildSearchApi, buildResults] = useBuildResults();

  const { state, addTeam } = useContext(TeamsContext);

  const showPokemonCard = (param) => {
    if (param !== '') {
      return <FlatList 
        scrollEnabled={false}
        data={buildResults}
        style={{height: 'auto'}}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(
            <View style={styles.addMonCard}>
              <Pressable style={{flex: 1}} onPress={() => props.navigation.navigate('Detail Modal', { results: [item] })}>
                <ShowAdvancedSearchResult results={item} />
              </Pressable>
              <Pressable>
                <AddPokemonButton name={item.name.replaceAll('-', ' ')} width={'90%'} height={40} />
              </Pressable>
            </View>
          )
        }}
      />
    } else return null;
  }

  const addTeamAndGoBack = useCallback(async () => {
    await addTeam()
    return (props.navigation.navigate('Teams Tab Nav'))
  }, [])

  const showClear = (el, term) => {
    if(el !== null || term !== '') {
      return (
        <Pressable 
          onPress={async() => {
            await buildSearchApi()
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
            clearButtonMode='never'
            keyboardAppearance='dark'
            returnKeyType={'done'}
            allowFontScaling={false}
          />
        </View>
        <View style={styles.searchBarContainer}>
          <BuildTeamSearchBar 
            searchTerm={searchTerm} 
            onSearchTermChange={setSearchTerm} 
            onSearchTermSubmit={() => buildSearchApi(searchTerm.replaceAll(' ', '-').toLowerCase())}
            style={styles.searchBar}
          />
          {showClear(buildResults, searchTerm)}
        </View>
        <View style={{height: 'auto'}}>
          {showPokemonCard(searchTerm)}
        </View>
        <View style={{height: 5 }} />
        <View style={styles.teamInfoContainer}>
          <View style={styles.teamSlotContainer}>
            <PokemonSlotCard results={[buildResults]} />
            <PokemonSlotCard results={[buildResults]} />
            <PokemonSlotCard results={[buildResults]} />
            <PokemonSlotCard results={[buildResults]} />
            <PokemonSlotCard results={[buildResults]} />
            <PokemonSlotCard results={[buildResults]} />
          </View>
          <Pressable onPress={() => addTeamAndGoBack()} >
            <SaveTeamButton height={54} width={'90%'} />
          </Pressable>
        </View>
      </ScrollView>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353340',
    flexDirection: 'column',
    paddingTop: 20,
    width: '100%',
  },
  teamSlotContainer: {
    marginBottom: 44,
  },
  addMonCard: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  searchBar: {
    zIndex: 0
  },
  clear: { 
    zIndex: 1, 
    position: 'absolute', 
    alignSelf: 'center',
    right: 34, 
    width: 'auto',
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
    fontSize: 60,
    textAlign: 'center',
    fontWeight: '500',
    color: '#fff',
  },
  teamInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 60,
  },
});

export default React.memo(BuildTeamsScreen);