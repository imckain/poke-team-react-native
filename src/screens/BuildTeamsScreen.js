import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const BuildTeamsScreen = () => {

  return (
    <View style={styles.container}>
      <Text>Build a team</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353340',
    flex: 1
  },
});

export default BuildTeamsScreen;