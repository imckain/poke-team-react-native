import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, Pressable } from 'react-native';
import SearchBar from '../components/navigatorCards/SearchBar';

import useResults from '../hooks/useResults';

const HomeScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchAPI, results] = useResults();

  return (
    <View style={styles.container}>
      <SearchBar 
        searchTerm={searchTerm} 
        onSearchTermChange={setSearchTerm} 
        onSearchTermSubmit={() => searchAPI(searchTerm)}
      />
      <Text> {results.name}</Text>
      <Image style={styles.imageStyle} source={{ uri: results.sprites.front_default }} />
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
  imageStyle: {
    height: 150,
    width: 150,
  }
});

export default React.memo(HomeScreen);