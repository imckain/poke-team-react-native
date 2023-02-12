import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { checkType } from "../../../functions/checkType";

type Props = {
  results: any;
  fontSize: number;
  detailFontSize: number;
  lines?: number;
};

const PokedexMove = ({ results, fontSize, detailFontSize, lines }: Props) => {
  const checkForNull = (el) => {
    if (el === null) return "N/A";
    else return el;
  };

  const showTypeName = (el) => {
    return el === 1
      ? "normal"
      : el === 2
      ? "fighting"
      : el === 3
      ? "flying"
      : el === 4
      ? "poison"
      : el === 5
      ? "ground"
      : el === 6
      ? "rock"
      : el === 7
      ? "bug"
      : el === 8
      ? "ghost"
      : el === 9
      ? "steel"
      : el === 10
      ? "fire"
      : el === 11
      ? "water"
      : el === 12
      ? "grass"
      : el === 13
      ? "electric"
      : el === 14
      ? "psychic"
      : el === 15
      ? "ice"
      : el === 16
      ? "dragon"
      : el === 17
      ? "dark"
      : el === 18
      ? "fairy"
      : null;
  };

  return (
    <View style={styles.infoContainer}>
      <View style={[styles.moveInfo]}>
        <View style={styles.subInfo}>
          <Text
            allowFontScaling={false}
            numberOfLines={lines}
            adjustsFontSizeToFit={true}
            style={[styles.name, { fontSize: fontSize }]}
          >
            {results.identifier.replaceAll("-", " ")}
          </Text>
          <View
            style={[
              styles.typeBox,
              { backgroundColor: checkType(results.type_id) },
            ]}
          >
            <Text
              allowFontScaling={false}
              numberOfLines={lines}
              adjustsFontSizeToFit={true}
              style={[styles.typeText, { fontSize: detailFontSize }]}
            >
              {showTypeName(results.type_id)}
            </Text>
          </View>
        </View>
        <Text allowFontScaling={false} style={styles.attributes}>
          Power: {checkForNull(results.power)} | PP: {checkForNull(results.pp)}{" "}
          | Acc: {checkForNull(results.accuracy)}
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

export default React.memo(PokedexMove);
