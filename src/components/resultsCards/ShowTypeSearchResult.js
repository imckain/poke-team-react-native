import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import TypeNameAndClass from '../typeDetailComponents/TypeNameAndClass';

const ShowAdvancedTypeResult = (props) => {
  const results = props.results

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.mainCardContainer}>
          <View style={styles.mainInfo}>
            <TypeNameAndClass alignSelf={'center'} fontSize={36} results={results} />
          </View>
        </View>
        <Text allowFontScaling={false} style={styles.infoNotice}>Tap for more info</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto'
  },
  mainCardContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    width: '90%',
    height: 'auto',
    alignSelf: 'center',
    backgroundColor: '#000000',
    borderColor: 'rgba(105, 105, 105, 0.6)',
    borderWidth: 1,
    justifyContent: 'center'
  },
  mainInfo: {
    // justifyContent: 'flex-start',
    maxWidth: '100%',
    paddingHorizontal: 12
  },
  detailInfo: {
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
  infoNotice: {
    textAlign: 'center',
    color: '#ffffffa7',
    fontStyle: 'italic',
    paddingTop: 2,
    fontSize: 12,
  }
});

export default React.memo(ShowAdvancedTypeResult);