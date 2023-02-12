import React from "react";
import { FlexAlignType, Text, View } from "react-native";
import { checkType } from "../../../functions/checkType";
import { styles } from "./styles";

type Props = {
  results: any;
  fontSize: number;
  alignSelf: "auto" | FlexAlignType | undefined;
  param: string;
  lines?: number;
  typeFontSize?: number;
  attributeFontSize: number;
  textAlign?: "center" | "auto" | "left" | "right" | "justify";
};

const MoveNameAndClass = ({
  results,
  fontSize,
  alignSelf,
  param,
  lines,
  typeFontSize,
  attributeFontSize,
  textAlign,
}: Props) => {
  const isValid = (el) => {
    if (el.damage_class === null) {
      return "N/A";
    } else return el.damage_class.name;
  };

  const showType = (el) => {
    return el === "card" ? (
      <View
        style={[
          styles.typeBox,
          { backgroundColor: checkType(results.type.name) },
        ]}
      >
        <Text
          allowFontScaling={false}
          style={[styles.typeText, { fontSize: typeFontSize }]}
        >
          {results.type.name}
        </Text>
      </View>
    ) : null;
  };

  const showAttribute = (el) => {
    return el === "modal" ? (
      <Text
        allowFontScaling={false}
        style={[
          styles.damageClass,
          { alignSelf: alignSelf, fontSize: attributeFontSize },
        ]}
      >
        Damage Class:{" "}
        <Text style={[styles.damageClassSub, { fontSize: attributeFontSize }]}>
          {isValid(results)}
        </Text>
      </Text>
    ) : null;
  };

  return (
    <View style={[styles.dmgClassView, { alignSelf: alignSelf }]}>
      <View style={[styles.nameContainer, { alignSelf: alignSelf }]}>
        <Text
          allowFontScaling={false}
          adjustsFontSizeToFit={true}
          numberOfLines={lines}
          style={[
            styles.name,
            { fontSize: fontSize, alignSelf: alignSelf, textAlign: textAlign },
          ]}
        >
          {results.name}
        </Text>
        {showType(param)}
      </View>
      {showAttribute(param)}
    </View>
  );
};

export default MoveNameAndClass;
