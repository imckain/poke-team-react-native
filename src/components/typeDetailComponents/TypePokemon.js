import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Collapsible from 'react-native-collapsible';

import { Entypo } from '@expo/vector-icons';

const TypePokemon = ({ results }) => {
  const [pokemonCollapsed, setPokemonCollapsed] = useState(true);

  const checkForPokemonCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <Pressable onPressIn={() => setPokemonCollapsed(false)}>
          <Text style={[styles.headerText]}>Pokemon  <Entypo name="triangle-right" size={28} color="rgb(175, 175, 175)" /></Text>
        </Pressable>
      )
    } if (el === false) {
      return(
        <Pressable onPressIn={() => setPokemonCollapsed(true)}>
          <Text style={[styles.headerText]}>Pokemon  <Entypo name="triangle-down" size={28} color="rgb(175, 175, 175)" /></Text>
        </Pressable>
      )
    }
  }, []);
  
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const createPokemonBox = (el) => {
    const pokemonBox = el.pokemon.map(item => {
      return (
        <View key={item.pokemon.name} style={styles.textBox}>
          <Text style={[styles.text]}>{Capitalize(item.pokemon.name)}</Text>
        </View>
      )})
    return pokemonBox
  }

  return (
    <View style={[styles.container]}>
      {checkForPokemonCollapse(pokemonCollapsed)}
      <Collapsible collapsed={pokemonCollapsed}>
        <View horizontal style={styles.scrollViewStyle}>
          {createPokemonBox(results)}
        </View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '100%',
    marginHorizontal: 12,
    marginBottom: 10
  },
  headerText: {
    color: '#fff',
    marginTop: 7,
    fontWeight: '600',
    fontSize: 28,
  },
  scrollViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: 20,
  },
  textBox: {
    paddingVertical: 5,
    marginLeft: 6,
    borderRadius: 10,
    backgroundColor: '#464450',
    margin: 7,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '29%'
  },
  text: {
    color: 'rgb(223, 223, 223)',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3
  },
});

export default TypePokemon;