import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";
import { styles } from "./styles";
import SearchBar from "../../Navigators/SearchBar";
import { useAdvancedResults } from "../../../hooks/useAdvancedResults";
import PokedexCard from "../../Pokedex/PokedexCard";
import pokemonData from "../../../data/pokemon.json";

type Props = {
  navigation: any;
};

const PokemonSearchScreen = ({ navigation }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [advancedSearchAPI, advancedResults] = useAdvancedResults();
  const [searchParam, setSearchParam] = useState("pokemon");
  const [filteredResults, setFilteredResults] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("all");
  const [params, setParams] = useState([
    { label: "All Generations", value: "all" },
    { label: "Gen I", value: "1" },
    { label: "Gen II", value: "2" },
    { label: "Gen III", value: "3" },
    { label: "Gen IV", value: "4" },
    { label: "Gen V", value: "5" },
    { label: "Gen VI", value: "6" },
    { label: "Gen VII", value: "7" },
    { label: "Gen VIII", value: "8" },
  ]);

  const showPokeDex = (el, param) => {
    if (param === "pokemon") {
      return (
        <FlatList
          horizontal={false}
          data={el}
          keyExtractor={(item) => item.identifier}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => advancedSearchAPI(item.identifier)}
              >
                <PokedexCard results={item} searchParam={param} />
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
                  onPress={() => advancedSearchAPI(item.identifier)}
                >
                  <PokedexCard results={item} searchParam={param} />
                </TouchableOpacity>
              );
            }}
          />
        );
      } catch (error) {
        console.log(error);
      }
    } else return showPokeDex(el, param);
  };

  const searchPokemon = (el, param) => {
    if (param === "") return setFilteredResults(el);
    try {
      if (isNaN(param) === false) {
        const res = el.filter((item) => item.id == param);
        return setFilteredResults(res);
      } else {
        const res = el.filter((item) =>
          item.identifier.includes(param.replaceAll(" ", "-").toLowerCase())
        );
        return setFilteredResults(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showGeneration = (el, param) => {
    if (param === "all") return el;
    return el.filter((item) => item.generation === param);
  };

  useEffect(() => {
    searchPokemon(pokemonData, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (advancedResults !== null && advancedResults !== undefined) {
      return navigation.navigate("DetailModal", {
        results: advancedResults,
        navigation: navigation,
      });
    }
  }, [advancedResults]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBar
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            onSearchTermSubmit={() => {
              searchPokemon(
                pokemonData,
                searchTerm.replaceAll(" ", "-").toLowerCase()
              );
            }}
            variant={"Name"}
          />
        </View>
        <View style={{ height: 5 }} />
        <DropDownPicker
          open={open}
          value={value}
          items={params}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setParams}
          placeholder="Generations"
          style={styles.dropDownHeader}
          textStyle={{
            color: "#fff",
            fontSize: 24,
            paddingLeft: 2,
            fontWeight: "500",
          }}
          dropDownContainerStyle={styles.dropDown}
          itemSeparator={true}
          listItemLabelStyle={{ fontWeight: "400", fontSize: 24 }}
          selectedItemLabelStyle={{ fontWeight: "600" }}
          closeAfterSelecting={true}
          theme="DARK"
          listMode="FLATLIST"
        />
        <View style={styles.dexContainer}>
          {displayFilteredResults(
            showGeneration(
              filteredResults,
              value !== "all" ? Number(value) : value
            ),
            searchParam
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(PokemonSearchScreen);
