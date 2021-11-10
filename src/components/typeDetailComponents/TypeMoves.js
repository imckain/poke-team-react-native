import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

import useGetReultsFromUrl from '../../hooks/useGetResultsFromUrl';

import { Entypo } from '@expo/vector-icons';
import checkType from '../functions/checkType';

const TypeMoves = ({ results, navigation }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [getResultsFromUrl, urlResults] = useGetReultsFromUrl();

  const checkForCollapse = useCallback((el) => {

    if (el === true) {
      return (
        <TouchableOpacity style={styles.headerWrapper} onPressIn={() => setCollapsed(false)}>
          <Text allowFontScaling={false} style={[styles.headerText]}>Moves</Text>  
          <Entypo name="plus" size={32} color="rgb(175, 175, 175)" />
        </TouchableOpacity>
      )
    } if (el === false) {
      return(
        <TouchableOpacity style={styles.headerWrapper} onPressIn={() => setCollapsed(true)}>
          <Text allowFontScaling={false} style={[styles.headerText]}>Moves</Text>  
          <Entypo name="minus" size={32} color="rgb(175, 175, 175)" />
        </TouchableOpacity>
      )
    }
  }, []);

  const createMoveTextBox = (el) => {

    const navigate = async(url, param) => {
      if (urlResults.name === param) {
        await getResultsFromUrl(url)
        return navigation.navigate('Move Detail Modal', { results: urlResults })
      } else await getResultsFromUrl(url)
    }

    const moveBox = el.moves.map(item => {
      return (
        <View key={item.name} style={[styles.moveTextBox, { backgroundColor: checkType(results.name) }]}>
          <TouchableOpacity 
            onPressIn={async() => {
              await getResultsFromUrl(item.url)
            }}
            onPressOut={() => navigate(item.url, item.name)}
          >
            <Text allowFontScaling={false} style={[styles.moveText]}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      )
    })
    return moveBox
  }

  return (
    <View style={[styles.container]}>
      {checkForCollapse(collapsed)}
      <Collapsible collapsed={collapsed}>
        <View horizontal style={styles.scrollViewStyle}>
          {createMoveTextBox(results)}
        </View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'baseline',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#000000',
    paddingVertical: 5,
    marginBottom: 10,
  },
  headerText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 28,
  },
  headerWrapper: {
    width: '100%',
    paddingHorizontal: 12,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  scrollViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 12
  },
  moveTextBox: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#000000',
    marginBottom: 12,
    marginRight: 12,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  moveText: {
    color: 'rgb(223, 223, 223)',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    textShadowColor: 'rgb(0, 0, 0)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
    textTransform: 'capitalize',
  },
});

export default TypeMoves;