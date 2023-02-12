import React, { useCallback, useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import { styles } from "./styles";
import { useGetResultsFromUrl } from "../../../hooks/useGetResultsFromUrl";
import { Entypo } from "@expo/vector-icons";

type Props = {
  results: any;
  navigation: any;
};

const MovePokemon = ({ results, navigation }: Props) => {
  const [pokemonCollapsed, setPokemonCollapsed] = useState(true);
  const [getResultsFromUrl, urlResults] = useGetResultsFromUrl();

  const checkForPokemonCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <TouchableOpacity
          style={styles.headerWrapper}
          onPress={() => setPokemonCollapsed(false)}
        >
          <Text allowFontScaling={false} style={[styles.headerText]}>
            Learned By:
          </Text>
          <Entypo name="plus" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      );
    }
    if (el === false) {
      return (
        <TouchableOpacity
          style={styles.headerWrapper}
          onPress={() => setPokemonCollapsed(true)}
        >
          <Text allowFontScaling={false} style={[styles.headerText]}>
            Learned By:
          </Text>
          <Entypo name="minus" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      );
    }
  }, []);

  const createPokemonBox = (el) => {
    if (el.learned_by_pokemon[0] !== null) {
      const pokemonBox = el.learned_by_pokemon.map((item) => {
        return (
          <View key={item.name} style={styles.textBox}>
            <TouchableOpacity
              onPress={() => {
                getResultsFromUrl(item.url);
              }}
            >
              <Text allowFontScaling={false} style={[styles.text]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        );
      });
      return pokemonBox;
    } else return null;
  };

  useEffect(() => {
    if (urlResults !== null && urlResults !== undefined) {
      return navigation.navigate("SecondaryDetailModal", {
        results: urlResults,
      });
    }
  }, [urlResults]);

  return (
    <View style={[styles.container]}>
      {checkForPokemonCollapse(pokemonCollapsed)}
      <Collapsible collapsed={pokemonCollapsed}>
        <View style={styles.scrollViewStyle}>{createPokemonBox(results)}</View>
      </Collapsible>
    </View>
  );
};

export default MovePokemon;
