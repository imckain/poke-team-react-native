import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';

import { Ionicons } from '@expo/vector-icons';

import SearchBarByMove from '../navigatorCards/searchBars/SearchBarByMove';
import PokedexCard from '../../pokedex/PokedexCard';
import moveData from '../../data/moves.json';
import useMoveResults from '../../hooks/useMoveResults';
import ShowMoveSearchResult from '../resultsCards/ShowMoveSearchResult';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const MoveSearchScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [moveSearchApi, moveResults] = useMoveResults([]);
  const [searchParam, setSearchParam] = useState('move');
  const [filteredResults, setFilteredResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('all');
  const [params, setParams] = useState([
    {label: 'All Move Types', value: 'all'},
    {label: 'Normal', value: 1},
    {label: 'Fighting', value: 2},
    {label: 'Flying', value: 3},
    {label: 'Poison', value: 4},
    {label: 'Ground', value: 5},
    {label: 'Rock', value: 6},
    {label: 'Bug', value: 7},
    {label: 'Steel', value: 9},
    {label: 'Fire', value: 10},
    {label: 'Water', value: 11},
    {label: 'Grass', value: 12},
    {label: 'Electric', value: 13},
    {label: 'Psychic', value: 14},
    {label: 'Ice', value: 15},
    {label: 'Dragon', value: 16},
    {label: 'Dark', value: 17},
    {label: 'Fairy', value: 18},
  ])

  const showPokeDex = (el, param) => {
    if (param === 'move') {
      return <FlatList 
        horizontal={false}
        data={el}
        keyExtractor={(item) => item.identifier}
        renderItem={({ item }) => {
          let resName
          if (moveResults !== null) {
            resName = moveResults[0].name.replaceAll(' ', '-')
          }
          return(
            <TouchableOpacity 
              delayPressIn={50}
              onPressIn={async() => {
                await moveSearchApi(item.identifier)
              }}
              onPressOut={async() => {
                await moveSearchApi(item.identifier)
                if (moveResults !== null && resName === item.identifier) {
                  await moveSearchApi(item.identifier)
                  return props.navigation.navigate('Move Detail Modal', { results: moveResults[0] })
                }
              }}
            >
              <PokedexCard results={item} searchParam={searchParam} />
            </TouchableOpacity>
          )
        }}
        />
      }
    }
    
    const displayFilteredResults = (el, param) => {
      if (searchTerm !== '') {
        try {      
          return <FlatList 
          horizontal={false}
          data={el}
          keyExtractor={(item) => item.identifier}
          renderItem={({ item }) => {
            let resName
            if (moveResults !== null) {
              resName = moveResults[0].name.replaceAll(' ', '-')
            }
            return(
              <TouchableOpacity 
                delayPressIn={50}
                onPressIn={async() => {
                  await moveSearchApi(item.identifier)
                }}
                onPressOut={async() => {
                  await moveSearchApi(item.identifier)
                  if (moveResults !== null && resName === item.identifier) {
                    await moveSearchApi(item.identifier)
                    return props.navigation.navigate('Move Detail Modal', { results: moveResults[0] })
                  }
                }}
              >
                <PokedexCard results={item} searchParam={searchParam} />
              </TouchableOpacity>
            )
          }}
        />
      } catch (error) {
        console.log(error);
      }
    } else return showPokeDex(el, param)
  }
  
  const searchMoves = (el, param) => {
    if (param === '') return setFilteredResults(el)
    try {
      const res = el.filter(item => item.identifier.includes(param.replaceAll(' ', '-').toLowerCase()))
      return setFilteredResults(res)
    } catch (error) {
      console.log(error);
    }
  };

  const showType = (el, param) => {
    if (param === 'all') return el
    return el.filter(item => item.type_id === param)
  }

  useEffect(() => {
    searchMoves(moveData, searchTerm)
  }, [searchTerm])

  // const showMoveCard = (el, term) => {
  //   if (term !== '') {
  //     return <FlatList 
  //       horizontal={false}
  //       scrollEnabled={false}
  //       data={moveResults}
  //       keyExtractor={(item) => item.name}
  //       renderItem={({ item }) => {
  //         return(
  //           <TouchableOpacity onPress={() => props.navigation.navigate('Move Detail Modal', { results: item })}>
  //             <ShowMoveSearchResult results={item} />
  //           </TouchableOpacity>
  //         )
  //       }}
  //     />
  //   } else {
  //     return null;
  //   }
  // }

  // const showClear = (el, term) => {
  //   if(el !== null || term !== '') {
  //     return (
  //       <TouchableOpacity 
  //         onPress={async() => {
  //           await moveSearchApi()
  //           setSearchTerm('')
  //         }} 
  //         style={styles.clear}
  //       >
  //         <Ionicons name="ios-close-circle" size={18} color="rgb(75, 75, 75)" />
  //       </TouchableOpacity>
  //     )
  //   } else return null
  // }

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBarByMove 
          searchTerm={searchTerm} 
          onSearchTermChange={setSearchTerm} 
          onSearchTermSubmit={() => {
            searchMoves(moveData, searchTerm.replaceAll(' ', '-').toLowerCase())
            // return moveSearchApi(searchTerm.replaceAll(' ', '-').toLowerCase())
          }}
          style={{zIndex: 0}}
          />
        </View>
        {/* <View style={{height: 'auto'}}>
          {showMoveCard(moveResults, searchTerm)}
        </View> */}
        <View style={{height: 5 }} />
        <DropDownPicker 
          open={open}
          value={value}
          items={params}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setParams}
          placeholder='Generations'
          style={styles.dropDownHeader}
          textStyle={{
            color: '#fff',
            fontSize: 24,
            paddingLeft: 2,
            fontWeight: '500',
          }}
          dropDownContainerStyle={styles.dropDown}
          itemSeparator={true}
          listItemLabelStyle={{ fontWeight: '400', fontSize: 24 }}
          selectedItemLabelStyle={{ fontWeight: '600' }}
          closeAfterSelecting={true}
          theme='DARK'
        />
        <View style={styles.dexContainer}>
          {displayFilteredResults(showType(filteredResults, value), searchParam)}
        </View>
      </View>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flexDirection: 'column',
    flex: 1
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  clear: { 
    zIndex: 1, 
    position: 'absolute', 
    alignSelf: 'center',
    right: 34, 
    width: 'auto',
  },
  dropDownHeader: {
    backgroundColor: '#000000',
    marginBottom: 22,
    borderWidth: 0,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'rgba(105, 105, 105, 0.6)'
  },
  dropDown: {
    backgroundColor: '#000000',
    marginBottom: 22,
    borderWidth: 0,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 12
  },
  searchSettingIcon: {
    paddingRight: 20
  },
  searchParamsContainter: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly'
  },
  activeSearchParamText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    borderBottomWidth: 2,
    borderColor: '#fff',
    paddingBottom: 1,
  },
  inactiveSearchParamText: {
    color: 'rgba(105, 105, 105, 0.6)',
    fontSize: 22,
    fontWeight: '400',
  },
  dexContainer: { 
    alignSelf: 'center',
    flex: 1
  }
});

export default React.memo(MoveSearchScreen);