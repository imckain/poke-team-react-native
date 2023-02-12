import React from "react";
import { FlexAlignType, Text, View } from "react-native";
import { styles } from "./styles";
import { checkType } from "../../../functions/checkType";

type Props = {
  results: any;
  alignSelf: "auto" | FlexAlignType | undefined;
  fontSize: number;
};

const TypeName = ({ results, alignSelf, fontSize }: Props) => {
  const isValid = (el) => {
    if (el.move_damage_class === null) {
      return "N/A";
    } else return el.move_damage_class.name;
  };

  return (
    <View style={[styles.dmgClassView, { alignSelf: alignSelf }]}>
      <View
        style={[
          styles.typeBox,
          { alignSelf: alignSelf, backgroundColor: checkType(results.name) },
        ]}
      >
        <Text
          allowFontScaling={false}
          style={[
            styles.typeText,
            { fontSize: fontSize, alignSelf: alignSelf },
          ]}
        >
          {results.name}
        </Text>
      </View>
      <Text allowFontScaling={false} style={[styles.damageClass]}>
        Damage Class:{" "}
        <Text style={styles.damageClassSub}>{isValid(results)}</Text>
      </Text>
    </View>
  );
};

export default TypeName;
