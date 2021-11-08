import React, { useState, useContext, useCallback } from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Context as TeamsContext } from '../context/TeamContext';
import uuid from 'react-native-uuid'

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
  const [teamMembers, setTeamMembers] = useState([])

  const { state, addTeam } = useContext(TeamsContext);

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
                <TouchableOpacity onPress={() => setTeamMembers([...teamMembers].concat(item))}>
                  <AddPokemonButton name={item.name.replaceAll('-', ' ')} width={'90%'} height={40} />
                </TouchableOpacity>
              :
                null
            )
          }
          return(
            <View style={styles.addMonCard}>
              <TouchableOpacity style={{flex: 1}} onPress={() => props.navigation.navigate('Detail Modal', { results: [item] })}>
                <ShowAdvancedSearchResult results={item} />
              </TouchableOpacity>
              {showAddButton(item)}
            </View>
          )
        }}
      />
    } else return null;
  }

  const addTeamAndGoBack = useCallback(async (name, content) => {;
    if (teamMembers[0] !== null) {
      await addTeam(name, content)
      return (props.navigation.navigate('Teams Tab Nav', { results: content }))
    } else return (props.navigation.navigate('Teams Tab Nav'))
  }, [])

  const showClear = (el, term) => {
    if(el !== null || term !== '') {
      return (
        <TouchableOpacity 
          onPress={async() => {
            await buildSearchApi()
            setSearchTerm('')
          }} 
          style={styles.clear}
        >
          <Ionicons name="ios-close-circle" size={18} color="rgba(32, 32, 32, 0.637)" />
        </TouchableOpacity>
      )
    } else return null
  }

  const createTeamMember = (el) => {
    if (el[0] !== undefined) {
      return el.map((item) => {
        const id = uuid.v4()
        return (
          <View key={id} style={styles.wrapper}>
            <TouchableOpacity style={{ width: '80%' }} onPress={() => props.navigation.navigate('Detail Modal', { results: [item] })}>
              <PokemonSlotCard results={item} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightAction} onPress={() => deleteTeamMember(item)}>
              <Ionicons name="ios-trash-sharp" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        )
      })
    } else return (
      <View style={{ width: '90%', alignSelf: 'center', marginTop: 12 }}>
        <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.nullMessage}>Search for a Pokemon to add it to your team</Text>
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
      <View  style={styles.container}>
        <View style={{ alignSelf: 'flex-start' }}>
          <TouchableOpacity style={styles.back} onPress={() => props.navigation.goBack(null)}>
            <Ionicons name="ios-chevron-back-outline" size={32} color="#fff" /><Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
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
              maxLength={14}
              adjustsFontSizeToFit={true}
              numberOfLines={1}
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
            <TouchableOpacity onPress={() => addTeamAndGoBack(teamName, teamMembers)} >
              <SaveTeamButton height={54} width={'90%'} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  wrapper: { 
    borderRadius: 10, 
    overflow: 'hidden',
    marginBottom: 24,
    backgroundColor: '#464450',
    justifyContent: 'space-between',
    width: '90%',
    height: 'auto',
    alignSelf: 'center',
    flexDirection: 'row'
  },
  container: {
    backgroundColor: '#353340',
    flexDirection: 'column',
    paddingTop: 60,
    width: '100%',
    flex: 1
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
    flex: 1
  },
  nullMessage: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff'
  },
  rightAction: {
    justifyContent: 'center',
    backgroundColor: '#ff0000',
    width: 50,
    alignItems: 'center',
  },
  back: { 
    paddingHorizontal: 18, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: '#fff'
  }
});

export default React.memo(BuildTeamsScreen);