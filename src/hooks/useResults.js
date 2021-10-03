import { useCallback, useEffect, useState } from 'react';
import pokeApi from '../api/pokeApi';;

export default () => {
  const [results, setResults] = useState([]);
  const [apiErrorMessage, setApiErrorMessage] = useState('');

  const [advancedResults, setAdvancedResults] = useState([]);
  const [advancedApiErrorMessage, setAdvancedApiErrorMessage] = useState('');

  const searchAPI = useCallback(async (defaultTerm) => {
    if (defaultTerm === '') { return null }
    try {
      const response = await pokeApi.get(`/pokemon/${defaultTerm}`);
      console.log(response.data.name);
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