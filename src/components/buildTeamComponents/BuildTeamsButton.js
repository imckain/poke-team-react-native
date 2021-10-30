import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Entypo } from '@expo/vector-icons';

const BuildTeamsButton = (props) => {

  return (
    <View style={{}}>
      <View style={[styles.container, { height: props.height, width: props.width }]}>
        <Text allowFontScaling={false} style={styles.label}>Build a Team  </Text>
        <Entypo style={styles.icon} name="squared-plus" size={32} color="#fff" />
      </View>
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
    marginBottom: 20,
  },
  label: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
    textShadowColor: '#53535383',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12
  },
  icon: {
    textShadowColor: '#53535383', 
    textShadowOffset: { width: 0, height: 0 }, 
    textShadowRadius: 6
  }
});

export default BuildTeamsButton;