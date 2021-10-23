import { useCallback, useEffect, useState } from 'react';
import pokeApi from '../api/pokeApi';;

export default () => {
  const [results, setResults] = useState([]);
  const [apiErrorMessage, setApiErrorMessage] = useState('');

  const searchAPI = useCallback(async (defaultTerm) => {
    if (defaultTerm === '' || defaultTerm === undefined) { return setResults(null) }
    try {
      const response = await pokeApi.get(`https://pokeapi.co/api/v2/pokemon/${defaultTerm}`);
      setResults([response.data])
    } catch (error) {
      setApiErrorMessage('Something Went Wrong')
    }
  }, []);
  
  const randomInt = (max) => {
    return Math.floor(Math.random() * max)
  }
  
  const randomMon = randomInt(898);
  
  useEffect(() => {
    searchAPI(randomMon);
  }, []);
  
  return [searchAPI, results ]
};