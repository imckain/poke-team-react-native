import { useCallback, useEffect, useState } from 'react';
import pokeApi from '../api/pokeApi';;

export default () => {
  const [advancedResults, setAdvancedResults] = useState(null);
  const [advancedApiErrorMessage, setAdvancedApiErrorMessage] = useState('');
  
  const advancedSearchAPI = useCallback(async (defaultTerm) => {
    if (defaultTerm === '' || defaultTerm === undefined) { return setAdvancedResults(null) }
    try {
      const response = await pokeApi.get(`https://pokeapi.co/api/v2/pokemon/${defaultTerm}`);
      setAdvancedResults([response.data])
      console.log(response.data.id);
    } catch (error) {
      setAdvancedApiErrorMessage('Something Went Wrong')
    }
  }, []);

  useEffect(() => {
    advancedSearchAPI('');
  }, []);
  
  return [advancedSearchAPI, advancedResults]
};