import { useCallback, useEffect, useState } from "react";
import pokeApi from "../api/pokeApi";

export const useAbilityResults = (): [
  (defaultTerm: string | number) => Promise<void>,
  Array<any>
] => {
  const [abilityResults, setAbilityResults] = useState<Array<any>>();
  const [advancedApiErrorMessage, setAdvancedApiErrorMessage] =
    useState<string>("");

  const abilitySearchApi = async (defaultTerm: string | number) => {
    if (defaultTerm === "" || defaultTerm === undefined) {
      return setAbilityResults(null);
    }
    try {
      const response = await pokeApi.get(`ability/${defaultTerm}`);
      const jsonToSting = JSON.stringify(response.data);
      const jsonValue = JSON.parse(jsonToSting.replaceAll("-", " "));
      setAbilityResults([jsonValue]);
    } catch (error) {
      setAdvancedApiErrorMessage("Something Went Wrong");
      console.log(advancedApiErrorMessage);
    }
  };

  useEffect(() => {
    abilitySearchApi("");
  }, []);

  return [abilitySearchApi, abilityResults];
};
