import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { checkType } from "../../../functions/checkType";

type Props = {
  results: any;
  margin: number;
  detailFontSize: number;
};

const TypeShowOnCard = ({ results, margin, detailFontSize }: Props) => {
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
    <View style={[styles.typeContainer, { marginBottom: margin }]}>
      {showType(results)}
    </View>
  );
};

export default TypeShowOnCard;
