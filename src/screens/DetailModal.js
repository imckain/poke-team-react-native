import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable } from 'react-native';

import PokemonNameAndId from '../components/pokemonDetailComponents/PokemonNameAndId';
import FrontSprite from '../components/pokemonDetailComponents/FrontSprite';
import ShinyFrontSprite from '../components/pokemonDetailComponents/ShinyFrontSprite';
import BackSprite from '../components/pokemonDetailComponents/BackSprite';
import ShinyBackSprite from '../components/pokemonDetailComponents/ShinyBackSprite';
import TypeDetail from '../components/pokemonDetailComponents/TypeDetail';
import AbilityDetail from '../components/pokemonDetailComponents/AbilityDetail';
import ModalBaseStats from '../components/pokemonDetailComponents/ModalBaseStats';
import MovesDetail from '../components/pokemonDetailComponents/MovesDetail';
import { ScrollView } from 'react-native-gesture-handler';

import { MaterialIcons } from '@expo/vector-icons';

const DetailModal = (props) => {
  const [isShiny, setIsShiny] = useState(false);

  let results;

  if (props.route.params.results[0] === undefined) {
    results = props.route.params.results
  } else results = props.route.params.results[0]

  const changeSprites = useCallback((el) => {
    if (el === true) {
      return (
        <View style={{width: '100%'}}>
          <Pressable style={{zIndex: 1}} onPress={() => setIsShiny(false)}>
            <View style={ styles.changeButton} >
              <MaterialIcons name="360" size={24} color="rgb(223, 223, 223)" />
              <Text allowFontScaling={false} style={styles.changeLabel}>Shiny</Text>
            </View>
          </Pressable>
          <View style={styles.spriteContainer}>
            <ShinyFrontSprite width={160} height={160} results={results} />
            <ShinyBackSprite width={160} height={160} results={results} />
          </View>
        </View>
      )
    }
    if (el === false) {
      return (
        <View style={{width: '100%'}}>
          <Pressable style={{zIndex: 1}} onPress={() => setIsShiny(true)}>
            <View style={ styles.changeButton} >
              <MaterialIcons name="360" size={24} color="rgb(223, 223, 223)" />
              <Text allowFontScaling={false} style={styles.changeLabel}>Normal</Text>
            </View>
          </Pressable>
          <View style={styles.spriteContainer}>
            <FrontSprite width={160} height={160} results={results} />
            <BackSprite width={160} height={160} results={results} />
          </View>
        </View>
      )
    }
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.mainInfo}>
          <PokemonNameAndId fontSize={34} results={results} />
          <View style={{height: 20}} />
          {changeSprites(isShiny)}
        </View>
        <View style={styles.detailInfo}>
          <TypeDetail margin={13} headerFontSize={22} detailFontSize={18} results={results} />
          <AbilityDetail margin={13} headerFontSize={22} detailFontSize={18} results={results} />
          <ModalBaseStats headerFontSize={22} detailFontSize={16} results={results} />
          <MovesDetail results={results} />
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
  scrollViewContainer: {
    width: '100%'
  },
  spriteContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly'
  },
  mainInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 20
  },
  detailInfo: {
    flex: 1,
    paddingLeft: 5,
    paddingTop: 25,
    paddingBottom: 300
  },
  changeButton: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  changeLabel: {
    paddingVertical: 2,
    paddingLeft: 6,
    color: 'rgb(175, 175, 175)',
    fontSize: 12,
  },
});

export default React.memo(DetailModal);