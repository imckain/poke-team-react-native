import React, { useCallback, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Context as TeamsContext} from '../context/TeamContext';

import BuildTeamsButton from '../components/buildTeamComponents/BuildTeamsButton';
import ViewTeams from '../components/buildTeamComponents/ViewTeams';

const TeamsScreen = (props) => {
  const { state } = useContext(TeamsContext);

  const showTeams = useCallback((el) => {
    return <FlatList 
      horizontal={false}
      data={el}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        if (item.id !== 0) {
          return (
            <TouchableOpacity onPress={() => props.navigation.navigate('Team Detail', { id: item.id, results: item.content, name: item.name })}>
              <ViewTeams results={item} id={item.id} height={'auto'} width={'100%'} />
            </TouchableOpacity>
          )
        } else return null
      }}
    />
  }, [state])

  return (
    <View style={styles.container}>
      <View contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}} style={styles.teamsScrollView}>
        <View style={styles.teamsView}>
          {showTeams(state)}
        </View>
      </View>
      {/* <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigation.navigate('Build Team')}>
        <BuildTeamsButton height={60} width={'100%'} />
      </TouchableOpacity> */}
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
    width: '90%',
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
    flex: 1
  },
});

export default React.memo(TeamsScreen);