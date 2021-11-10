import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import checkType from '../components/functions/checkType';

const PokedexMove = ({ results, fontSize, detailFontSize, lines, alignSelf }) => {
  const checkForNull = (el) => {
    if (el === null) return 'N/A'
    else return el
  }

  const showTypeName = (el) => {
    return el === 1 ?
      'normal'
      : el === 2 ?
      'fighting'
      : el === 3 ?
      'flying'
      : el === 4 ?
      'poison'
      : el === 5 ?
      'ground'
      : el === 6 ?
      'rock'
      : el === 7 ?
      'bug'
      : el === 8 ?
      'ghost'
      : el === 9 ?
      'steel'
      : el === 10 ?
      'fire'
      : el === 11 ?
      'water'
      : el === 12 ?
      'grass'
      : el === 13 ?
      'electric'
      : el === 14 ?
      'psychic'
      : el === 15 ?
      'ice'
      : el === 16 ?
      'dragon'
      : el === 17 ?
      'dark'
      : el === 18 ?
      'fairy'
      : null
  }

  return (
    <View style={styles.infoContainer}>
      <View style={[styles.moveInfo]}>
        <View style={styles.subInfo}>
          <Text allowFontScaling={false} numberOfLines={lines} adjustsFontSizeToFit={true} style={[styles.name, {fontSize: fontSize }]}>{results.identifier.replaceAll('-', ' ')}</Text>
          <View style={[styles.typeBox, { backgroundColor: checkType(results.type_id) }]}>
            <Text allowFontScaling={false} numberOfLines={lines} adjustsFontSizeToFit={true} style={[styles.typeText, { fontSize: detailFontSize }]}>{showTypeName(results.type_id)}</Text>
          </View>
        </View>
        <Text allowFontScaling={false} style={styles.attributes}>Power: {checkForNull(results.power)} | PP: {checkForNull(results.pp)} | Acc: {checkForNull(results.accuracy)}</Text>
      </View>
      <Ionicons style={{  }} name="ios-chevron-forward-sharp" size={18} color="rgb(175, 175, 175)" />  
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottomColor: 'rgb(175, 175, 175)',
    borderBottomWidth: 1,
  },
  moveInfo: {
    flexDirection: 'column', 
    paddingVertical: 4, 
    alignItems: 'flex-start',
    width: '80%',
    justifyContent: 'flex-start'
  },
  subInfo: { 
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },
  name: {
    color: '#fff',
    fontWeight: '600',
    textShadowColor: 'rgb(34, 34, 34)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 6,
    textTransform: 'capitalize',
  },
  attributes: {
    color: 'rgb(175, 175, 175)',
    fontSize: 18,
    marginBottom: 3,
    paddingLeft: 12
  },
  typeBox: {
    borderRadius: 10,
    backgroundColor: '#000000',
    justifyContent: 'center',
    width: 110,
    height: 'auto',
    marginVertical: 6,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginLeft: 12,

  },
  typeText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    textShadowColor: 'rgb(0, 0, 0)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 4,
    textTransform: 'capitalize',
    alignItems: 'center',
    alignSelf: 'center'
  },
});

export default React.memo(PokedexMove);
