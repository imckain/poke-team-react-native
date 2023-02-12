import { useCallback, useEffect, useState } from "react";
import pokeApi from "../api/pokeApi";

export const useMoveResults = (): [
  (defaultTerm: string | number) => Promise<void>,
  Array<any>
] => {
  const [moveResults, setMoveResults] = useState<Array<any>>();
  const [advancedApiErrorMessage, setAdvancedApiErrorMessage] = useState("");

  const moveSearchApi = async (defaultTerm: string | number) => {
    if (defaultTerm === "" || defaultTerm === undefined) {
      return setMoveResults(null);
    }
    try {
      const response = await pokeApi.get(`move/${defaultTerm}`);
      const jsonToSting = JSON.stringify(response.data);
      const jsonValue = JSON.parse(jsonToSting.replaceAll("-", " "));
      setMoveResults([jsonValue]);
    } catch (error) {
      setAdvancedApiErrorMessage("Something Went Wrong");
      console.log(advancedApiErrorMessage);
    }
  };

  useEffect(() => {
    moveSearchApi("");
  }, []);

  return [moveSearchApi, moveResults];
};
