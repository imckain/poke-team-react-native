import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Collapsible from 'react-native-collapsible';

import useGetReultsFromUrl from '../../hooks/useGetResultsFromUrl';

import { Entypo } from '@expo/vector-icons';

const TypeMoves = ({ results, navigation }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [getResultsFromUrl, urlResults] = useGetReultsFromUrl();

  const checkForCollapse = useCallback((el) => {

    if (el === true) {
      return (
        <Pressable onPressIn={() => setCollapsed(false)}>
          <Text allowFontScaling={false} style={[styles.headerText]}>Moves  <Entypo name="triangle-right" size={22} color="rgb(175, 175, 175)" /></Text>
        </Pressable>
      )
    } if (el === false) {
      return(
        <Pressable onPressIn={() => setCollapsed(true)}>
          <Text allowFontScaling={false} style={[styles.headerText]}>Moves  <Entypo name="triangle-down" size={22} color="rgb(175, 175, 175)" /></Text>
        </Pressable>
      )
    }
  }, []);
  
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  const createMoveTextBox = (el) => {
    const searchApiByUrl = useCallback(async(term) => {
      await getResultsFromUrl(term);
      return urlResults
    }, [])

    const navigate = async(url) => {
      if (urlResults.id !== undefined) {
        return navigation.navigate('Move Detail Modal', { results: urlResults })
      } else searchApiByUrl(url)
    }

    const moveBox = el.moves.map(item => {
      return (
        <View key={item.name} style={styles.moveTextBox}>
          <Pressable 
            onPressIn={async() => {
              await searchApiByUrl(item.url)
            }}
            onPressOut={() => navigate(item.url)}
          >
            <Text allowFontScaling={false} style={[styles.moveText]}>{Capitalize(item.name)}</Text>
          </Pressable>
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
    alignItems: 'stretch',
    width: '100%',
    marginHorizontal: 12,
    marginBottom: 10
  },
  headerText: {
    color: '#fff',
    marginTop: 7,
    fontWeight: '600',
    fontSize: 22,
  },
  scrollViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  moveTextBox: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#464450',
    margin: 7,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '45%'
  },
  moveText: {
    color: 'rgb(223, 223, 223)',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3
  },
});

export default TypeMoves;