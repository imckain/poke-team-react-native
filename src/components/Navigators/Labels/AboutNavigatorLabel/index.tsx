import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

const AboutNavigatorLabel = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-information-circle-outline" size={32} color="#fff" />
      <View style={styles.labelContainer}>
        <Text allowFontScaling={false} style={styles.label}>
          About
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

export default AboutNavigatorLabel;
