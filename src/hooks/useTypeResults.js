import { useCallback, useEffect, useState } from 'react';
import pokeApi from '../api/pokeApi';;

export default () => {
  const [typeResults, setTypeResults] = useState([]);
  const [advancedApiErrorMessage, setAdvancedApiErrorMessage] = useState('');
  
  const typeSearchApi = useCallback(async (defaultTerm) => {
    if (defaultTerm === '') { return null }
    try {
      const response = await pokeApi.get(`https://pokeapi.co/api/v2/type/${defaultTerm}`);
      setTypeResults([response.data])
    } catch (error) {
      setAdvancedApiErrorMessage('Something Went Wrong')
    }
  }, []);

  useEffect(() => {
    typeSearchApi('');
  }, []);
  
  return [typeSearchApi, typeResults]
};