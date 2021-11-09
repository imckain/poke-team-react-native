import { useCallback, useEffect, useState } from 'react';
import pokeApi from '../api/pokeApi';;

export default () => {
  const [urlResults, setResults] = useState([]);
  const [advancedApiErrorMessage, setAdvancedApiErrorMessage] = useState('');
  
  const getResultsFromUrl = useCallback(async (defaultTerm) => {
    if (defaultTerm === '') { return null }
    try {
      const response = await pokeApi.get(defaultTerm);
      const jsonToSting = JSON.stringify(response.data)
      const jsonValue = JSON.parse(jsonToSting.replaceAll('special-', 'Sp').replaceAll('-', ' ').replaceAll('generation ', 'generation-').replaceAll('black ', 'black-'))
      setResults(jsonValue)
    } catch (error) {
      setAdvancedApiErrorMessage('Something Went Wrong')
    }
  }, []);
  
  useEffect(() => {
    getResultsFromUrl('');
  }, []);
  
  return [getResultsFromUrl, urlResults]
};