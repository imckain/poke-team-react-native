import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  height: number | string;
  width: number | string;
};

const AddPokemonButton = ({ name, height, width }: Props) => {
  return (
    <View style={[styles.container, { height, width }]}>
      <Text allowFontScaling={false} style={styles.label}>
        Add {name}
      </Text>
    </View>
  );
};

export default AddPokemonButton;
