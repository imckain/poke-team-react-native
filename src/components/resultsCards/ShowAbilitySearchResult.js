import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import AbilityName from '../abilityDetailComponents/AbilityName';
import AbilityShortEffect from '../abilityDetailComponents/AbilityShortEffect';

const ShowAbilitySearchResult = (props) => {
  const results = props.results

  return (
    <View style={styles.container} >
      <View style={styles.mainCardContainer}>
        <View style={styles.mainInfo}>
          <AbilityName fontSize={36} results={results} />
          <AbilityShortEffect results={results} />
        </View>
      </View>
      <Text allowFontScaling={false} style={styles.infoNotice}>Tap for more info</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  mainCardContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    width: '90%',
    height: 'auto',
    alignSelf: 'center',
    backgroundColor: '#464450',
  },
  mainInfo: {
    justifyContent: 'flex-start',
    maxWidth: '100%',
    paddingHorizontal: 12
  },
  infoNotice: {
    textAlign: 'center',
    color: '#ffffffa7',
    fontStyle: 'italic',
    paddingTop: 2,
    paddingBottom: 8,
    fontSize: 12
  }
});

export default React.memo(ShowAbilitySearchResult);