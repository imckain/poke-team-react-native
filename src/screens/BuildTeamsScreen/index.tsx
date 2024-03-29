import React, { useState, useContext, useCallback, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import { Context as TeamsContext } from "../../context/TeamContext";
import uuid from "react-native-uuid";
import BuildTeamSearchBar from "../../components/BuildTeamComponents/BuildTeamsSearchBar";
import { useBuildResults } from "../../hooks/useBuildResults";
import AddPokemonButton from "../../components/BuildTeamComponents/AddPokemon";
import pokemonData from "../../data/pokemon.json";
import PokedexCard from "../../components/Pokedex/PokedexCard";
import { Ionicons } from "@expo/vector-icons";
import PokemonBuildCard from "../../components/BuildTeamComponents/PokemonBuildCard";
import ShowBuildResult from "../../components/ResultsCards/ShowBuildResults";

const BuildTeamsScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [teamName, setTeamName] = useState("");
  const [buildSearchApi, buildResults] = useBuildResults();
  const [teamMembers, setTeamMembers] = useState([]);
  const [filteredResults, setFilteredResults] = useState();
  const [searchParam, setSearchParam] = useState("pokemon");

  const { addTeam } = useContext(TeamsContext);

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
                onPress={async () => {
                  setSearchTerm(item.identifier);
                  await buildSearchApi(item.identifier);
                }}
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
                  onPress={async () => {
                    setSearchTerm(item.identifier);
                    const returnObject = await buildSearchApi(item.identifier);
                    return returnObject;
                  }}
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
      const res = el.filter((item) =>
        item.identifier.includes(param.replaceAll(" ", "-").toLowerCase())
      );
      return setFilteredResults(res);
    } catch (error) {
      console.log(error);
    }
  };

  const showPokemonCard = (param: string) => {
    if (param !== "") {
      return (
        <FlatList
          scrollEnabled={false}
          data={buildResults}
          style={{ height: "auto" }}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            const showAddButton = (el) => {
              return teamMembers.length < 6 ? (
                <TouchableOpacity
                  onPress={() => setTeamMembers([...teamMembers].concat(el))}
                >
                  <AddPokemonButton name={el.name} width={"90%"} height={40} />
                </TouchableOpacity>
              ) : null;
            };
            return (
              <View style={styles.addMonCard}>
                <TouchableOpacity
                  style={{}}
                  onPress={() =>
                    props.navigation.navigate("DetailModal", {
                      results: [item],
                    })
                  }
                >
                  <ShowBuildResult results={item} />
                </TouchableOpacity>
                {showAddButton(item)}
              </View>
            );
          }}
        />
      );
    } else return null;
  };

  const addTeamAndGoBack = useCallback(async (name, content) => {
    if (teamMembers[0] !== null) {
      await addTeam(name, content);
      return props.navigation.navigate("TeamsTab", { results: content });
    } else return props.navigation.navigate("TeamsTab");
  }, []);

  const showClear = (el, term) => {
    if (el !== null || term !== "") {
      return (
        <TouchableOpacity
          onPress={async () => {
            await buildSearchApi("");
            setSearchTerm("");
          }}
          style={styles.clear}
        >
          <Ionicons name="ios-close-circle" size={18} color="rgb(75, 75, 75)" />
        </TouchableOpacity>
      );
    } else return null;
  };

  const createTeamMember = (el) => {
    return el.map((item) => {
      const id = uuid.v4().toString();
      return (
        <View key={id} style={styles.wrapper}>
          <TouchableOpacity
            style={{ width: "80%" }}
            onPress={() =>
              props.navigation.navigate("DetailModal", { results: [item] })
            }
          >
            <PokemonBuildCard results={item} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rightAction}
            onPress={() => deleteTeamMember(item)}
          >
            <Ionicons name="ios-remove-circle" size={16} color="#ff0000" />
          </TouchableOpacity>
        </View>
      );
    });
  };

  const deleteTeamMember = (el) => {
    const arr = [...teamMembers];
    const idx = teamMembers.indexOf(el);
    if (idx !== -1) {
      arr.splice(idx, 1);
      setTeamMembers(arr);
    }
  };

  const showSave = (name, items) => {
    if (name.length !== 0 && items.length !== 0) {
      return (
        <TouchableOpacity
          style={styles.save}
          onPress={() => addTeamAndGoBack(teamName, teamMembers)}
        >
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={[styles.save, { backgroundColor: "rgba(105, 105, 105, 0.6)" }]}
        >
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      );
    }
  };

  useEffect(() => {
    searchPokemon(pokemonData, searchTerm);
  }, [searchTerm]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => props.navigation.goBack(null)}
          >
            <Ionicons name="ios-chevron-back-outline" size={32} color="#fff" />
            <Text allowFontScaling={false} style={styles.backText}>
              Back
            </Text>
          </TouchableOpacity>
          {showSave(teamName, teamMembers)}
        </View>
        <View style={styles.teamNameContainer}>
          <TextInput
            placeholder={"Team Name"}
            showSoftInputOnFocus={false}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle}
            placeholderTextColor="rgba(105, 105, 105, 0.6)"
            value={teamName}
            onChangeText={(text) => setTeamName(text)}
            clearButtonMode="never"
            keyboardAppearance="dark"
            returnKeyType={"done"}
            allowFontScaling={false}
            maxLength={14}
            numberOfLines={1}
          />
        </View>
        <View style={styles.searchBarContainer}>
          <BuildTeamSearchBar
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            onSearchTermSubmit={() =>
              buildSearchApi(searchTerm.replaceAll(" ", "-").toLowerCase())
            }
          />
          {showClear(buildResults, searchTerm)}
        </View>
        <View style={{ height: "auto" }}>{showPokemonCard(searchTerm)}</View>
        <View style={styles.teamInfoContainer}>
          <View style={styles.teamSlotContainer}>
            {createTeamMember(teamMembers)}
          </View>
          <View style={styles.dexContainer}>
            {displayFilteredResults(filteredResults, searchParam)}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(BuildTeamsScreen);
