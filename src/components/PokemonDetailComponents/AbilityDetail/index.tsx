import React, { useCallback, useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import { styles } from "./styles";
import { useGetResultsFromUrl } from "../../../hooks/useGetResultsFromUrl";

import { Entypo } from "@expo/vector-icons";

type Props = {
  results: any;
  navigation: any;
  detailFontSize: number;
  headerFontSize: number;
  margin: number;
};

const AbilityDetail = ({
  results,
  margin,
  headerFontSize,
  detailFontSize,
  navigation,
}: Props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [getResultsFromUrl, urlResults] = useGetResultsFromUrl();

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <TouchableOpacity
          style={styles.headerWrapper}
          onPress={() => setCollapsed(false)}
        >
          <Text
            allowFontScaling={false}
            style={[styles.headerText, { fontSize: headerFontSize }]}
          >
            Abilities
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
          <Text
            allowFontScaling={false}
            style={[styles.headerText, { fontSize: headerFontSize }]}
          >
            Abilities
          </Text>
          <Entypo name="minus" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      );
    }
  }, []);

  const showAbilities = (el) => {
    const abilityBox = el.abilities.map((item) => {
      return (
        <View key={item.ability.name} style={styles.abilityBox}>
          <TouchableOpacity
            onPress={() => {
              getResultsFromUrl(item.ability.url);
            }}
          >
            <Text
              allowFontScaling={false}
              style={[styles.abilityText, { fontSize: detailFontSize }]}
            >
              {item.ability.name}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });

    return abilityBox;
  };

  useEffect(() => {
    if (urlResults !== null && urlResults !== undefined) {
      return navigation.navigate("AbilityDetailModal", {
        results: urlResults,
      });
    }
  }, [urlResults]);

  return (
    <View style={[styles.container, { marginBottom: margin }]}>
      {checkForCollapse(collapsed)}
      <Collapsible style={styles.collapsibleContainer} collapsed={collapsed}>
        {showAbilities(results)}
      </Collapsible>
    </View>
  );
};

export default React.memo(AbilityDetail);
