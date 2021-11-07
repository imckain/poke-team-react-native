import React, { useCallback, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Context as TeamsContext} from '../context/TeamContext';

import { Ionicons } from '@expo/vector-icons';

import ViewTeams from '../components/buildTeamComponents/ViewTeams';

const TeamsScreen = (props) => {
  const { state } = useContext(TeamsContext);

  const showTeams = useCallback((el) => {
    return <FlatList 
      horizontal={false}
      data={el}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        if (item.id !== 0) return <ViewTeams results={item} id={item.id} height={'auto'} width={'100%'} navigation={props.navigation} />
        else return null
      }}
    />
  }, [state])

  return (
    <View style={styles.container}>
      <View style={{alignSelf: 'flex-end'}}>
        <TouchableOpacity style={{ paddingHorizontal: 18 }} onPress={() => props.navigation.navigate('Build Team')}>
          <Ionicons name="ios-add" size={38} color="#fff" />
        </TouchableOpacity>
      </View>
      <View contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}} style={styles.teamsScrollView}>
        <View style={styles.teamsView}>
          {showTeams(state)}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#353340',
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 50
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