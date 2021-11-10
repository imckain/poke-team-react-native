import React, { useContext } from 'react';
import { Animated, Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
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
      { cancelable: true }
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
      <TouchableOpacity style={[styles.rightAction, { height: props.height }]} onPress={createTwoButtonAlert}>
        <Animated.Text
          style={[
            styles.delete,
            {
              transform: [{ translateX: trans }],
            },
          ]}>
          <Ionicons name="ios-trash-sharp" size={32} color="#fff" />
        </Animated.Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Swipeable renderRightActions={renderRightActions}>
          <View style={[styles.container, { height: props.height, width: props.width }]}>
              <View style={styles.labelContainer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Team Detail', { id: results.id, results: results.content, name: results.name })}>
                  <Text allowFontScaling={false} adjustsFontSizeToFit={true} numberOfLines={1} style={styles.label}>{results.name}</Text>
                </TouchableOpacity>
              </View>
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
    overflow: 'hidden',
    borderRadius: 10,
    marginVertical: 12,
  },
  container: {
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '90%',
    height: 'auto',
    alignSelf: 'center',
  },
  label: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    paddingBottom: 6,
    paddingRight: 36,
  },
  labelContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: 'rgb(175, 175, 175)',
    borderBottomWidth: 2,
    marginLeft: 12,
    marginVertical: 12,
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
    width: 80,
    alignItems: 'center'
  }
});

export default React.memo(ViewTeams);