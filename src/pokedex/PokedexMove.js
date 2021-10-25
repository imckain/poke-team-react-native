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
    let typeName
    if (el === 1) {
      return typeName = 'normal'
    }
    if (el === 2) {
      return typeName = 'fighting'
    }
    if (el === 3) {
      return typeName = 'flying'
    }
    if (el === 4) {
      return typeName = 'poison'
    }
    if (el === 5) {
      return typeName = 'ground'
    }
    if (el === 6) {
      return typeName = 'rock'
    }
    if (el === 7) {
      return typeName = 'bug'
    }
    if (el === 8) {
      return typeName = 'ghost'
    }
    if (el === 9) {
      return typeName = 'steel'
    }
    if (el === 10) {
      return typeName = 'fire'
    }
    if (el === 11) {
      return typeName = 'water'
    }
    if (el === 12) {
      return typeName = 'grass'
    }
    if (el === 13) {
      return typeName = 'electric'
    }
    if (el === 14) {
      return typeName = 'psychic'
    }
    if (el === 15) {
      return typeName = 'ice'
    }
    if (el === 16) {
      return typeName = 'dragon'
    }
    if (el === 17) {
      return typeName = 'dark'
    }
    if (el === 18) {
      return typeName = 'fairy'
    }
    else return typeName
  }

  return (
    <View style={styles.container}>
      <View style={[styles.moveInfo]}>
        <Text allowFontScaling={false} numberOfLines={lines} adjustsFontSizeToFit={true} style={[styles.name, {fontSize: fontSize }]}>{results.identifier.replaceAll('-', ' ')}</Text>
        <View style={[styles.typeBox, { backgroundColor: checkType(results.type_id) }]}>
          <Text allowFontScaling={false} style={[styles.typeText, { fontSize: detailFontSize, alignSelf: alignSelf, alignItems: 'center' }]}>{showTypeName(results.type_id)}</Text>
        </View>
        <Text allowFontScaling={false} style={styles.attributes}>Power: {checkForNull(results.power)} | PP: {checkForNull(results.pp)} | Acc: {checkForNull(results.accuracy)}</Text>
      </View>
      <Ionicons style={{ paddingHorizontal: 12 }} name="ios-chevron-forward-sharp" size={18} color="rgb(175, 175, 175)" />  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  moveInfo: {
    flexDirection: 'column', 
    paddingLeft: 12, 
    paddingVertical: 4, 
    alignItems: 'flex-start',
    width: '80%'
  },
  name: {
    color: '#fff',
    fontWeight: '600',
    textShadowColor: 'rgb(34, 34, 34)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
    textTransform: 'capitalize',
  },
  attributes: {
    color: 'rgb(175, 175, 175)',
    fontSize: 18,
    marginBottom: 3
  },
  typeBox: {
    borderRadius: 10,
    backgroundColor: '#464450',
    justifyContent: 'center',
    width: 'auto',
    height: 'auto',
    marginVertical: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  typeText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    textShadowColor: 'rgb(0, 0, 0)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 4,
    textTransform: 'capitalize',
  },
});

export default React.memo(PokedexMove);
