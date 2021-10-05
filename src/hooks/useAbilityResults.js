import { useCallback, useEffect, useState } from 'react';
import pokeApi from '../api/pokeApi';;

export default () => {
  const [abilityResults, setAbilityResults] = useState([]);
  const [advancedApiErrorMessage, setAdvancedApiErrorMessage] = useState('');
  
  const abilitySearchApi = useCallback(async (defaultTerm) => {
    if (defaultTerm === '') { return null }
    try {
      const response = await pokeApi.get(`https://pokeapi.co/api/v2/ability/${defaultTerm}`);
      console.log(response.data.name);
      setAbilityResults([response.data])
    } catch (error) {
      setAdvancedApiErrorMessage('Something Went Wrong')
    }
  }, []);

  useEffect(() => {
    abilitySearchApi('');
  }, []);
  
  return [abilitySearchApi, abilityResults]
};