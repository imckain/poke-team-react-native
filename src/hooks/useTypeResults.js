import { useCallback, useEffect, useState } from 'react';
import pokeApi from '../api/pokeApi';;

export default () => {
  const [typeResults, setTypeResults] = useState([]);
  const [advancedApiErrorMessage, setAdvancedApiErrorMessage] = useState('');
  
  const typeSearchApi = useCallback(async (defaultTerm) => {
    if (defaultTerm === '' || defaultTerm === undefined) { return setTypeResults(null) }
    try {
      const response = await pokeApi.get(`https://pokeapi.co/api/v2/type/${defaultTerm}`);
      const jsonToSting = JSON.stringify(response.data)
      const jsonValue = JSON.parse(jsonToSting.replaceAll('-', ' '))
      setTypeResults([jsonValue])
    } catch (error) {
      setAdvancedApiErrorMessage('Something Went Wrong')
    }
  }, []);

  useEffect(() => {
    typeSearchApi('');
  }, []);
  
  return [typeSearchApi, typeResults]
};