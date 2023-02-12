import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  results: any;
  fontSize: number;
  lines: number;
  width?: number | string;
};

const PokemonNameAndId = ({ results, fontSize, lines, width }: Props) => {
  return (
    <View style={[styles.nameContainer, { width: width }]}>
      <Text
        adjustsFontSizeToFit={true}
        allowFontScaling={false}
        numberOfLines={lines}
        style={[styles.name, { fontSize: fontSize }]}
      >
        {results.name}
      </Text>
      <Text style={[styles.id]}>{results.id}</Text>
    </View>
  );
};

export default PokemonNameAndId;
