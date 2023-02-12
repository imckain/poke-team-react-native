import React, { useCallback, useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import { Entypo } from "@expo/vector-icons";
import { useGetResultsFromUrl } from "../../../hooks/useGetResultsFromUrl";
import { styles } from "./styles";

declare module "react-native-collapsible" {
  interface CollapsibleProps {
    children?: React.ReactNode;
  }
}

type Props = {
  results: any;
  navigation: any;
};

const AbilityPokemon = ({ results, navigation }: Props) => {
  const [pokemonCollapsed, setPokemonCollapsed] = useState(false);
  const [getResultsFromUrl, urlResults] = useGetResultsFromUrl();

  const checkForPokemonCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <TouchableOpacity
          style={styles.headerWrapper}
          onPress={() => setPokemonCollapsed(false)}
        >
          <Text allowFontScaling={false} style={[styles.headerText]}>
            Pokemon:
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
            Pokemon:
          </Text>
          <Entypo name="minus" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      );
    }
  }, []);

  const createPokemonBox = (el) => {
    const pokemonBox = el.pokemon.map((item) => {
      return (
        <View key={item.pokemon.name} style={styles.textBox}>
          <TouchableOpacity
            onPress={() => {
              getResultsFromUrl(item.pokemon.url);
            }}
          >
            <Text allowFontScaling={false} style={[styles.text]}>
              {item.pokemon.name}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });

    return pokemonBox;
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

export default AbilityPokemon;
