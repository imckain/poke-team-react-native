import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const AdvancedSearchNavigatorLabel = () => {
  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.label}>
        Advanced Search
      </Text>
    </View>
  );
};

export default AdvancedSearchNavigatorLabel;
