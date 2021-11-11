import React, { useCallback, useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import useGetResultsFromUrl from '../hooks/useGetResultsFromUrl';
import useAdvancedResults from '../hooks/useAdvancedResults'
import PokemonNameAndId from '../components/pokemonDetailComponents/PokemonNameAndId';
import FrontSprite from '../components/pokemonDetailComponents/FrontSprite';
import ShinyFrontSprite from '../components/pokemonDetailComponents/ShinyFrontSprite';
import BackSprite from '../components/pokemonDetailComponents/BackSprite';
import ShinyBackSprite from '../components/pokemonDetailComponents/ShinyBackSprite';
import TypeDetail from '../components/pokemonDetailComponents/TypeDetail';
import AbilityDetail from '../components/pokemonDetailComponents/AbilityDetail';
import ModalBaseStats from '../components/pokemonDetailComponents/ModalBaseStats';
import MovesDetail from '../components/pokemonDetailComponents/MovesDetail';

import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import VersionDetail from '../components/pokemonDetailComponents/VersionDetail';

const DetailModal = (props) => {
  const [isShiny, setIsShiny] = useState(false);
  const [getResultsFromUrl, urlResults] = useGetResultsFromUrl();
  const [advancedSearchAPI, advancedResults] = useAdvancedResults([]);
  const [results, setResults] = useState(props.route.params.results[0])
  
  const changeSprites = useCallback((el) => {
    if (el === true) {
      return (
        <View style={{width: '100%'}}>
          <TouchableOpacity style={{zIndex: 1}} onPress={() => setIsShiny(false)}>
            <View style={ styles.changeButton} >
              <MaterialIcons name="360" size={24} color="rgb(223, 223, 223)" />
              <Text allowFontScaling={false} style={styles.changeLabel}>Shiny</Text>
            </View>
          </TouchableOpacity>
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
          <TouchableOpacity style={{zIndex: 1}} onPress={() => setIsShiny(true)}>
            <View style={ styles.changeButton} >
              <MaterialIcons name="360" size={24} color="rgb(223, 223, 223)" />
              <Text allowFontScaling={false} style={styles.changeLabel}>Normal</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.spriteContainer}>
            <FrontSprite width={160} height={160} results={results} />
            <BackSprite width={160} height={160} results={results} />
          </View>
        </View>
      )
    }
  }, [results])

  const showLocationData = async(el) => {
    try {
      const navigate = async(url) => {
        if (urlResults[0].location_area.url !== url) {
          await getResultsFromUrl(url)
          return props.navigation.navigate('Location Detail Modal', { results: urlResults })
        } else await getResultsFromUrl(url)
      }

      if (urlResults[0] === undefined) return null
      return navigate(el.location_area_encounters)
    } catch (error) {
      console.log(error);
    }
  };
  
  const isLocationAvailable = () => {
    if (urlResults[0] === undefined) return <View style={[styles.headerWrapper, { width: '90%' }]}><Text adjustsFontSizeToFit={true} numberOfLines={1} style={[styles.locationNavigation, {fontStyle: 'italic', color: 'rgba(105, 105, 105, 0.6)'}]}>Encounter Details Not Available</Text></View>
    else return (
      <View style={[styles.headerWrapper, {flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center'}]}>
        <Text allowFontScaling={false} adjustsFontSizeToFit={true} numberOfLines={1} style={styles.locationNavigation}>Encounter Details</Text>  
        <Entypo name="triangle-right" size={32} color="rgba(105, 105, 105, 0.6)" />
      </View>
    )
  }

  useEffect(() => {
    getResultsFromUrl(results.location_area_encounters)
  }, [])

  const getGeneration = (el) => {
    return (
      el.id <= 151 ? 
        'Gen I' 
      : el.id <= 251 ? 
        'Gen II' 
      : el.id <= 386 ? 
        'Gen III' 
      : el.id <= 493 ? 
        'Gen IV' 
      : el.id <= 649 ? 
        'Gen V' 
      : el.id <= 721 ? 
        'Gen VI' 
      : el.id <= 809 ? 
        'Gen VII' 
      : el.id <= 901 ? 
        'Gen VIII' 
      : null
    )
  }

  const showPrevious = () => {
    if (results.id > 1 && results.id < 899) {
      return(
        <TouchableOpacity 
          onPressIn={async() => {
            await advancedSearchAPI((results.id - 1))
            if (advancedResults[0].id !== null) {
              setResults(advancedResults[0])
            }
          }}
          onPressOut={async() => {
            await advancedSearchAPI((results.id - 1))
            if (advancedResults[0].id !== null) {
              setResults(advancedResults[0])
            }
          }}
        >
          <Ionicons name="chevron-back" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      )
    }
    if (results.id > 10001) {
      return(
        <TouchableOpacity 
          onPressIn={async() => {
            await advancedSearchAPI((results.id - 1))
            if (advancedResults[0].id !== null) {
              setResults(advancedResults[0])
            }
          }}
          onPressOut={async() => {
            await advancedSearchAPI((results.id - 1))
            if (advancedResults[0].id !== null) {
              setResults(advancedResults[0])
            }
          }}
        >
          <Ionicons name="chevron-back" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      )
    } else return <View style={{width: 37}} />
  }

  const showNext = () => {
    if (results.id < 898) {
      return (
        <TouchableOpacity 
          onPressIn={async() => {
            await advancedSearchAPI((results.id + 1))
            if (advancedResults[0].id !== null) {
              setResults(advancedResults[0])
            }
          }}
          onPressOut={async() => {
            await advancedSearchAPI((results.id + 1))
            if (advancedResults[0].id !== null) {
              setResults(advancedResults[0])
            }
          }}
        >
          <Ionicons name="chevron-forward" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      )
    }
    if (results.id > 898 && results.id < 10200) {
      return (
        <TouchableOpacity 
          onPressIn={async() => {
            await advancedSearchAPI((results.id + 1))
            if (advancedResults[0].id !== null) {
              setResults(advancedResults[0])
            }
          }}
          onPressOut={async() => {
            await advancedSearchAPI((results.id + 1))
            if (advancedResults[0].id !== null) {
              setResults(advancedResults[0])
            }
          }}
        >
          <Ionicons name="chevron-forward" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      )
    } else return <View style={{width: 37}} />
  }

  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.closeMessage}>Pull down to close</Text>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.mainInfo}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 22}}>
            {showPrevious()}
            <PokemonNameAndId lines={1} fontSize={48} results={results} />
            {showNext()}
          </View>
          <View style={{height: 20}} />
          {changeSprites(isShiny)}
        </View>
        <View style={styles.detailInfo}>
          <Text style={styles.gen}>{getGeneration(results)}</Text>
          <TypeDetail navigation={props.navigation} margin={13} detailFontSize={24} results={results} />
          <AbilityDetail navigation={props.navigation} margin={13} headerFontSize={28} detailFontSize={24} results={results} />
          <ModalBaseStats headerFontSize={28} detailFontSize={22} margin={13} results={results} />
          <MovesDetail navigation={props.navigation} margin={13} results={results} />
          <VersionDetail results={results} margin={13} />
          <TouchableOpacity 
            onPressIn={async() => {
              await getResultsFromUrl(results.location_area_encounters)
              return urlResults
            }}
            onPressOut={async() => {
              return showLocationData(results)
            }}
            style={styles.encounterContainer}
          >
            {isLocationAvailable()}
          </TouchableOpacity>
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
    backgroundColor: '#000000',
    paddingHorizontal: 10,
  },
  closeMessage: {
    alignSelf: 'center',
    color: 'rgba(255, 255, 255, 0.5)',
    paddingVertical: 7,
    fontStyle: 'italic'
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
    paddingTop: 12
  },
  gen: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 28,
    fontWeight: '600',
    paddingBottom: 12,
  },
  headerWrapper: {
    width: '100%',
    paddingHorizontal: 12,
    height: 'auto',
  },
  encounterContainer: {
    flexDirection: 'column',
    alignItems: 'baseline',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#000000',
    paddingVertical: 5,
    height: 'auto',
    marginBottom: 13
  },
  detailInfo: {
    flex: 1,
    paddingLeft: 5,
    paddingTop: 25,
    paddingBottom: 300,
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
    color: 'rgba(105, 105, 105, 0.6)',
    fontSize: 12,
  },
  locationNavigation: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 28
  },
});

export default DetailModal;