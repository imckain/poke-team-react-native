import React, { useCallback, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";

type Props = {
  results: any;
  margin: number;
};

const VersionDetail = ({ results, margin }: Props) => {
  const [collapsed, setCollapsed] = useState(true);

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <TouchableOpacity
          style={styles.headerWrapper}
          onPress={() => setCollapsed(false)}
        >
          <Text allowFontScaling={false} style={[styles.headerText]}>
            Game Appearances
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
            Game Appearances
          </Text>
          <Entypo name="minus" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      );
    }
  }, []);

  const createVersionTextBox = (el) => {
    const versionBox = el.game_indices.map((item) => {
      return (
        <View key={item.version.name} style={styles.versionTextBox}>
          <Text
            allowFontScaling={false}
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            style={[styles.versionText]}
          >
            {item.version.name}
          </Text>
        </View>
      );
    });
    return versionBox;
  };

  return (
    <View style={[styles.container, { marginBottom: margin }]}>
      {checkForCollapse(collapsed)}
      <Collapsible collapsed={collapsed}>
        <View style={styles.scrollViewStyle}>
          {createVersionTextBox(results)}
        </View>
      </Collapsible>
    </View>
  );
};

export default React.memo(VersionDetail);
