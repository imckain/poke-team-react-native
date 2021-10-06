import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, TouchableWithoutFeedback, Pressable, Keyboard } from 'react-native';
import BuildTeamSearchBar from '../components/buildTeamComponents/BuildTeamSearchBar';
import useBuildResults from '../hooks/useBuildResults';
import ShowAdvancedSearchResult from '../components/resultsCards/ShowAdvancedSearchResult';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const BuildTeamsScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [buildSearchApi, buildResults] = useBuildResults([]);

  const showPokemonCard = (param) => {
    if (param !== '') {
      return <FlatList 
        horizontal={false}
        scrollEnabled={false}
        data={buildResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(
            <Pressable onPress={() => props.navigation.navigate('Detail Modal', { results: item })}>
              <ShowAdvancedSearchResult results={item} />
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
          <BuildTeamSearchBar 
          searchTerm={searchTerm} 
          onSearchTermChange={setSearchTerm} 
          onSearchTermSubmit={() => buildSearchApi(searchTerm)}
          style={styles.searchBar}
          />
        </View>
        {showPokemonCard(searchTerm)}
        <View style={{height: 5 }} />
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
    marginBottom: 5
  },
  searchBar:{
    paddingHorizontal: 6
  },
});

export default React.memo(BuildTeamsScreen);