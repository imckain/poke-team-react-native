import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, Pressable } from 'react-native';

const TeamsScreen = (props) => {

  return (
    <View>
      <Text>Teams</Text>
      <Pressable onPress={() => props.navigation.navigate('Home')} >
        <Text>Home</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default React.memo(TeamsScreen);