import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Entypo } from '@expo/vector-icons';

const AddPokemonButton = (props) => {

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={[styles.container, { height: props.height, width: props.width }]}>
      <Text allowFontScaling={false} style={styles.label}>Add {Capitalize(props.name)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#346d29',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginBottom: 10,
    marginTop: 8,
  },
  label: {
    // marginBottom: 6,
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
});

export default AddPokemonButton;