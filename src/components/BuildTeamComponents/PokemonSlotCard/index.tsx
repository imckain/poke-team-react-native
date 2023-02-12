import React from "react";
import { Text, View } from "react-native";
import FrontSprite from "../../PokemonDetailComponents/Sprites/FrontSprite";
import TypeShow from "../TypeShow";
import { styles } from "./styles";

type Props = {
  results: any;
};

const PokemonSlotCard = ({ results }: Props) => {
  const isValid = (el) => {
    if (el.name !== undefined) {
      return (
        <View style={styles.infoContainer}>
          <FrontSprite width={70} height={70} results={el} />
          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            allowFontScaling={false}
            style={[styles.name]}
          >
            {el.name}
          </Text>
          <TypeShow flexDirection={"column"} results={results} />
        </View>
      );
    } else
      return (
        <Text allowFontScaling={false} style={[styles.emptyName]}>
          Empty Slot
        </Text>
      );
  };

  return <View style={styles.container}>{isValid(results)}</View>;
};

export default React.memo(PokemonSlotCard);
