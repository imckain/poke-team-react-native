import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useGetResultsFromUrl } from "../../../hooks/useGetResultsFromUrl";
import { checkType } from "../../../functions/checkType";
import { styles } from "./styles";

type Props = {
  results: any;
  margin: number;
  detailFontSize: number;
  flexDirection?: "column" | "row" | "row-reverse" | "column-reverse";
};

const TypeDetail = ({
  results,
  margin,
  detailFontSize,
  flexDirection,
}: Props) => {
  const [getResultsFromUrl, urlResults] = useGetResultsFromUrl();
  const navigation = useNavigation();

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
          <TouchableOpacity
            onPress={() => {
              getResultsFromUrl(item.type.url);
            }}
          >
            <Text
              allowFontScaling={false}
              adjustsFontSizeToFit={true}
              numberOfLines={1}
              style={[styles.typeText, { fontSize: detailFontSize }]}
            >
              {item.type.name}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });

    return typeBox;
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

export default TypeDetail;
