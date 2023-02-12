import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  results: any;
  fontSize: number;
};

const PokedexAbility = ({ results, fontSize }: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "baseline" }}>
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
        style={{}}
        name="ios-chevron-forward-sharp"
        size={18}
        color="rgba(105, 105, 105, 0.6)"
      />
    </View>
  );
};

export default React.memo(PokedexAbility);
