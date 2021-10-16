import { useCallback, useEffect, useState } from 'react';
import pokeApi from '../api/pokeApi';;

export default () => {
  const [urlResults, setResults] = useState([]);
  const [advancedApiErrorMessage, setAdvancedApiErrorMessage] = useState('');
  
  const getResultsFromUrl = useCallback(async (defaultTerm) => {
    if (defaultTerm === '') { return null }
    try {
      const response = await pokeApi.get(defaultTerm);
      setResults(response.data)
    } catch (error) {
      setAdvancedApiErrorMessage('Something Went Wrong')
    }
  }, []);
  
  useEffect(() => {
    getResultsFromUrl('');
  }, []);
  
  console.log(urlResults.name);
  return [getResultsFromUrl, urlResults]
};