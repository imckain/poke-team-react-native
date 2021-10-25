import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const AddPokemonButton = (props) => {

  return (
    <View style={[styles.container, { height: props.height, width: props.width }]}>
      <Text allowFontScaling={false} style={styles.label}>Add {props.name}</Text>
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
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    textTransform: 'capitalize'
  },
});

export default AddPokemonButton;