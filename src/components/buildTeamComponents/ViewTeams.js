import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, Pressable, Alert } from 'react-native';
import { Context as TeamsContext} from '../../context/TeamContext';
import uuid from 'react-native-uuid'

import { Ionicons } from '@expo/vector-icons';
import FrontSprite from '../pokemonDetailComponents/FrontSprite';

const ViewTeams = (props) => {
  const { state, deleteTeam } = useContext(TeamsContext)
  
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

  return (
    <View style={[styles.container, { height: props.height, width: props.width }]}>
      <Text allowFontScaling={false} style={styles.label}>{results.name}</Text>
      <View style={styles.spriteContainer}>
        {showSprite(results.content)}
      </View>
      <Pressable style={styles.delete} onPress={createTwoButtonAlert}>
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
    justifyContent: 'space-evenly'
  },
  delete: {
    position: 'absolute', 
    top: 0, 
    right: 0, 
    padding: 5
  }
});

export default React.memo(ViewTeams);