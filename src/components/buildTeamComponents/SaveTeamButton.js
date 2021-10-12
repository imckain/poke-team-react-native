import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Entypo } from '@expo/vector-icons';

const SaveTeamButton = (props) => {

  return (
    <View style={[styles.container, { height: props.height, width: props.width }]}>
      <Text allowFontScaling={false} style={styles.label}>Save</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    // paddingTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
  label: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
    textShadowColor: '#53535383',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12
  },
});

export default SaveTeamButton;