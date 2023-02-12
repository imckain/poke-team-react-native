import { useEffect, useState } from "react";
import pokeApi from "../api/pokeApi";

export const useGetResultsFromUrl = (): [
  (defaultTerm: string | number) => Promise<void>,
  Array<any>
] => {
  const [urlResults, setResults] = useState<Array<any>>();
  const [advancedApiErrorMessage, setAdvancedApiErrorMessage] = useState("");

  const getResultsFromUrl = async (defaultTerm: string) => {
    if (defaultTerm === "") {
      return null;
    }
    try {
      const response = await pokeApi.get(defaultTerm);
      const jsonToSting = JSON.stringify(response.data);
      const jsonValue = JSON.parse(
        jsonToSting
          .replaceAll("special-", "Sp")
          .replaceAll("-", " ")
          .replaceAll("generation ", "generation-")
          .replaceAll("black ", "black-")
      );
      setResults(jsonValue);
    } catch (error) {
      setAdvancedApiErrorMessage("Something Went Wrong");
      console.log(advancedApiErrorMessage);
    }
  };

  useEffect(() => {
    getResultsFromUrl("");
  }, []);

  return [getResultsFromUrl, urlResults];
};
