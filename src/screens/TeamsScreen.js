import React, { useContext } from 'react';
import { Text, View, StyleSheet, Pressable, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TeamContext from '../context/TeamContext';
import * as SQLite from 'expo-sqlite';

import BuildTeamsButton from '../components/buildTeamComponents/BuildTeamsButton';
import ViewTeams from '../components/buildTeamComponents/ViewTeams';

const TeamsScreen = (props) => {

  const { data, addTeam } = useContext(TeamContext);

  const showTeams = (el) => {
    if (el !== undefined) {
      return <FlatList 
        horizontal={false}
        data={el}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (<ViewTeams results={item} height={'auto'} width={'100%'} />)
        }}
      />
    } else {
      return (
        null
      )
    }
  }

  return (
    <View style={styles.container}>
      <View contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}} style={styles.teamsScrollView}>
        <View style={styles.teamsView}>
          {showTeams(data)}
        </View>
      </View>
      <Pressable style={styles.buttonStyle} onPress={() => props.navigation.navigate('Build a Team')}>
        <BuildTeamsButton height={80} width={'100%'} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#353340',
    flex: 1,
    justifyContent: 'space-between'
  },
  buttonStyle: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 12,
    paddingTop: 16
  },
  teamsScrollView: {
    width: '100%',
    flex: 1,
    alignSelf: 'center',
  },
  teamsView: {
    flexDirection: 'column',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
});

export default React.memo(TeamsScreen);