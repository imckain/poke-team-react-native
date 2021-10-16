import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Collapsible from 'react-native-collapsible';

import useGetReultsFromUrl from '../../hooks/useGetResultsFromUrl';

import { Entypo } from '@expo/vector-icons';

const MovePokemon = ({ results, navigation }) => {
  const [pokemonCollapsed, setPokemonCollapsed] = useState(true);
  const [getResultsFromUrl, urlResults] = useGetReultsFromUrl();

  const checkForPokemonCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <Pressable onPressIn={() => setPokemonCollapsed(false)}>
          <Text allowFontScaling={false} style={[styles.headerText]}>Learned By:  <Entypo name="triangle-right" size={22} color="rgb(175, 175, 175)" /></Text>
        </Pressable>
      )
    } if (el === false) {
      return(
        <Pressable onPressIn={() => setPokemonCollapsed(true)}>
          <Text allowFontScaling={false} style={[styles.headerText]}>Learned By:  <Entypo name="triangle-down" size={22} color="rgb(175, 175, 175)" /></Text>
        </Pressable>
      )
    }
  }, []);
  
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const createPokemonBox = (el) => {
    const searchApiByUrl = useCallback(async(term) => {
      await getResultsFromUrl(term);
      return urlResults
    }, [])

    const navigate = async(url) => {
      if (urlResults.id !== undefined) {
        return navigation.navigate('Secondary Detail Modal', { results: urlResults })
      } else searchApiByUrl(url)
    }

    const pokemonBox = el.learned_by_pokemon.map(item => {
      return(
        <View key={item.name} style={styles.textBox}>
          <Pressable
            onPressIn={async() => {
              await searchApiByUrl(item.url)
            }}
            onPressOut={() => navigate(item.url)}
          >
            <Text allowFontScaling={false} style={[styles.text]}>{Capitalize(item.name)}</Text>
          </Pressable>
        </View>
      )
    })

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
    fontSize: 22,
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
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3
  },
});

export default MovePokemon;