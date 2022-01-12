import React, { useCallback, useContext, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Context as TeamsContext} from '../context/TeamContext';
import Tooltip from 'react-native-walkthrough-tooltip';

import { Ionicons } from '@expo/vector-icons';

import ViewTeams from '../components/buildTeamComponents/ViewTeams';
import { useEffect } from 'react';

const TeamsScreen = (props) => {
  const { state } = useContext(TeamsContext);
  const [showTip, setTip] = useState(true)

  const showTeams = useCallback((el) => {
    return <FlatList 
      horizontal={false}
      data={el}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => {
        if (item.id !== 0) return <View style={styles.teamContainer}><ViewTeams results={item} id={item.id} height={'auto'} width={'100%'} navigation={props.navigation} /></View>
        else return null
      }}
    />
  }, [state])

  const createAlert = () => {
    Alert.alert(
      "Max number of Teams",
      "Delete a team to proceed",
      { cancelable: true }
    );
  }

  const checkMaxTeams = () => {
    if (state !== null && state.length > 15) {
      return (
        <TouchableOpacity style={{ paddingHorizontal: 18 }} onPress={createAlert}>
          <Ionicons name="ios-add" size={38} color="#747474" />
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity style={{ paddingHorizontal: 18 }} onPress={() => {
          setTip(false)
          return props.navigation.navigate('Build Team')
        }}>
          <Ionicons name="ios-add" size={38} color="#fff" />
        </TouchableOpacity>
      )
    }
  }

  const showStartMessage = useEffect(() => {
    if (state === null || state.length === 0) {
      return setTip(true)
    } else return setTip(false)
  }, [state])

  return (
    <View style={styles.container}>
      <View style={{alignSelf: 'flex-end', flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{ color: '#fff', paddingLeft: 24, fontWeight: '600', fontSize: 32 }}>Teams</Text>
        <Tooltip
          isVisible={showTip}
          content={
            <View>
              <Text style={styles.label}>Tap to begin</Text>
            </View>
          }
          placement='left'
          onClose={() => setTip(false)}
        >
          {showStartMessage}
          {checkMaxTeams()}
        </Tooltip>
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
    backgroundColor: '#000000',
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
  teamContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(105, 105, 105, 0.6)',
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
});

export default React.memo(TeamsScreen);