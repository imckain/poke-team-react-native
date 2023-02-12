import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { styles } from "./styles";
import { useTypeResults } from "../../../hooks/useTypeResults";
import PokedexCard from "../../Pokedex/PokedexCard";
import typeData from "../../../data/type.json";

type Props = {
  navigation: any;
};

const TypeSearchScreen = ({ navigation }: Props) => {
  const [typeSearchApi, typeResults] = useTypeResults();
  const [searchParam, setSearchParam] = useState("type");

  const showPokeDex = (param) => {
    if (param === "type") {
      return (
        <FlatList
          horizontal={false}
          data={typeData}
          keyExtractor={(item) => item.identifier}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  typeSearchApi(item.identifier);
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

  useEffect(() => {
    if (typeResults !== null && typeResults !== undefined) {
      return navigation.navigate("TypeDetailModal", {
        results: typeResults,
        navigation: navigation,
      });
    }
  }, [typeResults]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.pokedexCardContainer}>
          {showPokeDex(searchParam)}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(TypeSearchScreen);
