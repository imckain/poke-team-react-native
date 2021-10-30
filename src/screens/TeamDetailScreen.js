import React, { useState, useContext, useCallback } from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableWithoutFeedback, Pressable, Keyboard } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Context as TeamsContext } from '../context/TeamContext';
import uuid from 'react-native-uuid'

import * as SQLite from 'expo-sqlite';

import BuildTeamSearchBar from '../components/buildTeamComponents/BuildTeamSearchBar';
import useBuildResults from '../hooks/useBuildResults';
import ShowAdvancedSearchResult from '../components/resultsCards/ShowAdvancedSearchResult';
import AddPokemonButton from '../components/buildTeamComponents/AddPokemon';
import PokemonSlotCard from '../components/buildTeamComponents/PokemonSlotCard';
import SaveTeamButton from '../components/buildTeamComponents/SaveTeamButton';

import { Ionicons } from '@expo/vector-icons';
import EditTeamButton from '../components/buildTeamComponents/EditTeamButton';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const TeamDetailScreen = (props) => {
  const { state, addTeam } = useContext(TeamsContext);

  const id = props.route.params.id
  const team = state._W.find((team) => team.id === id)

  const createTeamMember = (el) => {
    if (el[0] !== undefined) {
      return el.map((item) => {
        const id = uuid.v4()
        return (
          <View key={id} style={{ flexDirection: 'row', width: '90%', alignSelf: 'center' }}>
            <Pressable onPress={() => props.navigation.navigate('Detail Modal', { results: [item] })}>
              <PokemonSlotCard results={item} />
            </Pressable>
          </View>
        )
      })
    } else return null
  }

  return (
    <HideKeyboard>
      <ScrollView style={styles.container}>
        <View style={styles.teamNameContainer}>
          <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.teamName} >{team.name}</Text>
        </View>
        <View style={styles.teamInfoContainer}>
          <View style={styles.teamSlotContainer}>
            {createTeamMember(team.content)}
          </View>
          <Pressable onPress={() => props.navigation.navigate('Edit Team', { id: id })} >
            <EditTeamButton height={54} width={'90%'} />
          </Pressable>
        </View>
      </ScrollView>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353340',
    flexDirection: 'column',
    paddingTop: 20,
    width: '100%',
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
    fontSize: 48,
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
});

export default React.memo(TeamDetailScreen);