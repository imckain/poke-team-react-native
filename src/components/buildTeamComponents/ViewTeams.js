import React from 'react';
import { Text, View, StyleSheet, Image, Pressable, Alert } from 'react-native';

import { Entypo, Feather, Ionicons } from '@expo/vector-icons';

const ViewTeams = (props) => {
  
  const results = props.results

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Delete Team",
      "Are you sure you want to delete this team?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  return (
    <View style={[styles.container, { height: props.height, width: props.width }]}>
      <Text allowFontScaling={false} style={styles.label}>{results.name}</Text>
      <View style={styles.spriteContainer}>
        <Image resizeMode={'contain'} style={styles.sprite} source={require('../../../assets/pokeball.png')} />
        <Image resizeMode={'contain'} style={styles.sprite} source={require('../../../assets/pokeball.png')} />
        <Image resizeMode={'contain'} style={styles.sprite} source={require('../../../assets/pokeball.png')} />
        <Image resizeMode={'contain'} style={styles.sprite} source={require('../../../assets/pokeball.png')} />
        <Image resizeMode={'contain'} style={styles.sprite} source={require('../../../assets/pokeball.png')} />
        <Image resizeMode={'contain'} style={styles.sprite} source={require('../../../assets/pokeball.png')} />
      </View>
      <Pressable style={{position: 'absolute', top: 0, right: 0, padding: 5}} onPress={createTwoButtonAlert}>
        <Ionicons name="ios-remove-circle-outline" size={16} color="#ff0000" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#464450',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '90%',
    height: 'auto',
    alignSelf: 'center',
    margin: 6,
    marginBottom: 22,
    paddingLeft: 6,
  },
  label: {
    fontSize: 26,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginLeft: 12,
    marginBottom: 12,
    marginTop: 12, 
  },
  spriteContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 12,
  },
  sprite: {
    width: 30,
    height: 30,
    marginLeft: 12,
  },
});

export default React.memo(ViewTeams);