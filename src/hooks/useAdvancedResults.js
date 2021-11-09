import { useCallback, useEffect, useState } from 'react';
import pokeApi from '../api/pokeApi';;

export default () => {
  const [advancedResults, setAdvancedResults] = useState(null);
  const [advancedApiErrorMessage, setAdvancedApiErrorMessage] = useState('');
  
  const advancedSearchAPI = useCallback(async (defaultTerm) => {
    if (defaultTerm === '' || defaultTerm === undefined) { return setAdvancedResults(null) }
    try {
      const response = await pokeApi.get(`https://pokeapi.co/api/v2/pokemon/${defaultTerm}`);
      const jsonToSting = JSON.stringify(response.data)
      const jsonValue = JSON.parse(jsonToSting.replaceAll('-', ' ').replaceAll('special', 'Sp').replaceAll('generation ', 'generation-').replaceAll('black ', 'black-'))
      setAdvancedResults([jsonValue])
    } catch (error) {
      setAdvancedApiErrorMessage('Something Went Wrong')
    }
  }, []);

  useEffect(() => {
    advancedSearchAPI('');
  }, []);
  
  return [advancedSearchAPI, advancedResults]
};