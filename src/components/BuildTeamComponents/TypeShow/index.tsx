import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { checkType } from "../../../functions/checkType";

type Props = {
  results: any;
  margin?: number;
  detailFontSize?: number;
  flexDirection?: "column" | "row" | "row-reverse" | "column-reverse";
};

const TypeShow = ({
  results,
  margin,
  detailFontSize,
  flexDirection,
}: Props) => {
  const showType = (el) => {
    const typeBox = el.types.map((item) => {
      return (
        <View
          key={item.type.name}
          style={[
            styles.typeBox,
            { backgroundColor: checkType(item.type.name) },
          ]}
        >
          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            style={[styles.typeText, { fontSize: detailFontSize }]}
          >
            {item.type.name}
          </Text>
        </View>
      );
    });
    return typeBox;
  };

  return (
    <View
      style={[
        styles.typeContainer,
        { marginBottom: margin, flexDirection: flexDirection },
      ]}
    >
      {showType(results)}
    </View>
  );
};

export default TypeShow;
