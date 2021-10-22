import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AbilityEffect from '../components/abilityDetailComponents/AbilityEffect';

import AbilityName from '../components/abilityDetailComponents/AbilityName';
import AbilityPokemon from '../components/abilityDetailComponents/AbilityPokemon';

const AbilityDetailModal = (props) => {
  let results;

  if (props.route.params.results[0] === undefined) {
    results = props.route.params.results
  } else results = props.route.params.results[0]

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.mainInfo}>
          <AbilityName alignSelf={'center'} fontSize={48} results={results} />
          <AbilityEffect results={results} />
          <AbilityPokemon navigation={props.navigation} results={results} />
        </View>
        <View style={styles.detailInfo}>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    backgroundColor: '#353340',
    paddingHorizontal: 10,
  },
  spriteContainer: {
    flexDirection: 'row'
  },
  mainInfo: {
    maxWidth: '100%',
    paddingTop: 20,
  },
  detailInfo: {
    flex: 1,
    paddingLeft: 5,
    paddingVertical: 8,
    paddingBottom: 300
  },
});

export default AbilityDetailModal;