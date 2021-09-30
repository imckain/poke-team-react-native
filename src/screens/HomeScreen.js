import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, Pressable } from 'react-native';

const HomeScreen = (props) => {

  return (
    <View style={styles.container}>
      <Text> hello </Text>
      <Pressable style={styles.buttonStyle} onPress={() => props.navigation.navigate('Teams')} >
        <Text>Teams</Text>
      </Pressable>
      <Pressable style={styles.buttonStyle} onPress={() => props.navigation.navigate('Profile')} >
        <Text>Profile</Text>
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
    marginVertical: 15,
    textAlign: 'center',
    alignSelf: 'center'
  }
});

export default React.memo(HomeScreen);