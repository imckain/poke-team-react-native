import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

import useGetReultsFromUrl from '../../hooks/useGetResultsFromUrl';
import checkType from '../functions/checkType';

const MoveType = ({ results, navigation, detailFontSize, margin, flexDirection }) => {
  const [getResultsFromUrl, urlResults] = useGetReultsFromUrl();

  const isValid = (el) => {
    if (el.type === null) {
      return 'N/A'
    } else return el.type.name
  }

  const showType = (el) => {

    const navigate = async(url, param) => {
      if (urlResults.name === param) {
        await getResultsFromUrl(url)
        return navigation.navigate('Type Detail Modal', { results: urlResults })
      } else await getResultsFromUrl(url)
    }

    return (
      <View key={el.type.name} style={[styles.typeBox, { backgroundColor: checkType(el.type.name)}]}>
        <TouchableOpacity 
          onPressIn={async() => {
            await getResultsFromUrl(el.type.url)
          }}
          onPressOut={() => navigate(el.type.url, el.type.name)}
        >
          <Text allowFontScaling={false} style={[styles.typeText, { fontSize: detailFontSize }]}>{isValid(el)}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={[styles.typeContainer, { marginBottom: margin, flexDirection: flexDirection }]}>
      <View style={{flexDirection: 'row'}}>
        {showType(results)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  typeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  typeLabelText: {
    color: '#fff',
    marginTop: 7,
    fontWeight: '600'
  },
  typeBox: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#000000',
    margin: 7,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 'auto',
  },
  typeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3,
    textShadowColor: 'rgba(0, 0, 0, 0.712)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 5,
    textTransform: 'capitalize',
  },
});

export default MoveType;