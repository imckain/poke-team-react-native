import { useCallback, useEffect, useState } from 'react';
import pokeApi from '../api/pokeApi';;

export default () => {
  const [abilityResults, setAbilityResults] = useState([]);
  const [advancedApiErrorMessage, setAdvancedApiErrorMessage] = useState('');
  
  const abilitySearchApi = useCallback(async (defaultTerm) => {
    if (defaultTerm === '' || defaultTerm === undefined) { return setAbilityResults(null) }
    try {
      const response = await pokeApi.get(`https://pokeapi.co/api/v2/ability/${defaultTerm}`);
      const jsonToSting = JSON.stringify(response.data)
      const jsonValue = JSON.parse(jsonToSting.replaceAll('-', ' '))
      setAbilityResults([jsonValue])
    } catch (error) {
      setAdvancedApiErrorMessage('Something Went Wrong')
    }
  }, []);

  useEffect(() => {
    abilitySearchApi('');
  }, []);
  
  return [abilitySearchApi, abilityResults]
};