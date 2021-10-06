import { useCallback, useEffect, useState } from 'react';
import pokeApi from '../api/pokeApi';;

export default () => {
  const [buildResults, setBuildResults] = useState([]);
  const [advancedApiErrorMessage, setAdvancedApiErrorMessage] = useState('');
  
  const buildSearchApi = useCallback(async (defaultTerm) => {
    if (defaultTerm === '') { return null }
    try {
      const response = await pokeApi.get(`https://pokeapi.co/api/v2/pokemon/${defaultTerm}`);
      console.log(response.data.name);
      setBuildResults([response.data])
    } catch (error) {
      setAdvancedApiErrorMessage('Something Went Wrong')
    }
  }, []);

  useEffect(() => {
    buildSearchApi('');
  }, []);
  
  return [buildSearchApi, buildResults]
};