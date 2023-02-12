import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  results: any;
  detailFontSize: number;
};

const BaseStats = ({ results, detailFontSize }: Props) => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.baseStatContainer}>
        <Text
          allowFontScaling={false}
          adjustsFontSizeToFit={true}
          style={[styles.baseStatNameText, { fontSize: detailFontSize }]}
        >
          {results.stats[0].stat.name}:
        </Text>
        <Text
          allowFontScaling={false}
          adjustsFontSizeToFit={true}
          style={[styles.baseStatText, { fontSize: detailFontSize }]}
        >
          {results.stats[0].base_stat}
        </Text>
      </View>
      <View style={styles.baseStatContainer}>
        <Text
          allowFontScaling={false}
          adjustsFontSizeToFit={true}
          style={[styles.baseStatNameText, { fontSize: detailFontSize }]}
        >
          {results.stats[1].stat.name}:
        </Text>
        <Text
          allowFontScaling={false}
          adjustsFontSizeToFit={true}
          style={[styles.baseStatText, { fontSize: detailFontSize }]}
        >
          {results.stats[1].base_stat}
        </Text>
      </View>
      <View style={styles.baseStatContainer}>
        <Text
          allowFontScaling={false}
          adjustsFontSizeToFit={true}
          style={[styles.baseStatNameText, { fontSize: detailFontSize }]}
        >
          {results.stats[2].stat.name}:
        </Text>
        <Text
          allowFontScaling={false}
          adjustsFontSizeToFit={true}
          style={[styles.baseStatText, { fontSize: detailFontSize }]}
        >
          {results.stats[2].base_stat}
        </Text>
      </View>
      <View style={styles.baseStatContainer}>
        <Text
          allowFontScaling={false}
          adjustsFontSizeToFit={true}
          style={[styles.baseStatNameText, { fontSize: detailFontSize }]}
        >
          {results.stats[3].stat.name.replace("special-", "SP ")}:
        </Text>
        <Text
          allowFontScaling={false}
          adjustsFontSizeToFit={true}
          style={[styles.baseStatText, { fontSize: detailFontSize }]}
        >
          {results.stats[3].base_stat}
        </Text>
      </View>
      <View style={styles.baseStatContainer}>
        <Text
          allowFontScaling={false}
          adjustsFontSizeToFit={true}
          style={[styles.baseStatNameText, { fontSize: detailFontSize }]}
        >
          {results.stats[4].stat.name.replace("special-", "SP ")}:
        </Text>
        <Text
          allowFontScaling={false}
          adjustsFontSizeToFit={true}
          style={[styles.baseStatText, { fontSize: detailFontSize }]}
        >
          {results.stats[4].base_stat}
        </Text>
      </View>
      <View style={styles.baseStatContainer}>
        <Text
          allowFontScaling={false}
          adjustsFontSizeToFit={true}
          style={[styles.baseStatNameText, { fontSize: detailFontSize }]}
        >
          {results.stats[5].stat.name}:
        </Text>
        <Text
          allowFontScaling={false}
          adjustsFontSizeToFit={true}
          style={[styles.baseStatText, { fontSize: detailFontSize }]}
        >
          {results.stats[5].base_stat}
        </Text>
      </View>
    </View>
  );
};

export default BaseStats;
