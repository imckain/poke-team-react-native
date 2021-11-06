import React, { useContext } from 'react';
import { Animated, Text, View, StyleSheet, Image, Pressable, Alert } from 'react-native';
import { Context as TeamsContext} from '../../context/TeamContext';
import uuid from 'react-native-uuid';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Ionicons } from '@expo/vector-icons';
import FrontSprite from '../pokemonDetailComponents/FrontSprite';

const ViewTeams = (props) => {
  const { deleteTeam } = useContext(TeamsContext)
  
  const results = props.results

  const createTwoButtonAlert = () => {
    Alert.alert(
      "Delete Team",
      "Are you sure you want to delete this team?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { 
          text: "OK", 
          onPress: () => deleteTeam(props.id)
        }
      ],
      { cancelable: false }
    );
  }

  const showSprite = (el) => {
    return el.map(item => {
      const id = uuid.v4();
      return <FrontSprite key={id} width={50} height={50} results={item} />
    })
  }

  renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [0, 0, 0, 0],
    });
    return (
      <Pressable style={[styles.rightAction, { height: props.height }]} onPress={createTwoButtonAlert}>
        <Animated.Text
          style={[
            styles.delete,
            {
              transform: [{ translateX: trans }],
            },
          ]}>
          <Ionicons name="ios-trash-sharp" size={32} color="#fff" />
        </Animated.Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Swipeable renderRightActions={renderRightActions}>
        <View style={[styles.container, { height: props.height, width: props.width }]}>
          <Text allowFontScaling={false} style={styles.label}>{results.name}</Text>
          <View style={styles.spriteContainer}>
            {showSprite(results.content)}
          </View>
        </View>
      </Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { 
    borderRadius: 10, 
    overflow: 'hidden',
    marginBottom: 24
  },
  container: {
    backgroundColor: '#464450',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '90%',
    height: 'auto',
    alignSelf: 'center',
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
    justifyContent: 'space-evenly'
  },
  delete: {
  },
  rightAction: {
    justifyContent: 'center',
    backgroundColor: '#ff0000',
    width: 50,
    alignItems: 'center'
  }
});

export default React.memo(ViewTeams);