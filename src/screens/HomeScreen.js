import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import BuildTeamsNavigator from '../components/navigatorCards/BuildTeamsNavigator';
import AboutNavigator from '../components/navigatorCards/AboutNavigator';
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
            onSearchTermSubmit={() => searchAPI(searchTerm.replaceAll(' ', '-').toLowerCase())}
            style={{zIndex: 0}}
          />
          {showClear(searchTerm)}
        </View>
        {showResultCard(results)}
        <View style={styles.largeNavContainer}>
          <Pressable style={styles.largeButtonStyle} onPress={() => props.navigation.navigate('Teams Tab Nav')} >
            <TeamsNavigator />
          </Pressable>
          <Pressable style={styles.largeButtonStyle} onPress={() => props.navigation.navigate('Build Team')}>
            <BuildTeamsNavigator />
          </Pressable>
          <Pressable style={styles.largeButtonStyle} onPress={() => props.navigation.navigate('Profile')} >
            <AboutNavigator />
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
    right: 34, 
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
    width: '90%',
    fontWeight: '600',
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 6
  },
  teamsNavContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    height: 'auto'
  },
  largeNavContainer: {
    justifyContent: 'space-evenly',
    borderRadius: 10,
    marginTop: 12,
    backgroundColor: '#464450a6',
    width: '90%',
    flexDirection: 'column',
    alignSelf: 'center',
    paddingVertical: 6
  },
});

export default HomeScreen;