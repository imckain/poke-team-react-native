import { useCallback, useEffect, useState } from "react";
import pokeApi from "../api/pokeApi";

export const useTypeResults = (): [
  (defaultTerm: string | number) => Promise<void>,
  Array<any>
] => {
  const [typeResults, setTypeResults] = useState<Array<any>>();
  const [advancedApiErrorMessage, setAdvancedApiErrorMessage] = useState("");

  const typeSearchApi = async (defaultTerm) => {
    if (defaultTerm === "" || defaultTerm === undefined) {
      return setTypeResults(null);
    }
    try {
      const response = await pokeApi.get(`type/${defaultTerm}`);
      const jsonToSting = JSON.stringify(response.data);
      const jsonValue = JSON.parse(jsonToSting.replaceAll("-", " "));
      setTypeResults([jsonValue]);
    } catch (error) {
      setAdvancedApiErrorMessage("Something Went Wrong");
      console.log(advancedApiErrorMessage);
    }
  };

  useEffect(() => {
    typeSearchApi("");
  }, []);

  return [typeSearchApi, typeResults];
};
