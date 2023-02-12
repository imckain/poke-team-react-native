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
import SearchBar from "../../Navigators/SearchBar/index";
import PokedexCard from "../../Pokedex/PokedexCard";
import moveData from "../../../data/moves.json";
import { useMoveResults } from "../../../hooks/useMoveResults";

type Props = {
  navigation: any;
};

const MoveSearchScreen = ({ navigation }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [moveSearchApi, moveResults] = useMoveResults();
  const [searchParam, setSearchParam] = useState("move");
  const [filteredResults, setFilteredResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("all");
  const [params, setParams] = useState([
    { label: "All Move Types", value: "all" },
    { label: "Normal", value: "1" },
    { label: "Fighting", value: "2" },
    { label: "Flying", value: "3" },
    { label: "Poison", value: "4" },
    { label: "Ground", value: "5" },
    { label: "Rock", value: "6" },
    { label: "Bug", value: "7" },
    { label: "Steel", value: "9" },
    { label: "Fire", value: "10" },
    { label: "Water", value: "11" },
    { label: "Grass", value: "12" },
    { label: "Electric", value: "13" },
    { label: "Psychic", value: "14" },
    { label: "Ice", value: "15" },
    { label: "Dragon", value: "16" },
    { label: "Dark", value: "17" },
    { label: "Fairy", value: "18" },
  ]);

  useEffect(() => {
    if (moveResults !== null && moveResults !== undefined) {
      return navigation.navigate("MoveDetailModal", {
        results: moveResults,
        navigation: navigation,
      });
    }
  }, [moveResults]);

  const showPokeDex = (el, param) => {
    if (param === "move") {
      return (
        <FlatList
          horizontal={false}
          data={el}
          keyExtractor={(item) => item.identifier}
          renderItem={({ item }) => {
            let resName;
            if (moveResults !== null) {
              resName = moveResults[0].name.replaceAll(" ", "-");
            }
            return (
              <TouchableOpacity
                onPress={() => {
                  moveSearchApi(item.identifier);
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
              let resName;
              if (moveResults !== null) {
                resName = moveResults[0].name.replaceAll(" ", "-");
              }
              return (
                <TouchableOpacity
                  onPress={() => {
                    moveSearchApi(item.identifier);
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
    } else return showPokeDex(el, param);
  };

  const searchMoves = (el, param) => {
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

  const showType = (el, param) => {
    if (param === "all") return el;
    return el.filter((item) => item.type_id === param);
  };

  useEffect(() => {
    searchMoves(moveData, searchTerm);
  }, [searchTerm]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBar
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            onSearchTermSubmit={() => {
              searchMoves(
                moveData,
                searchTerm.replaceAll(" ", "-").toLowerCase()
              );
            }}
            variant="Move"
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
        />
        <View style={styles.dexContainer}>
          {displayFilteredResults(
            showType(filteredResults, value),
            searchParam
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(MoveSearchScreen);
