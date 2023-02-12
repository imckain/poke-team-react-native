import React from "react";
import { Text, View } from "react-native";
import FrontSprite from "../../PokemonDetailComponents/Sprites/FrontSprite";
import { styles } from "./styles";

type Props = {
  results: any;
};

const PokemonSlotCard = ({ results }: Props) => {
  const isValid = (el) => {
    if (el.name !== undefined) {
      return (
        <View style={styles.infoContainer}>
          <FrontSprite width={60} height={60} results={el} />
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
