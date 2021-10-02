import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const TeamsScreen = (props) => {

  return (
    <View style={styles.container}>
      <Text>Teams</Text>
      <Pressable onPress={() => props.navigation.navigate('Home')} >
        <Text>Home</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353340',
    flex: 1
  },
});

export default React.memo(TeamsScreen);