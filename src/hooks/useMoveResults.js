import { useCallback, useEffect, useState } from 'react';
import pokeApi from '../api/pokeApi';;

export default () => {
  const [moveResults, setMoveResults] = useState([]);
  const [advancedApiErrorMessage, setAdvancedApiErrorMessage] = useState('');
  
  const moveSearchApi = useCallback(async (defaultTerm) => {
    if (defaultTerm === '') { return null }
    try {
      const response = await pokeApi.get(`https://pokeapi.co/api/v2/move/${defaultTerm}`);
      setMoveResults([response.data])
    } catch (error) {
      setAdvancedApiErrorMessage('Something Went Wrong')
    }
  }, []);

  useEffect(() => {
    moveSearchApi('');
  }, []);
  
  return [moveSearchApi, moveResults]
};