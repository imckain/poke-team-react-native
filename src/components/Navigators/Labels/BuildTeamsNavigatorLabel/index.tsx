import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Entypo, Ionicons } from "@expo/vector-icons";

const BuildTeamsNavigator = () => {
  return (
    <View style={[styles.container]}>
      <Entypo name="squared-plus" size={32} color="#fff" />
      <View style={styles.labelContainer}>
        <Text allowFontScaling={false} style={styles.label}>
          Build Teams
        </Text>
        <Ionicons
          name="ios-chevron-forward-sharp"
          size={18}
          color="rgba(105, 105, 105, 0.6)"
        />
      </View>
    </View>
  );
};

export default BuildTeamsNavigator;
