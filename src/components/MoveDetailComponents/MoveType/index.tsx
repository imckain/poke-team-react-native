import React, { useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useGetResultsFromUrl } from "../../../hooks/useGetResultsFromUrl";
import { checkType } from "../../../functions/checkType";

type Props = {
  results: any;
  navigation: any;
  detailFontSize: number;
  margin: number;
  flexDirection: "row" | "column" | "row-reverse" | "column-reverse";
};

const MoveType = ({
  results,
  navigation,
  detailFontSize,
  margin,
  flexDirection,
}: Props) => {
  const [getResultsFromUrl, urlResults] = useGetResultsFromUrl();

  const isValid = (el) => {
    if (el.type === null) {
      return "N/A";
    } else return el.type.name;
  };

  const showType = (el) => {
    return (
      <View
        key={el.type.name}
        style={[styles.typeBox, { backgroundColor: checkType(el.type.name) }]}
      >
        <TouchableOpacity
          onPress={() => {
            getResultsFromUrl(el.type.url);
          }}
        >
          <Text
            allowFontScaling={false}
            style={[styles.typeText, { fontSize: detailFontSize }]}
          >
            {isValid(el)}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    if (urlResults !== null && urlResults !== undefined) {
      return navigation.navigate("TypeDetailModal", {
        results: urlResults,
      });
    }
  }, [urlResults]);

  return (
    <View
      style={[
        styles.typeContainer,
        { marginBottom: margin, flexDirection: flexDirection },
      ]}
    >
      <View style={{ flexDirection: "row" }}>{showType(results)}</View>
    </View>
  );
};

export default MoveType;
