import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  results: any;
};

const MoveEffect = ({ results }: Props) => {
  const checkLanguage = (el) => {
    if (el.effect_entries[0] === null) return "N/A";
    if (el.effect_entries[0] !== undefined) {
      const filter = el.effect_entries.filter(
        (item) => item.language.name === "en"
      );
      return filter[0].short_effect.replaceAll(
        "$effect_chance",
        el.effect_chance
      );
    }
    if (el.effect_entries[0] === undefined) {
      if (el.flavor_text_entries[0] === null) {
        const filter = el.flavor_text_entries.filter(
          (item) => item.language.name === "en"
        );
        return filter[0].flavor_text.replaceAll(
          "$effect_chance",
          el.effect_chance
        );
      } else return "Description not available";
    }
  };

  return (
    <View style={styles.nameView}>
      <Text allowFontScaling={false} style={styles.subHeaderText}>
        Effect:
      </Text>
      <Text allowFontScaling={false} style={[styles.effect]}>
        {checkLanguage(results)}
      </Text>
    </View>
  );
};

export default MoveEffect;
