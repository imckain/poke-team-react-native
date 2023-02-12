import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  height: number | string;
  width: number | string;
};

const SaveTeamButton = ({ height, width }: Props) => {
  return (
    <View style={[styles.container, { height, width }]}>
      <Text allowFontScaling={false} style={styles.label}>
        Save
      </Text>
    </View>
  );
};

export default SaveTeamButton;
