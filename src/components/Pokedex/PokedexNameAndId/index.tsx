import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  results: any;
  fontSize: number;
  numFontSize: number;
};

const PokedexNameAndId = ({ results, fontSize, numFontSize }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.id, { fontSize: numFontSize }]}>{results.id}</Text>
      <View style={styles.labelContainer}>
        <View style={styles.nameContainer}>
          <Text
            allowFontScaling={false}
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            style={[styles.name, { fontSize: fontSize }]}
          >
            {results.identifier.replaceAll("-", " ")}
          </Text>
        </View>
        <Ionicons
          name="ios-chevron-forward-sharp"
          size={18}
          color="rgba(105, 105, 105, 0.6)"
        />
      </View>
    </View>
  );
};

export default React.memo(PokedexNameAndId);
