import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Collapsible from 'react-native-collapsible';

import useGetReultsFromUrl from '../../hooks/useGetResultsFromUrl';
import FilterMoveSearchBar from '../pokemonDetailComponents/FilterMoveSearchBar';

import { Entypo } from '@expo/vector-icons';

const MovesDetail = ({ results, navigation }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [getResultsFromUrl, urlResults] = useGetReultsFromUrl();

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <Pressable onPressIn={() => setCollapsed(false)}>
          <Text allowFontScaling={false} style={[styles.headerText]}>Moves  <Entypo name="triangle-right" size={28} color="rgb(175, 175, 175)" /></Text>
        </Pressable>
      )
    } if (el === false) {
      return(
        <Pressable onPressIn={() => setCollapsed(true)}>
          <Text allowFontScaling={false} style={[styles.headerText]}>Moves  <Entypo name="triangle-down" size={28} color="rgb(175, 175, 175)" /></Text>
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
        <View key={item.move.name} style={styles.moveTextBox}>
          <Pressable 
            onPressIn={async() => {
              await searchApiByUrl(item.move.url)
            }}
            onPressOut={() => navigate(item.move.url)}
          >
            <Text allowFontScaling={false} style={[styles.moveText]}>{Capitalize(item.move.name)}</Text>
          </Pressable>
          <Text style={styles.moveDetailText}>Level Learned: {item.version_group_details[0].level_learned_at}</Text>
          <Text style={styles.moveDetailText}>Method: {item.version_group_details[0].move_learn_method.name}</Text>
        </View>
      )
    })
    return moveBox
  }

  const displayFilteredResults = (el) => {
    if (searchTerm !== '') {
      try {
        return el.map(filteredRes => (<View key={filteredRes.move.name} style={styles.moveTextBox}><Text allowFontScaling={false} style={[styles.moveText]}>{Capitalize(filteredRes.move.name)}</Text><Text style={styles.moveDetailText}>Level Learned: {filteredRes.version_group_details[0].level_learned_at}</Text><Text style={styles.moveDetailText}>Method: {filteredRes.version_group_details[0].move_learn_method.name}</Text></View>))
      } catch (error) {
        console.log(error);
      }
    } else return createMoveTextBox(results)
  }
  
  const searchMoves = (el, param) => {
    if (param === '') { return setFilteredResults(el) }
    try {
      const res = el.moves.filter(item => item.move.name === param)
      return setFilteredResults(res)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchMoves(results, searchTerm)
  }, [searchTerm])

  return (
    <View style={[styles.container]}>
      {checkForCollapse(collapsed)}
      <Collapsible collapsed={collapsed}>
        <View style={styles.searchBarContainer}>
          <FilterMoveSearchBar 
            searchTerm={searchTerm} 
            onSearchTermChange={setSearchTerm} 
            onSearchTermSubmit={() => searchMoves(results, searchTerm)}
            style={styles.searchBar}
          />
        </View>
        <View horizontal style={styles.scrollViewStyle}>
          {displayFilteredResults(filteredResults)}
        </View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '100%'
  },
  searchBarContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 70,
  },
  searchBar:{
    paddingHorizontal: 6
  },
  headerText: {
    color: '#fff',
    marginTop: 7,
    fontWeight: '600',
    fontSize: 22,
  },
  scrollViewStyle: {
    marginBottom: 180,
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
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3
  },
  moveDetailText: {
    color: 'rgb(223, 223, 223)',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingTop: 1
  },
});

export default React.memo(MovesDetail);