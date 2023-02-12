import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import BaseStats from "../../PokemonDetailComponents/BaseStats";
import TypeShowOnCard from "../../PokemonDetailComponents/TypeShowOnCard";
import PokemonNameAndId from "../../PokemonDetailComponents/PokemonNameAndId";
import FrontSprite from "../../PokemonDetailComponents/Sprites/FrontSprite";

type Props = {
  results: any;
};

const ShowAdvancedSearchResult = ({ results }: Props) => {
  return (
    <View>
      <View style={styles.container}>
        <PokemonNameAndId lines={1} fontSize={38} results={results} />
        <View style={styles.mainCardContainer}>
          <View style={styles.mainInfo}>
            <FrontSprite width={120} height={120} results={results} />
          </View>
          <View style={styles.detailInfo}>
            <BaseStats detailFontSize={15} results={results} />
            <TypeShowOnCard margin={7} detailFontSize={14} results={results} />
          </View>
        </View>
      </View>
      <Text allowFontScaling={false} style={styles.infoNotice}>
        Tap for more info
      </Text>
    </View>
  );
};

export default React.memo(ShowAdvancedSearchResult);
