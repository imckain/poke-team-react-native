import { useCallback, useEffect, useState } from 'react';
import pokeApi from '../api/pokeApi';;

export default () => {
  const [moveResults, setMoveResults] = useState([]);
  const [advancedApiErrorMessage, setAdvancedApiErrorMessage] = useState('');
  
  const moveSearchApi = useCallback(async (defaultTerm) => {
    if (defaultTerm === '' || defaultTerm === undefined) { return setMoveResults(null) }
    try {
      const response = await pokeApi.get(`https://pokeapi.co/api/v2/move/${defaultTerm}`);
      const jsonToSting = JSON.stringify(response.data)
      const jsonValue = JSON.parse(jsonToSting.replaceAll('-', ' '))
      setMoveResults([jsonValue])
    } catch (error) {
      setAdvancedApiErrorMessage('Something Went Wrong')
    }
  }, []);

  useEffect(() => {
    moveSearchApi('');
  }, []);
  
  return [moveSearchApi, moveResults]
};