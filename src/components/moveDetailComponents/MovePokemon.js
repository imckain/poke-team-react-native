import React, { useCallback, useState } from 'react';
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
        <View style={styles.headerWrapper}>
          <Pressable style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} onPressIn={() => setPokemonCollapsed(false)}>
            <Text allowFontScaling={false} style={[styles.headerText]}>Learned By:</Text>  
            <Entypo name="plus" size={32} color="rgb(175, 175, 175)" />
          </Pressable>
        </View>
      )
    } if (el === false) {
      return(
        <View style={styles.headerWrapper}>
          <Pressable style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} onPressIn={() => setPokemonCollapsed(true)}>
            <Text allowFontScaling={false} style={[styles.headerText]}>Learned By:</Text>  
            <Entypo name="minus" size={32} color="rgb(175, 175, 175)" />
          </Pressable>
        </View>
      )
    }
  }, []);

  const createPokemonBox = (el) => {

    const navigate = async(url, param) => {
      if (urlResults.name === param) {
        await getResultsFromUrl(url)
        return navigation.navigate('Secondary Detail Modal', { results: urlResults })
      } else await getResultsFromUrl(url)
    }

    if (el.learned_by_pokemon[0] !== null) {
      const pokemonBox = el.learned_by_pokemon.map(item => {
        return(
          <View key={item.name} style={styles.textBox}>
            <Pressable
              onPressIn={async() => {
                await getResultsFromUrl(item.url)
              }}
              onPressOut={() => navigate(item.url, item.name)}
            >
              <Text allowFontScaling={false} style={[styles.text]}>{item.name.replaceAll('-', ' ')}</Text>
            </Pressable>
          </View>
        )
      }) 
      return pokemonBox
    } else return null

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
    alignItems: 'baseline',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#464450a6',
    paddingVertical: 5,
  },
  headerText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 28,
  },
  headerWrapper: {
    width: '100%',
    paddingHorizontal: 12
  },
  scrollViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 12
  },
  textBox: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#353340',
    marginBottom: 12,
    marginRight: 12,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    color: 'rgb(223, 223, 223)',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3,
    textTransform: 'capitalize',
  },
});

export default MovePokemon;