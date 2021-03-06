import React, { useContext } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native';
import { Context as TeamsContext } from '../context/TeamContext';
import uuid from 'react-native-uuid'

import { Ionicons } from '@expo/vector-icons';

import PokemonSlotCard from '../components/buildTeamComponents/PokemonSlotCard';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const TeamDetailScreen = (props) => {
  const { state } = useContext(TeamsContext);

  const id = props.route.params.id
  const team = state.find((team) => team.id === id)

  const createTeamMember = (el) => {
    if (el[0] !== undefined) {
      return el.map((item) => {
        const id = uuid.v4()
        return (
          <View key={id} style={{ flexDirection: 'row', width: '90%', alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Detail Modal', { results: [item] })}>
              <PokemonSlotCard results={item} />
            </TouchableOpacity>
          </View>
        )
      })
    } else return null
  }

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.back} onPress={() => props.navigation.goBack(null)}>
            <Ionicons name="ios-chevron-back-outline" size={32} color="#fff" /><Text allowFontScaling={false} style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.edit} onPress={() => props.navigation.navigate('Edit Team', { id: id })}>
            <Ionicons name="ios-create-outline" size={32} color="#fff" />
          </TouchableOpacity>
        </View>
        <ScrollView >
          <View style={styles.teamNameContainer}>
            <Text allowFontScaling={false} adjustsFontSizeToFit={true} numberOfLines={1} style={styles.teamName} >{team.name}</Text>
          </View>
          <View style={styles.teamInfoContainer}>
            <View style={styles.teamSlotContainer}>
              {createTeamMember(team.content)}
            </View>
          </View>
        </ScrollView>
      </View>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flexDirection: 'column',
    paddingTop: 60,
    width: '100%',
    flex: 1
  },
  teamSlotContainer: {
    marginBottom: 44,
  },
  teamNameContainer: {
    height: 'auto',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  teamName: {
    height: '100%',
    fontSize: 50,
    textAlign: 'center',
    fontWeight: '500',
    color: '#fff',
    paddingBottom: 12,
  },
  teamInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 60,
  },
  back: { 
    paddingHorizontal: 18, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  edit: { 
    paddingHorizontal: 18, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: '#fff'
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default React.memo(TeamDetailScreen);