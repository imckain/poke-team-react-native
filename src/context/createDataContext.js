import React, { useCallback, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
      async function rehydrate() {
        const storedState = await getData()
        dispatch({ type: "hydrate", payload: storedState });
      }
      
      rehydrate()
    }, []);
  
    useEffect(() => {
      storeData(state);
    }, [state])


    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch)
    }
  
    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>
  };

  return { Context, Provider };
};

