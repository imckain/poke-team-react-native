import React, { useState, useContext, useCallback } from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableWithoutFeedback, Pressable, Keyboard } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Context as TeamsContext } from '../context/TeamContext';
import uuid from 'react-native-uuid'

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

const EditTeamsScreen = (props) => {
  const { state, editTeam } = useContext(TeamsContext);

  const id = props.route.params.id
  const team = state.find(team => team.id === id)

  const [searchTerm, setSearchTerm] = useState('');
  const [teamName, setTeamName] = useState(team.name);
  const [buildSearchApi, buildResults] = useBuildResults();
  const [teamMembers, setTeamMembers] = useState(team.content)

  
  const showPokemonCard = (param) => {
    if (param !== '') {
      return <FlatList 
      scrollEnabled={false}
      data={buildResults}
      style={{height: 'auto'}}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        const showAddButton = (el) => {
          return (
            teamMembers.length < 6 ?
              <Pressable onPress={() => setTeamMembers([...teamMembers].concat(el))}>
                <AddPokemonButton name={el.name.replaceAll('-', ' ')} width={'90%'} height={40} />
              </Pressable>
            :
              null
          )
        }
        return(
          <View style={styles.addMonCard}>
            <Pressable style={{flex: 1}} onPress={() => props.navigation.navigate('Detail Modal', { results: [item] })}>
              <ShowAdvancedSearchResult results={item} />
            </Pressable>
            {showAddButton(item)}
          </View>
        )
        }}
      />
    } else return null;
  }

  const saveTeamAndGoBack = useCallback(async(id, name, content) => {;
    if (teamMembers[0] !== null) {
      await editTeam(id, name, content)
      return (props.navigation.navigate('Teams Tab Nav', { results: content }))
    } else return (props.navigation.navigate('Teams Tab Nav'))
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

  const createTeamMember = (el) => {
    if (el[0] !== undefined) {
      return el.map((item) => {
        const id = uuid.v4()
        return (
          <View key={id} style={{ flexDirection: 'row', width: '90%', alignSelf: 'center' }}>
            <Pressable onPress={() => props.navigation.navigate('Detail Modal', { results: [item] })}>
              <PokemonSlotCard results={item} />
            </Pressable>
            <Pressable style={{ position: 'absolute', alignSelf: 'center', right: 0, padding: 5 }} onPress={() => deleteTeamMember(item)}>
              <Ionicons name="ios-remove-circle-outline" size={16} color="#ff0000" />
            </Pressable>
          </View>
        )
      })
    } else return (
      <View>
        <Text>Search for a Pokemon to add it to your team</Text>
      </View>
    )
  }

  const deleteTeamMember = (el) => {
    const arr = [...teamMembers];
    const idx = teamMembers.indexOf(el);
    if (idx !== -1) {
      arr.splice(idx, 1)
      setTeamMembers(arr)
    }
  }

  return (
    <HideKeyboard>
      <ScrollView style={styles.container}>
        <View style={styles.teamNameContainer}>
          <TextInput 
            placeholder={'Team Name'} 
            showSoftInputOnFocus={false}
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholderTextColor='rgb(175, 175, 175)'
            value={teamName}
            onChangeText={(text) => setTeamName(text)}
            clearButtonMode='never'
            keyboardAppearance='dark'
            returnKeyType={'done'}
            allowFontScaling={false}
            maxLength={10}
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
            {createTeamMember(teamMembers)}
          </View>
          <Pressable onPress={() => saveTeamAndGoBack(id, teamName, teamMembers)} >
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
    fontSize: 48,
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

export default React.memo(EditTeamsScreen);