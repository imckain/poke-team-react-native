import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import AdvancedSearchNavigator from '../components/navigatorCards/AdvancedSearchNavigator';

import { Ionicons } from '@expo/vector-icons';

import BuildTeamsNavigator from '../components/navigatorCards/BuildTeamsNavigator';
import ProfileNavigator from '../components/navigatorCards/ProfileNavigator';
import SearchBarByName from '../components/navigatorCards/searchBars/SearchBarByName';
import TeamsNavigator from '../components/navigatorCards/ViewTeamsNavigator';
import ShowSearchResult from '../components/resultsCards/ShowSearchResult';

import useResults from '../hooks/useResults';


const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const HomeScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchAPI, results] = useResults([]);

  const showClear = (term) => {
    if(term !== '') {
      return (
        <Pressable 
          onPress={() => {
            setSearchTerm('')
          }} 
          style={styles.clear}
        >
          <Ionicons name="ios-close-circle" size={18} color="rgb(175, 175, 175)" />
        </Pressable>
      )
    } else return null
  }

  const showResultCard = (el) => {
    if (el !== null) {
      return (
        <Pressable onPress={() => props.navigation.navigate('Detail Modal', { results: el })}>
          <ShowSearchResult results={el} />
        </Pressable>
      )
    } else return null
  }

  return (
    <HideKeyboard>
      <ScrollView style={styles.container}>
        <StatusBar style='light' />
        <View style={styles.searchBarContainer}>
          <SearchBarByName 
            searchTerm={searchTerm} 
            onSearchTermChange={setSearchTerm} 
            onSearchTermSubmit={() => searchAPI(searchTerm.replace(' ', '-').toLowerCase())}
            style={{zIndex: 0}}
          />
          {showClear(searchTerm)}
        </View>
        {showResultCard(results)}
        <View style={styles.teamsNavContainer}>
          <Pressable style={styles.buttonStyle} onPress={() => props.navigation.navigate('Teams Tab Nav')} >
            <TeamsNavigator />
          </Pressable>
          <Pressable style={styles.buttonStyle} onPress={() => props.navigation.navigate('Build a Team')}>
            <BuildTeamsNavigator height={140} width={'100%'} />
          </Pressable>
        </View>
        <View style={styles.largeNavContainer}>
          <Pressable style={styles.largeButtonStyle} onPress={() => props.navigation.navigate('Search', { results: results })}>
            <AdvancedSearchNavigator results={results} />
          </Pressable>
          <Pressable style={styles.largeButtonStyle} onPress={() => props.navigation.navigate('Profile')} >
            <ProfileNavigator />
          </Pressable>
        </View>
      </ScrollView>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353340',
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
    right: 30, 
    width: 'auto',
  },
  buttonStyle: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    alignSelf: 'center'
  },
  largeButtonStyle: {
    fontSize: 32,
    width: '100%',
    fontWeight: '600',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 1
  },
  teamsNavContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 12,
    justifyContent: 'space-evenly',
    backgroundColor: '#464450a6',
    borderRadius: 10,
    width: '90%',
    height: 'auto'
  },
  largeNavContainer: {
    width: '90%',
    flexDirection: 'column',
    alignSelf: 'center',
    paddingBottom: 30
  },
});

export default HomeScreen;