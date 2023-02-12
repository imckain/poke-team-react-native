import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { styles } from "./styles";
import SearchBar from "../../Navigators/SearchBar";
import { useAbilityResults } from "../../../hooks/useAbilityResults";
import PokedexCard from "../../Pokedex/PokedexCard";
import abilityData from "../../../data/abilities.json";

type Props = {
  navigation: any;
};

const AbilitySearchScreen = ({ navigation }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [abilitySearchApi, abilityResults] = useAbilityResults();
  const [searchParam, setSearchParam] = useState("ability");
  const [filteredResults, setFilteredResults] = useState([]);

  const showPokeDex = (param) => {
    if (param === "ability") {
      return (
        <FlatList
          horizontal={false}
          data={abilityData}
          keyExtractor={(item) => item.identifier}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                delayPressIn={50}
                onPress={() => {
                  abilitySearchApi(item.identifier);
                }}
              >
                <PokedexCard results={item} searchParam={searchParam} />
              </TouchableOpacity>
            );
          }}
        />
      );
    }
  };

  const displayFilteredResults = (el, param) => {
    if (searchTerm !== "") {
      try {
        return (
          <FlatList
            horizontal={false}
            data={el}
            keyExtractor={(item) => item.identifier}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    abilitySearchApi(item.identifier);
                  }}
                >
                  <PokedexCard results={item} searchParam={searchParam} />
                </TouchableOpacity>
              );
            }}
          />
        );
      } catch (error) {
        console.log(error);
      }
    } else return showPokeDex(param);
  };

  const searchAbilities = (el, param) => {
    if (param === "") return setFilteredResults(el);
    try {
      const res = el.filter((item) =>
        item.identifier.includes(param.replaceAll(" ", "-").toLowerCase())
      );
      return setFilteredResults(res);
    } catch (error) {
      console.log(error);
    }
  };

  const onSearchTermSubmit = () => {
    searchAbilities(abilityData, searchTerm.replaceAll(" ", "-").toLowerCase());
  };

  useEffect(() => {
    searchAbilities(abilityData, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (abilityResults !== null && abilityResults !== undefined) {
      return navigation.navigate("AbilityDetailModal", {
        results: abilityResults,
        navigation: navigation,
      });
    }
  }, [abilityResults]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBar
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            onSearchTermSubmit={onSearchTermSubmit}
            variant={"Ability"}
          />
        </View>
        <View style={styles.dexContainer}>
          {displayFilteredResults(filteredResults, searchParam)}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(AbilitySearchScreen);
