import React, { useCallback, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";

type Props = {
  results: any;
};

const MoveMetaData = ({ results }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <TouchableOpacity
          style={styles.headerWrapper}
          onPress={() => setCollapsed(false)}
        >
          <Text allowFontScaling={false} style={[styles.metaDataHeaderText]}>
            Meta Data:
          </Text>
          <Entypo name="plus" size={28} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      );
    }
    if (el === false) {
      return (
        <TouchableOpacity
          style={styles.headerWrapper}
          onPress={() => setCollapsed(true)}
        >
          <Text allowFontScaling={false} style={[styles.metaDataHeaderText]}>
            Meta Data:
          </Text>
          <Entypo name="minus" size={28} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      );
    }
  }, []);

  const checkForNull = (el) => {
    if (el.meta === null) {
      return (
        <Text allowFontScaling={false} style={styles.subHeaderText}>
          Meta Data Not Available
        </Text>
      );
    } else
      return (
        <View style={{ width: "100%" }}>
          <Text allowFontScaling={false} style={styles.subHeaderText}>
            Ailment: {el.meta.ailment.name}
          </Text>
          <View style={styles.metaDataContainer}>
            {checkForCollapse(collapsed)}
            <Collapsible collapsed={collapsed}>
              <View style={styles.scrollViewStyle}>
                <Text allowFontScaling={false} style={styles.descriptionText}>
                  {el.effect_entries[0].effect.replace(
                    "$effect_chance",
                    el.effect_chance
                  )}
                </Text>
                <LinearGradient
                  style={styles.break}
                  colors={["rgba(223, 223, 223, 0.747)", "transparent"]}
                  start={{ x: 0.5, y: 0.5 }}
                  end={{ x: 1.1, y: 0.5 }}
                />
                <Text allowFontScaling={false} style={styles.metaDataText}>
                  Category: {el.meta.category.name}
                </Text>
                <Text allowFontScaling={false} style={styles.metaDataText}>
                  Inflict Chance: {el.meta.ailment_chance}
                </Text>
                <Text allowFontScaling={false} style={styles.metaDataText}>
                  Crit Rate: {el.meta.crit_rate}
                </Text>
                <Text allowFontScaling={false} style={styles.metaDataText}>
                  Drain: {el.meta.drain}
                </Text>
                <Text allowFontScaling={false} style={styles.metaDataText}>
                  Flinch Chance: {el.meta.flinch_chance}
                </Text>
                <Text allowFontScaling={false} style={styles.metaDataText}>
                  Stat Chance: {el.meta.stat_chance}
                </Text>
                <Text allowFontScaling={false} style={styles.metaDataText}>
                  Healing: {el.meta.healing}
                </Text>
                <Text allowFontScaling={false} style={styles.metaDataText}>
                  Max Hit:{" "}
                  {el.meta.max_hits !== null ? el.meta.max_hits : " N/A"}
                </Text>
                <Text allowFontScaling={false} style={styles.metaDataText}>
                  Max Turns:{" "}
                  {el.meta.max_turns !== null ? el.meta.max_turns : " N/A"}
                </Text>
                <Text allowFontScaling={false} style={styles.metaDataText}>
                  Min Hit:{" "}
                  {el.meta.min_hits !== null ? el.meta.min_hits : " N/A"}
                </Text>
                <Text allowFontScaling={false} style={styles.metaDataText}>
                  Min Turns:{" "}
                  {el.meta.min_turns !== null ? el.meta.min_turns : " N/A"}
                </Text>
              </View>
            </Collapsible>
          </View>
        </View>
      );
  };

  return <View style={[styles.container]}>{checkForNull(results)}</View>;
};

export default MoveMetaData;
