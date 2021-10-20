import React, { useCallback } from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';

import useGetReultsFromUrl from '../../hooks/useGetResultsFromUrl';

const MoveType = ({ results, navigation, detailFontSize, headerFontSize, margin, flexDirection }) => {
  const [getResultsFromUrl, urlResults] = useGetReultsFromUrl();

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const isValid = (el) => {
    if (el.type === null) {
      return 'N/A'
    } else return Capitalize(el.type.name)
  }

  const showType = (el) => {

    const navigate = async(url, param) => {
      if (urlResults.name === param) {
        await getResultsFromUrl(url)
        return navigation.navigate('Type Detail Modal', { results: urlResults })
      } else await getResultsFromUrl(url)
    }

    return (
      <View key={el.type.name} style={styles.typeBox}>
        <Pressable 
          onPressIn={async() => {
            await getResultsFromUrl(el.type.url)
          }}
          onPressOut={() => navigate(el.type.url, el.type.name)}
        >
          <Text allowFontScaling={false} style={[styles.typeText, { fontSize: detailFontSize }]}>{isValid(el) + ' '}</Text>
        </Pressable>
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
    backgroundColor: '#464450',
    margin: 7,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 'auto'
  },
  typeText: {
    color: 'rgb(223, 223, 223)',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3
  },
});

export default MoveType;