import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import PokedexNameAndId from "../PokedexNameAndId";
import PokedexType from "../PokedexType";
import PokedexMove from "../PokedexMove";
import PokedexAbility from "../PokedexAbility/index";

type Props = {
  results: any;
  searchParam: string | number;
  backgroundColor?: string;
};

const PokedexCard = ({ results, searchParam, backgroundColor }: Props) => {
  const checkDex = (el) => {
    if (el === "pokemon") {
      return (
        <PokedexNameAndId fontSize={24} numFontSize={16} results={results} />
      );
    }
    if (el === "type") {
      return <PokedexType fontSize={24} results={results} />;
    }
    if (el === "move") {
      return (
        <PokedexMove
          fontSize={24}
          lines={1}
          detailFontSize={20}
          results={results}
        />
      );
    }
    if (el === "ability") {
      return <PokedexAbility fontSize={24} results={results} />;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View style={styles.mainInfo}>{checkDex(searchParam)}</View>
    </View>
  );
};

export default React.memo(PokedexCard);
