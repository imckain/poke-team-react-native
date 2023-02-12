import React, { useCallback, useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import { styles } from "./styles";
import { useGetResultsFromUrl } from "../../../hooks/useGetResultsFromUrl";
import FilterMoveSearchBar from "../FilterMoveSearchBar";
import { Entypo } from "@expo/vector-icons";

type Props = {
  results: any;
  navigation: any;
  margin: number;
};

const SecondaryMovesDetail = ({ results, navigation, margin }: Props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [getResultsFromUrl, urlResults] = useGetResultsFromUrl();

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <TouchableOpacity
          style={styles.headerWrapper}
          onPress={() => setCollapsed(false)}
        >
          <Text allowFontScaling={false} style={[styles.headerText]}>
            Moves
          </Text>
          <Entypo name="plus" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      );
    }
    if (el === false) {
      return (
        <TouchableOpacity
          style={styles.headerWrapper}
          onPress={() => setCollapsed(true)}
        >
          <Text allowFontScaling={false} style={[styles.headerText]}>
            Moves
          </Text>
          <Entypo name="minus" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      );
    }
  }, []);

  const createMoveTextBox = (el) => {
    const moveBox = []
      .concat(el.moves)
      .sort((a, b) =>
        a.version_group_details[0].level_learned_at <
        b.version_group_details[0].level_learned_at
          ? 1
          : -1
      )
      .map((item, i) => {
        return (
          <View key={i} style={styles.moveTextBox}>
            <TouchableOpacity
              onPress={() => {
                getResultsFromUrl(item.move.url);
              }}
            >
              <Text
                allowFontScaling={false}
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={[styles.moveText]}
              >
                {item.move.name}
              </Text>
            </TouchableOpacity>
            <Text style={styles.moveDetailText}>
              Level Learned: {item.version_group_details[0].level_learned_at}
            </Text>
            <Text style={styles.moveDetailText}>
              Method: {item.version_group_details[0].move_learn_method.name}
            </Text>
          </View>
        );
      });
    return moveBox;
  };

  const displayFilteredResults = (el) => {
    if (searchTerm !== "") {
      try {
        const moveBox = el.map((item) => {
          return (
            <View key={item.move.name} style={styles.moveTextBox}>
              <TouchableOpacity
                onPress={() => {
                  getResultsFromUrl(item.move.url);
                }}
              >
                <Text
                  allowFontScaling={false}
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}
                  style={[styles.moveText]}
                >
                  {item.move.name}
                </Text>
              </TouchableOpacity>
              <Text style={styles.moveDetailText}>
                Level Learned: {item.version_group_details[0].level_learned_at}
              </Text>
              <Text style={styles.moveDetailText}>
                Method: {item.version_group_details[0].move_learn_method.name}
              </Text>
            </View>
          );
        });
        return moveBox;
      } catch (error) {
        console.log(error);
      }
    } else return createMoveTextBox(results);
  };

  const searchMoves = (el, param) => {
    if (param === "") return setFilteredResults(el);
    try {
      const res = el.moves.filter((item) =>
        item.move.name.includes(param.replaceAll(" ", "-").toLowerCase())
      );
      const sorted = []
        .concat(res)
        .sort((a, b) =>
          a.version_group_details[0].level_learned_at <
          b.version_group_details[0].level_learned_at
            ? 1
            : -1
        );
      return setFilteredResults(sorted);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchMoves(results, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (urlResults !== null && urlResults !== undefined) {
      return navigation.navigate("MoveDetailModal", {
        results: urlResults,
      });
    }
  }, [urlResults]);

  return (
    <View style={[styles.container, { marginBottom: margin }]}>
      {checkForCollapse(collapsed)}
      <Collapsible collapsed={collapsed}>
        <View style={styles.searchBarContainer}>
          <FilterMoveSearchBar
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            onSearchTermSubmit={() =>
              searchMoves(results, searchTerm.replaceAll(" ", "-"))
            }
          />
        </View>
        <View style={styles.scrollViewStyle}>
          {displayFilteredResults(filteredResults)}
        </View>
      </Collapsible>
    </View>
  );
};

export default React.memo(SecondaryMovesDetail);
