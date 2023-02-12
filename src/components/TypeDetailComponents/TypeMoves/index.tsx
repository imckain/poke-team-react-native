import React, { useCallback, useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import { styles } from "./styles";
import { useGetResultsFromUrl } from "../../../hooks/useGetResultsFromUrl";
import { Entypo } from "@expo/vector-icons";
import { checkType } from "../../../functions/checkType";

type Props = {
  results: any;
  navigation: any;
};

const TypeMoves = ({ results, navigation }: Props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [getResultsFromUrl, urlResults] = useGetResultsFromUrl();

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <TouchableOpacity
          style={styles.headerWrapper}
          onPress={() => setCollapsed(false)}
        >
          <Text allowFontScaling={false} style={[styles.headerText]}>
            Moves
          </Text>
          <Entypo name="plus" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      );
    }
    if (el === false) {
      return (
        <TouchableOpacity
          style={styles.headerWrapper}
          onPress={() => setCollapsed(true)}
        >
          <Text allowFontScaling={false} style={[styles.headerText]}>
            Moves
          </Text>
          <Entypo name="minus" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      );
    }
  }, []);

  const createMoveTextBox = (el) => {
    const moveBox = el.moves.map((item) => {
      return (
        <View
          key={item.name}
          style={[
            styles.moveTextBox,
            { backgroundColor: checkType(results.name) },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              getResultsFromUrl(item.url);
            }}
          >
            <Text allowFontScaling={false} style={[styles.moveText]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
    return moveBox;
  };

  useEffect(() => {
    if (urlResults !== null && urlResults !== undefined) {
      return navigation.navigate("MoveDetailModal", {
        results: urlResults,
      });
    }
  }, [urlResults]);

  return (
    <View style={[styles.container]}>
      {checkForCollapse(collapsed)}
      <Collapsible collapsed={collapsed}>
        <View style={styles.scrollViewStyle}>{createMoveTextBox(results)}</View>
      </Collapsible>
    </View>
  );
};

export default TypeMoves;
