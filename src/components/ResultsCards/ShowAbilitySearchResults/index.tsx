import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import AbilityName from "../../AbilityDetailComponents/AbilityName";
import AbilityShortEffect from "../../AbilityDetailComponents/AbilityShortEffect";

type Props = {
  results: any;
};

const ShowAbilitySearchResult = ({ results }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainCardContainer}>
        <View style={styles.mainInfo}>
          <AbilityName fontSize={36} results={results} />
          <AbilityShortEffect results={results} />
        </View>
      </View>
      <Text allowFontScaling={false} style={styles.infoNotice}>
        Tap for more info
      </Text>
    </View>
  );
};

export default React.memo(ShowAbilitySearchResult);
