import React, { useState } from 'react';
import { View, StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import SearchBar from '../components/navigatorCards/SearchBar';
import ShowAdvancedSearchResult from '../components/teamBuilder/ShowAdvancedSearchResult';

import useResults from '../hooks/useResults';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const AdvancedSearchScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [advancedSearchAPI, advancedResults] = useResults([]);

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <SearchBar 
          searchTerm={searchTerm} 
          onSearchTermChange={setSearchTerm} 
          onSearchTermSubmit={() => advancedSearchAPI(searchTerm)}
        />
        <Pressable onPress={() => props.navigation.navigate('Detail Modal', { results: advancedResults })}>
          <ShowAdvancedSearchResult results={advancedResults} />
        </Pressable>
      </View>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353340',
    flex: 1
  },
});

export default React.memo(AdvancedSearchScreen);