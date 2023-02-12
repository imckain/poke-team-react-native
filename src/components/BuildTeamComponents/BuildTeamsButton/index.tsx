import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";

type Props = {
  height: number | string;
  width: number | string;
};

const BuildTeamsButton = ({ height, width }: Props) => {
  return (
    <View style={{}}>
      <View style={[styles.container, { height, width }]}>
        <Text allowFontScaling={false} style={styles.label}>
          Build a Team{" "}
        </Text>
        <Entypo
          style={styles.icon}
          name="squared-plus"
          size={32}
          color="#fff"
        />
      </View>
    </View>
  );
};

export default BuildTeamsButton;
