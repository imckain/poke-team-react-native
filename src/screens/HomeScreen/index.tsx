import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import BuildTeamsNavigator from "../../components/Navigators/Labels/BuildTeamsNavigatorLabel";
import AboutNavigatorLabel from "../../components/Navigators/Labels/AboutNavigatorLabel";
import SearchBar from "../../components/Navigators/SearchBar";
import TeamsNavigator from "../../components/Navigators/Labels/ViewTeamsNavigatorLabel";
import ShowSearchResult from "../../components/ResultsCards/ShowSearchResults";
import { useResults } from "../../hooks/useResults";

const HomeScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchAPI, results] = useResults();

  const showResultCard = (el: any[]) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("DetailModal", { results: el })
        }
      >
        <ShowSearchResult results={el} />
      </TouchableOpacity>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.searchBarContainer}>
          <SearchBar
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            onSearchTermSubmit={() => {
              if (searchTerm.length !== 0) {
                searchAPI(searchTerm.replaceAll(" ", "-").toLowerCase());
              } else return;
            }}
            variant={"Name"}
          />
        </View>
        {showResultCard(results)}
        <View style={styles.largeNavContainer}>
          <TouchableOpacity
            style={styles.largeButtonStyle}
            onPress={() => props.navigation.navigate("TeamsTab")}
          >
            <TeamsNavigator />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.largeButtonStyle}
            onPress={() => props.navigation.navigate("BuildTeam")}
          >
            <BuildTeamsNavigator />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.largeButtonStyle}
            onPress={() => props.navigation.navigate("About")}
          >
            <AboutNavigatorLabel />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
