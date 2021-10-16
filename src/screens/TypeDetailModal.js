import React from 'react';
import { View, StyleSheet } from 'react-native';

import TypeNameAndClass from '../components/typeDetailComponents/TypeNameAndClass';
import TypeMoves from '../components/typeDetailComponents/TypeMoves';
import { ScrollView } from 'react-native-gesture-handler';
import TypeDamage from '../components/typeDetailComponents/TypeDamage';
import TypePokemon from '../components/typeDetailComponents/TypePokemon';

const TypeDetailModal = (props) => {
  let results;

  if (props.route.params.results[0] === undefined) {
    results = props.route.params.results
  } else results = props.route.params.results[0]

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.mainInfo}>
          <TypeNameAndClass results={results} />
          <TypeDamage results={results} />
          <TypeMoves navigation={props.navigation} results={results} />
          <TypePokemon navigation={props.navigation} results={results} />
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
    paddingTop: 20
  },
  detailInfo: {
    flex: 1,
    paddingLeft: 5,
    paddingVertical: 8,
    paddingBottom: 300
  },
});

export default React.memo(TypeDetailModal);