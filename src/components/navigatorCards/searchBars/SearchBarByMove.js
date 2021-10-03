import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBarByMove = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
    
  return (
    <View style={styles.searchWrapperStyle}>
      <Ionicons name="ios-search" size={18} color="rgb(175, 175, 175)" />
      <TextInput 
        showSoftInputOnFocus={false}
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle} 
        placeholder='Search by Move' 
        placeholderTextColor='rgb(175, 175, 175)'
        value={searchTerm}
        onChangeText={onSearchTermChange}
        onEndEditing={onSearchTermSubmit}
        clearButtonMode='always'
        keyboardAppearance='dark'
        returnKeyType={'search'}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  searchWrapperStyle: {
    height: 44,
    flex: 1,
    marginTop: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 5,
    backgroundColor: '#464450',
    borderRadius: 10,
    marginHorizontal: 20
  },
  inputStyle: {
    paddingLeft: 12,
    height: '100%',
    flex: 1,
    fontSize: 20,
    fontWeight: '500',
    color: '#fff'
  }
});

export default React.memo(SearchBarByMove);