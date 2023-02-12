import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./styles";
import PokemonSearchScreen from "../../components/AdvancedSearchScreens/PokemonSearchScreen";
import TypeSearchScreen from "../../components/AdvancedSearchScreens/TypeSearchScreen";
import MoveSearchScreen from "../../components/AdvancedSearchScreens/MoveSearchScreen";
import AbilitySearchScreen from "../../components/AdvancedSearchScreens/AbilitySearchScreen";

const AdvancedSearchScreen = (props) => {
  const [searchParam, setSearchParam] = useState("pokemon");

  const searchSelection = (param) => {
    if (param === "pokemon") {
      return <PokemonSearchScreen navigation={props.navigation} />;
    }
    if (param === "type") {
      return <TypeSearchScreen navigation={props.navigation} />;
    }
    if (param === "move") {
      return <MoveSearchScreen navigation={props.navigation} />;
    }
    if (param === "ability") {
      return <AbilitySearchScreen navigation={props.navigation} />;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.searchParamsContainter}>
          <TouchableOpacity onPress={() => setSearchParam("pokemon")}>
            <View>
              <Text
                allowFontScaling={false}
                style={[
                  searchParam === "pokemon"
                    ? styles.activeSearchParamText
                    : styles.inactiveSearchParamText,
                ]}
              >
                Pokemon
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSearchParam("type")}>
            <View>
              <Text
                allowFontScaling={false}
                style={[
                  searchParam === "type"
                    ? styles.activeSearchParamText
                    : styles.inactiveSearchParamText,
                ]}
              >
                Type
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSearchParam("move")}>
            <View>
              <Text
                allowFontScaling={false}
                style={[
                  searchParam === "move"
                    ? styles.activeSearchParamText
                    : styles.inactiveSearchParamText,
                ]}
              >
                Move
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSearchParam("ability")}>
            <View>
              <Text
                allowFontScaling={false}
                style={[
                  searchParam === "ability"
                    ? styles.activeSearchParamText
                    : styles.inactiveSearchParamText,
                ]}
              >
                Ability
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {searchSelection(searchParam)}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(AdvancedSearchScreen);
