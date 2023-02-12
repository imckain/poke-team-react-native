import { useCallback, useEffect, useState } from "react";
import pokeApi from "../api/pokeApi";

export const useBuildResults = (): [
  (defaultTerm: string | number) => Promise<void>,
  Array<any>
] => {
  const [buildResults, setBuildResults] = useState<Array<any>>();
  const [advancedApiErrorMessage, setAdvancedApiErrorMessage] =
    useState<string>("");

  const buildSearchApi = async (defaultTerm: string) => {
    if (defaultTerm === "" || defaultTerm === undefined) {
      return setBuildResults(null);
    }
    try {
      const response = await pokeApi.get(`pokemon/${defaultTerm}`);
      const jsonToSting = JSON.stringify(response.data);
      const jsonValue = JSON.parse(
        jsonToSting
          .replaceAll("-", " ")
          .replaceAll("generation ", "generation-")
          .replaceAll("black ", "black-")
      );
      setBuildResults([jsonValue]);
    } catch (error) {
      setAdvancedApiErrorMessage("Something Went Wrong");
      console.log(advancedApiErrorMessage);
    }
  };

  useEffect(() => {
    buildSearchApi("");
  }, []);

  return [buildSearchApi, buildResults];
};
