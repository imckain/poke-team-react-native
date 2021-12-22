import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const StartMessage = (props) => {

  return (
    <View style={[styles.container]}>
      <Text allowFontScaling={false} style={styles.label}>Press</Text> 
      <Ionicons name="ios-add" size={38} style={{ paddingHorizontal: 6 }} color="#fff" /> 
      <Text allowFontScaling={false} style={styles.label}>To Begin</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(105, 105, 105, 0.6)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    paddingVertical: 24,
    flexDirection: 'row'
  },
  label: {
    alignItems: 'center',
    fontSize: 26,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default StartMessage;