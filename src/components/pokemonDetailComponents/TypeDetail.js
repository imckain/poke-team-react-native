import React, { useCallback } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

import useGetReultsFromUrl from '../../hooks/useGetResultsFromUrl';
import checkType from '../functions/checkType';

const TypeDetail = ({ results, margin, detailFontSize, navigation, flexDirection }) => {
  const [getResultsFromUrl, urlResults] = useGetReultsFromUrl();

  const showType = (el) => {

    const navigate = async(url, param) => {
      if (urlResults.name === param) {
        await getResultsFromUrl(url)
        return navigation.navigate('Type Detail Modal', { results: urlResults })
      } else await getResultsFromUrl(url)
    }

    const typeBox = el.types.map(item => {      
      return (
        <View key={item.type.name} style={[styles.typeBox, { backgroundColor: checkType(item.type.name) }]}>
          <Pressable 
            onPressIn={async() => {
              await getResultsFromUrl(item.type.url)
            }}
            onPressOut={async() => {
              return navigate(item.type.url, item.type.name)
            }}
          >
            <Text allowFontScaling={false} style={[styles.typeText, { fontSize: detailFontSize }]}>{item.type.name}</Text>
          </Pressable>
        </View>
      )
    })

    return typeBox
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
    alignItems: 'center'
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
    paddingVertical: 3,
    textShadowColor: 'rgb(0, 0, 0)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
    textTransform: 'capitalize',
  },
});

export default TypeDetail;