import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import TypeNameAndClass from '../components/typeDetailComponents/TypeNameAndClass';
import TypeMoves from '../components/typeDetailComponents/TypeMoves';
import { ScrollView } from 'react-native-gesture-handler';
import TypeDamage from '../components/typeDetailComponents/TypeDamage';
import TypePokemon from '../components/typeDetailComponents/TypePokemon';
import MoveNameAndClass from '../components/moveDetailComponents/MoveNameAndClass';
import MoveAttributes from '../components/moveDetailComponents/MoveAttributes';
import MoveType from '../components/moveDetailComponents/MoveType';
import MoveMetaData from '../components/moveDetailComponents/MoveMetaData';
import MovePokemon from '../components/moveDetailComponents/MovePokemon';

const MoveDetailModal = (props) => {
  let results;

  if (props.route.params.results[0] === undefined) {
    results = props.route.params.results
  } else results = props.route.params.results[0]

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.mainInfo}>
          <MoveNameAndClass results={results} />
          <MoveType results={results} />
          <MoveAttributes results={results} />
          <MoveMetaData results={results} />
          <MovePokemon results={results} />
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
    // justifyContent: 'center',
    // alignItems: 'center',
    maxWidth: '100%',
    paddingTop: 20
  },
  detailInfo: {
    flex: 1,
    paddingLeft: 5,
    paddingVertical: 8,
    paddingBottom: 300
  },
});

export default React.memo(MoveDetailModal);