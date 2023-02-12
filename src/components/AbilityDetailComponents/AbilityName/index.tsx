import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  results: any;
  alignSelf?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  fontSize: number;
};

const AbilityName = ({ results, alignSelf, fontSize }: Props) => {
  return (
    <View>
      <Text
        allowFontScaling={false}
        style={[styles.name, { alignSelf: alignSelf, fontSize: fontSize }]}
      >
        {results.name}
      </Text>
    </View>
  );
};

export default AbilityName;
