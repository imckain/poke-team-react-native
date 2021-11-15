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
          <FrontSprite width={60} height={60} results={el} />
          {/* <Text adjustsFontSizeToFit={true} numberOfLines={1} allowFontScaling={false} style={[styles.name]}>{el.name}</Text> */}
          {/* <TypeShow flexDirection={'column'} results={results} /> */}
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
    backgroundColor: '#000000',
    borderRadius: 10,
    width: 'auto',
    justifyContent: 'center'
    
  },
  infoContainer: { 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'space-between',
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