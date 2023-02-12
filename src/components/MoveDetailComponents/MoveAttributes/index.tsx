import React from "react";
import { FlexAlignType, Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  results: any;
  fontSize: number;
  alignSelf: "auto" | FlexAlignType | undefined;
};

const MoveAttributes = ({ results, fontSize, alignSelf }: Props) => {
  const checkForNull = (el) => {
    if (el === null) return "N/A";
    else return el;
  };

  return (
    <View style={[styles.container, { alignSelf: alignSelf }]}>
      <Text
        allowFontScaling={false}
        style={[styles.attributes, { fontSize: fontSize }]}
      >
        Power:{" "}
        <Text style={styles.attributeResult}>
          {checkForNull(results.power)}
        </Text>{" "}
        | PP:{" "}
        <Text style={styles.attributeResult}>{checkForNull(results.pp)}</Text> |
        Acc:{" "}
        <Text style={styles.attributeResult}>
          {checkForNull(results.accuracy)}
        </Text>
      </Text>
    </View>
  );
};

export default React.memo(MoveAttributes);
