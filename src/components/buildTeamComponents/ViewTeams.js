import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { Entypo } from '@expo/vector-icons';

const ViewTeams = (props) => {
  
  const results = props.results

  return (
    <View style={[styles.container, { height: props.height, width: props.width }]}>
      <Text style={styles.label}>{results.name}</Text>
      <View style={styles.spriteContainer}>
        <Image resizeMode={'contain'} style={styles.sprite} source={require('../../../assets/pokeball.png')} />
        <Image resizeMode={'contain'} style={styles.sprite} source={require('../../../assets/pokeball.png')} />
        <Image resizeMode={'contain'} style={styles.sprite} source={require('../../../assets/pokeball.png')} />
        <Image resizeMode={'contain'} style={styles.sprite} source={require('../../../assets/pokeball.png')} />
        <Image resizeMode={'contain'} style={styles.sprite} source={require('../../../assets/pokeball.png')} />
        <Image resizeMode={'contain'} style={styles.sprite} source={require('../../../assets/pokeball.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#464450',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '90%',
    height: 'auto',
    alignSelf: 'center',
    margin: 6,
    marginBottom: 22,
    paddingLeft: 6,
  },
  label: {
    fontSize: 34,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginLeft: 12,
    marginBottom: 12,
    marginTop: 12, 
  },
  spriteContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 12,
  },
  sprite: {
    width: 40,
    height: 40,
    marginLeft: 12,
  },
});

export default React.memo(ViewTeams);