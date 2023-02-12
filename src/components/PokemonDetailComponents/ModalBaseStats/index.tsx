import React, { useState, useCallback } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";

type Props = {
  results: any;
  detailFontSize: number;
  headerFontSize: number;
  margin: number;
};

const ModalBaseStats = ({
  results,
  headerFontSize,
  detailFontSize,
  margin,
}: Props) => {
  const [collapsed, setCollapsed] = useState(true);

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <TouchableOpacity
          style={styles.headerWrapper}
          onPress={() => setCollapsed(false)}
        >
          <Text
            allowFontScaling={false}
            style={[styles.baseStatHeaderText, { fontSize: headerFontSize }]}
          >
            Base Stats
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
            style={[styles.baseStatHeaderText, { fontSize: headerFontSize }]}
          >
            Base Stats
          </Text>
          <Entypo name="minus" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      );
    }
  }, []);

  return (
    <View style={[styles.container, { marginBottom: margin }]}>
      {checkForCollapse(collapsed)}
      <View style={styles.infoContainer}>
        <Collapsible style={{ paddingBottom: 12 }} collapsed={collapsed}>
          <View style={styles.baseStatContainer}>
            <Text
              allowFontScaling={false}
              style={[styles.baseStatNameText, { fontSize: detailFontSize }]}
            >
              {results.stats[0].stat.name}:
            </Text>
            <Text
              allowFontScaling={false}
              style={[styles.baseStatText, { fontSize: detailFontSize }]}
            >
              {results.stats[0].base_stat}
            </Text>
          </View>
          <View style={styles.baseStatContainer}>
            <Text
              allowFontScaling={false}
              style={[styles.baseStatNameText, { fontSize: detailFontSize }]}
            >
              {results.stats[1].stat.name}:
            </Text>
            <Text
              allowFontScaling={false}
              style={[styles.baseStatText, { fontSize: detailFontSize }]}
            >
              {results.stats[1].base_stat}
            </Text>
          </View>
          <View style={styles.baseStatContainer}>
            <Text
              allowFontScaling={false}
              style={[styles.baseStatNameText, { fontSize: detailFontSize }]}
            >
              {results.stats[2].stat.name}:
            </Text>
            <Text
              allowFontScaling={false}
              style={[styles.baseStatText, { fontSize: detailFontSize }]}
            >
              {results.stats[2].base_stat}
            </Text>
          </View>
          <View style={styles.baseStatContainer}>
            <Text
              allowFontScaling={false}
              style={[styles.baseStatNameText, { fontSize: detailFontSize }]}
            >
              {results.stats[3].stat.name.replace("special-", "Sp ")}:
            </Text>
            <Text
              allowFontScaling={false}
              style={[styles.baseStatText, { fontSize: detailFontSize }]}
            >
              {results.stats[3].base_stat}
            </Text>
          </View>
          <View style={styles.baseStatContainer}>
            <Text
              allowFontScaling={false}
              style={[styles.baseStatNameText, { fontSize: detailFontSize }]}
            >
              {results.stats[4].stat.name.replace("special-", "Sp ")}:
            </Text>
            <Text
              allowFontScaling={false}
              style={[styles.baseStatText, { fontSize: detailFontSize }]}
            >
              {results.stats[4].base_stat}
            </Text>
          </View>
          <View style={styles.baseStatContainer}>
            <Text
              allowFontScaling={false}
              style={[styles.baseStatNameText, { fontSize: detailFontSize }]}
            >
              {results.stats[5].stat.name}:
            </Text>
            <Text
              allowFontScaling={false}
              style={[styles.baseStatText, { fontSize: detailFontSize }]}
            >
              {results.stats[5].base_stat}
            </Text>
          </View>
        </Collapsible>
      </View>
    </View>
  );
};

export default ModalBaseStats;
