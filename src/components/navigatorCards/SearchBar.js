import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
    
  return (
    <View style={styles.searchWrapperStyle}>
      <Ionicons name="ios-search" size={18} color="rgb(175, 175, 175)" />
      <TextInput 
        showSoftInputOnFocus={false}
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle} 
        placeholder='Search by ID# or Name' 
        placeholderTextColor='rgb(175, 175, 175)'
        value={searchTerm}
        onChangeText={onSearchTermChange}
        onEndEditing={onSearchTermSubmit}
        clearButtonMode='always'
        keyboardAppearance='dark'
      />
    </View>
  )
};

const styles = StyleSheet.create({
  searchWrapperStyle: {
    height: 44,
    width: '90%',
    marginVertical: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
    backgroundColor: '#464450',
    borderRadius: 10,
  },
  inputStyle: {
    paddingLeft: 4,
    height: '100%',
    flex: 1,
    fontSize: 20,
    fontWeight: '500'
  }
});

export default React.memo(SearchBar);