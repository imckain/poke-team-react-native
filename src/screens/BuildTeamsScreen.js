import React, { useState, useContext, useCallback, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Context as TeamsContext } from '../context/TeamContext';
import uuid from 'react-native-uuid'

import BuildTeamSearchBar from '../components/buildTeamComponents/BuildTeamSearchBar';
import useBuildResults from '../hooks/useBuildResults';
import ShowAdvancedSearchResult from '../components/resultsCards/ShowAdvancedSearchResult';
import AddPokemonButton from '../components/buildTeamComponents/AddPokemon';
import PokemonSlotCard from '../components/buildTeamComponents/PokemonSlotCard';
import SaveTeamButton from '../components/buildTeamComponents/SaveTeamButton';
import pokemonData from '../data/pokemon.json';
import PokedexCard from '../pokedex/PokedexCard';

import { Ionicons } from '@expo/vector-icons';
import PokemonBuildCard from '../components/buildTeamComponents/PokemonBuildCard';
import ShowBuildResult from '../components/resultsCards/ShowBuildResult';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const BuildTeamsScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [teamName, setTeamName] = useState('');
  const [buildSearchApi, buildResults] = useBuildResults();
  const [teamMembers, setTeamMembers] = useState([]);
  const [filteredResults, setFilteredResults] = useState();
  const [searchParam, setSearchParam] = useState('pokemon');

  const { state, addTeam } = useContext(TeamsContext);

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
              return buildSearchApi(item.identifier)
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
                return buildSearchApi(item.identifier)
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

  useEffect(() => {
    searchPokemon(pokemonData, searchTerm)
  }, [searchTerm])

  const showPokemonCard = (param) => {
    if (param !== '') {
      return <FlatList 
      scrollEnabled={false}
      data={buildResults}
      style={{height: 'auto'}}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => {
        const showAddButton = (el) => {
            return (
              teamMembers.length < 6 ?
                <TouchableOpacity onPress={() => setTeamMembers([...teamMembers].concat(item))}>
                  <AddPokemonButton name={item.name} width={'90%'} height={40} />
                </TouchableOpacity>
              :
                null
            )
          }
          return(
            <View style={styles.addMonCard}>
              <TouchableOpacity style={{}} onPress={() => props.navigation.navigate('Detail Modal', { results: [item] })}>
                <ShowBuildResult results={item} />
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
          <Ionicons name="ios-close-circle" size={18} color="rgb(75, 75, 75)" />
        </TouchableOpacity>
      )
    } else return null
  }

  const createTeamMember = (el) => {
    return el.map((item) => {
      const id = uuid.v4()
      return (
        <View key={id} style={styles.wrapper}>
          <TouchableOpacity style={{ width: '80%' }} onPress={() => props.navigation.navigate('Detail Modal', { results: [item] })}>
            <PokemonBuildCard results={item} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightAction} onPress={() => deleteTeamMember(item)}>
            <Ionicons name="ios-remove-circle" size={16} color="#ff0000" />
          </TouchableOpacity>
        </View>
      )
    })
  }

  const deleteTeamMember = (el) => {
    const arr = [...teamMembers];
    const idx = teamMembers.indexOf(el);
    if (idx !== -1) {
      arr.splice(idx, 1)
      setTeamMembers(arr)
    }
  }

  const createAlert = () => {
    Alert.alert(
      "Team Name Required",
      { cancelable: true }
    );
  }

  const showSave = (name, items) => {
    if(name.length !== 0 && items.length !== 0) {
      return (
        <TouchableOpacity style={styles.save} onPress={() => addTeamAndGoBack(teamName, teamMembers)} >
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity style={[styles.save, { backgroundColor: 'rgba(105, 105, 105, 0.6)' }]} >
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      )
    }
  }

  return (
    <HideKeyboard>
      <View  style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.back} onPress={() => props.navigation.goBack(null)}>
            <Ionicons name="ios-chevron-back-outline" size={32} color="#fff" /><Text allowFontScaling={false} style={styles.backText}>Back</Text>
          </TouchableOpacity>
          {showSave(teamName, teamMembers)}
        </View>
        <View style={styles.teamNameContainer}>
          <TextInput 
            placeholder={'Team Name'} 
            showSoftInputOnFocus={false}
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholderTextColor='rgba(105, 105, 105, 0.6)'
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
        <View style={styles.teamInfoContainer}>
          <View style={styles.teamSlotContainer}>
            {createTeamMember(teamMembers)}
          </View>
          <View style={styles.dexContainer}>
            {displayFilteredResults(filteredResults, searchParam)}
          </View>
        </View>
      </View>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  wrapper: { 
    backgroundColor: '#000000',
    justifyContent: 'center',
    height: 'auto',
    flexDirection: 'column',
    width: 'auto',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  container: {
    backgroundColor: '#000000',
    flexDirection: 'column',
    paddingTop: 60,
    width: '100%',
    flex: 1
  },
  teamSlotContainer: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-evenly'
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
    flexDirection: 'row',
    paddingBottom: 60,
    flex: 1
  },
  nullMessage: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff'
  },
  rightAction: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  back: { 
    paddingHorizontal: 18, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  save: { 
    paddingHorizontal: 12, 
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: 'green',
    paddingVertical: 4,
    marginHorizontal: 12
  },
  saveText: { 
    color: '#000000', 
    fontSize: 16, 
  },
  backText: {
    color: '#fff'
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dexContainer: { 
    alignSelf: 'center',
    flex: 1,
  }
});

export default React.memo(BuildTeamsScreen);