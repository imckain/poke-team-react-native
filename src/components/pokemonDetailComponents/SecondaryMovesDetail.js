import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

import useGetReultsFromUrl from '../../hooks/useGetResultsFromUrl';
import FilterMoveSearchBar from './FilterMoveSearchBar';

import { Entypo } from '@expo/vector-icons';

const SecondaryMovesDetail = ({ results, navigation, margin }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [getResultsFromUrl, urlResults] = useGetReultsFromUrl();

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <TouchableOpacity style={styles.headerWrapper} onPressIn={() => setCollapsed(false)}>
          <Text allowFontScaling={false} style={[styles.headerText]}>Moves</Text>  
          <Entypo name="plus" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      )
    } if (el === false) {
      return(
        <TouchableOpacity style={styles.headerWrapper} onPressIn={() => setCollapsed(true)}>
          <Text allowFontScaling={false} style={[styles.headerText]}>Moves</Text>  
          <Entypo name="minus" size={32} color="rgba(255, 255, 255, 0.5)" />
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

    const moveBox = [].concat(el.moves)
      .sort((a, b) => a.version_group_details[0].level_learned_at < b.version_group_details[0].level_learned_at ? 1: -1)
      .map((item, i) => {
      return (
        <View key={i} style={styles.moveTextBox}>
          <TouchableOpacity 
            onPressIn={async() => {
              await getResultsFromUrl(item.move.url)
            }}
            onPressOut={async() => {
              return navigate(item.move.url, item.move.name)
            }}
          >
            <Text allowFontScaling={false} adjustsFontSizeToFit={true} numberOfLines={1} style={[styles.moveText]}>{item.move.name}</Text>
          </TouchableOpacity>
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
        const navigate = async(url) => {
          if (urlResults.id !== undefined) {
            await getResultsFromUrl(url)
            return navigation.navigate('Move Detail Modal', { results: urlResults })
          } else await getResultsFromUrl(url)
        }
      
        const moveBox = el.map(item => {
          return (
            <View key={item.move.name} style={styles.moveTextBox}>
              <TouchableOpacity 
                onPressIn={async() => {
                  await getResultsFromUrl(item.move.url)
                }}
                onPressOut={async() => {
                  return navigate(item.move.url, item.move.name)
                }}
              >
                <Text allowFontScaling={false} adjustsFontSizeToFit={true} numberOfLines={1} style={[styles.moveText]}>{item.move.name}</Text>
              </TouchableOpacity>
              <Text style={styles.moveDetailText}>Level Learned: {item.version_group_details[0].level_learned_at}</Text>
              <Text style={styles.moveDetailText}>Method: {item.version_group_details[0].move_learn_method.name}</Text>
            </View>
          )
        })
        return moveBox
      } catch (error) {
        console.log(error);
      }
    } else return createMoveTextBox(results)
  }
  
  const searchMoves = (el, param) => {
    if (param === '') return setFilteredResults(el)
    try {
      const res = el.moves.filter(item => item.move.name.includes(param.replaceAll(' ', '-').toLowerCase()))
      const sorted = [].concat(res)
        .sort((a, b) => a.version_group_details[0].level_learned_at < b.version_group_details[0].level_learned_at ? 1 : -1)
      return setFilteredResults(sorted)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchMoves(results, searchTerm)
  }, [searchTerm])

  return (
    <View style={[styles.container, { marginBottom: margin }]}>
      {checkForCollapse(collapsed)}
      <Collapsible collapsed={collapsed}>
        <View style={styles.searchBarContainer}>
          <FilterMoveSearchBar 
            searchTerm={searchTerm} 
            onSearchTermChange={setSearchTerm} 
            onSearchTermSubmit={() => searchMoves(results, searchTerm.replaceAll(' ', '-'))}
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
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#000000',
    paddingVertical: 5,
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
    fontWeight: '600',
    fontSize: 28,
  },
  scrollViewStyle: {
    marginBottom: 180,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  headerWrapper: {
    width: '100%',
    paddingHorizontal: 12,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'baseline'
  },
  moveTextBox: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#000000',
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
    paddingVertical: 3,
    textTransform: 'capitalize',
  },
  moveDetailText: {
    color: 'rgb(223, 223, 223)',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingTop: 1
  },
});

export default React.memo(SecondaryMovesDetail);