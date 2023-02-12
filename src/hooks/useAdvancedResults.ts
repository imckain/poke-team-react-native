import { useCallback, useEffect, useState } from "react";
import pokeApi from "../api/pokeApi";

export const useAdvancedResults = (): [
  (defaultTerm: string | number) => Promise<void>,
  Array<any>
] => {
  const [advancedResults, setAdvancedResults] = useState<Array<any>>();
  const [advancedApiErrorMessage, setAdvancedApiErrorMessage] =
    useState<string>("");

  const advancedSearchAPI = async (defaultTerm: string | number) => {
    if (defaultTerm === "" || defaultTerm === undefined) {
      return setAdvancedResults(null);
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
      await setAdvancedResults([jsonValue]);
    } catch (error) {
      setAdvancedApiErrorMessage("Something Went Wrong");
      console.log(advancedApiErrorMessage);
    }
  };

  useEffect(() => {
    advancedSearchAPI("");
  }, []);

  return [advancedSearchAPI, advancedResults];
};
