import React, { useCallback, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // console.log(state);

    const storeData = async (value) => {
      // console.log(value);
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
      } catch (e) {
        // saving error
        console.log(e);
      }
    }
    storeData(state)

    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch(e) {
        // error reading value
        console.log(e);
      }
    }

    const storedState = async() => await getData()
    console.log(storedState());

    const boundActions ={};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch)
    }

    return <Context.Provider value={{ state: storedState(), ...boundActions }}>{children}</Context.Provider>
  };

  return { Context, Provider };
};