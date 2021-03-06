import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import MoveNameAndClass from '../components/moveDetailComponents/MoveNameAndClass';
import MoveAttributes from '../components/moveDetailComponents/MoveAttributes';
import MoveType from '../components/moveDetailComponents/MoveType';
import MoveMetaData from '../components/moveDetailComponents/MoveMetaData';
import MovePokemon from '../components/moveDetailComponents/MovePokemon';
import MoveEffect from '../components/moveDetailComponents/MoveEffect';

const MoveDetailModal = (props) => {
  let results;

  if (props.route.params.results[0] === undefined) {
    results = props.route.params.results
  } else results = props.route.params.results[0]

  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.closeMessage}>Pull down to close</Text>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.mainInfo}>
          <MoveNameAndClass attributeFontSize={26} param={'modal'} alignSelf={'center'} textAlign={'center'} fontSize={48} results={results} />
          <MoveAttributes alignSelf={'center'} fontSize={38} fontSize={18} results={results} />
          <MoveType navigation={props.navigation} margin={7} flexDirection={'column'} headerFontSize={22} detailFontSize={24} results={results} />
          <MoveEffect results={results} />
          <MoveMetaData results={results} />
          <MovePokemon navigation={props.navigation} results={results} />
        </View>
        <View style={styles.detailInfo}>
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
  spriteContainer: {
    flexDirection: 'row'
  },
  mainInfo: {
    maxWidth: '100%',
    paddingTop: 12
  },
  detailInfo: {
    flex: 1,
    paddingLeft: 5,
    paddingVertical: 8,
    paddingBottom: 300
  },
});

export default MoveDetailModal;