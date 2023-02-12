import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const TeamsNavigator = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="pokeball" size={32} color="#fff" />
      <View style={styles.labelContainer}>
        <Text allowFontScaling={false} style={styles.label}>
          View Teams
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

export default TeamsNavigator;
