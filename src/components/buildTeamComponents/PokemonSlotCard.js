import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FrontSprite from '../pokemonDetailComponents/FrontSprite';
import TypeShow from './TypeShow';

const PokemonSlotCard = (props) => {
  const results = props.results

  const isValid = (el) => {
    if (el.name !== undefined) {
      return (
        <View style={styles.infoContainer}>
          <FrontSprite width={70} height={70} results={el} />
          <Text adjustsFontSizeToFit={true} numberOfLines={1} allowFontScaling={false} style={[styles.name]}>{el.name}</Text>
          <TypeShow flexDirection={'column'} results={results} />
        </View>
      )
    } else return <Text allowFontScaling={false} style={[styles.emptyName]}>Empty Slot</Text>
  }
  
  return (
    <View style={styles.container}>
      {isValid(results)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    width: '100%',
    borderRadius: 10,
    marginVertical: 6,
  },
  infoContainer: { 
    width: '100%', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    padding: 12 
  },
  name: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '600',
    textTransform: 'capitalize',
    paddingHorizontal: 12,
    width: '50%'
  },
  emptyName: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontStyle: 'italic',
  },
});

export default React.memo(PokemonSlotCard);