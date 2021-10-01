import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, Pressable } from 'react-native';
import SearchBar from '../components/navigatorCards/SearchBar';
import ShowSearchResult from '../components/teamBuilder/ShowSearchResult';

import useResults from '../hooks/useResults';

const HomeScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchAPI, results] = useResults([]);

  return (
    <View style={styles.container}>
      <SearchBar 
        searchTerm={searchTerm} 
        onSearchTermChange={setSearchTerm} 
        onSearchTermSubmit={() => searchAPI(searchTerm)}
      />
      <Pressable onPress={() => props.navigation.navigate('Detail Modal', { results: results })}>
        <ShowSearchResult results={results} />
      </Pressable>
      <Pressable style={styles.buttonStyle} onPress={() => props.navigation.navigate('Teams')} >
        <Text>Teams</Text>
      </Pressable>
      <Pressable style={styles.buttonStyle} onPress={() => props.navigation.navigate('Profile')} >
        <Text>Profile</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353340',
    flex: 1
  },
  buttonStyle: {
    fontSize: 32,
    fontWeight: '600',
    marginVertical: 15,
    textAlign: 'center',
    alignSelf: 'center'
  },
});

export default HomeScreen;