import { useCallback, useEffect, useState } from "react";
import pokeApi from "../api/pokeApi";

export const useResults = (): [
  (defaultTerm: string | number) => Promise<void>,
  Array<any>
] => {
  const [results, setResults] = useState<Array<any>>([]);
  const [apiErrorMessage, setApiErrorMessage] = useState<string>("");

  const searchAPI = useCallback(async (defaultTerm) => {
    if (defaultTerm === "" || defaultTerm === undefined) {
      return setResults(null);
    }
    try {
      const response = await pokeApi.get(`pokemon/${defaultTerm}`);
      const jsonToSting = JSON.stringify(response.data);
      const jsonValue = JSON.parse(
        jsonToSting
          .replaceAll("special-", "Sp")
          .replaceAll("-", " ")
          .replaceAll("generation ", "generation-")
          .replaceAll("black ", "black-")
      );
      setResults([jsonValue]);
    } catch (error) {
      setApiErrorMessage("Something Went Wrong");
      console.log(apiErrorMessage);
    }
  }, []);

  const randomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const randomMon = randomInt(898);

  useEffect(() => {
    searchAPI(randomMon);
  }, []);

  return [searchAPI, results];
};
