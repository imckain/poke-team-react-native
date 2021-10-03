import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PokedexNameAndId from './PokedexNameAndId';

const ShowSearchResult = (props) => {

  const results = props.results

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.mainInfo}>
          <PokedexNameAndId fontSize={32} results={results} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#fff', 
    width: '90%',
    height: 'auto',
    alignSelf: 'center',
    marginBottom: 12,
    backgroundColor: '#464450',
  },
  mainInfo: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default React.memo(ShowSearchResult);