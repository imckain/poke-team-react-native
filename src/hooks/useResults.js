import { useCallback, useEffect, useState } from 'react';
import pokeApi from '../api/pokeApi';;

export default () => {
  const [results, setResults] = useState([]);
  const [apiErrorMessage, setApiErrorMessage] = useState('');

  const searchAPI = useCallback(async (defaultTerm) => {
    try {
      const response = await pokeApi.get(`/pokemon/${defaultTerm}`);
      console.log(response.data.name);
      setResults(response.data)
    } catch (error) {
      setApiErrorMessage('Something Went Wrong')
    }
  }, [results]);

  useEffect(() => {
    searchAPI();
  }, [results]);


  return [searchAPI, results]
};