import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { checkType } from "../../../functions/checkType";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  results: any;
  fontSize: number;
};

const PokedexType = ({ results, fontSize }: Props) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: checkType(results.identifier) },
      ]}
    >
      <View
        style={[
          styles.typeBox,
          { backgroundColor: checkType(results.identifier) },
        ]}
      >
        <Text
          allowFontScaling={false}
          style={[styles.typeText, { fontSize: fontSize }]}
        >
          {results.identifier.replaceAll("-", " ")}
        </Text>
      </View>
      <Ionicons
        style={styles.icon}
        name="ios-chevron-forward-sharp"
        size={18}
        color="#fff"
      />
    </View>
  );
};

export default React.memo(PokedexType);
