import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BuildTeamsButton from '../components/buildTeamComponents/BuildTeamsButton';
import ViewTeams from '../components/buildTeamComponents/ViewTeams';

const TeamsScreen = (props) => {

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}} style={styles.teamsScrollView}>
        <View style={styles.teamsView}>
          <ViewTeams height={'auto'} width={'100%'} />
          <ViewTeams height={'auto'} width={'100%'} />
          <ViewTeams height={'auto'} width={'100%'} />
          <ViewTeams height={'auto'} width={'100%'} />
          <ViewTeams height={'auto'} width={'100%'} />
        </View>
      </ScrollView>
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
    alignSelf: 'center',
  },
  teamsView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
});

export default React.memo(TeamsScreen);