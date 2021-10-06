import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

import BuildTeamsNavigator from '../components/navigatorCards/BuildTeamsNavigator';

const TeamsScreen = (props) => {

  return (
    <View style={styles.container}>
      <Text>Teams</Text>
      <Pressable onPress={() => props.navigation.navigate('Home')} >
        <Text>Home</Text>
      </Pressable>
      <Pressable style={styles.buttonStyle} onPress={() => props.navigation.navigate('Build a Team')}>
        <BuildTeamsNavigator />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353340',
    flex: 1
  },
  buttonStyle: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    alignSelf: 'center'
  },
});

export default React.memo(TeamsScreen);