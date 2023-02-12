import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
import AbilityEffect from "../../components/AbilityDetailComponents/AbilityEffect";
import AbilityName from "../../components/AbilityDetailComponents/AbilityName";
import AbilityPokemon from "../../components/AbilityDetailComponents/AbilityPokemon";

const AbilityDetailModal = (props) => {
  let results;

  if (props.route.params.results[0] === undefined) {
    results = props.route.params.results;
  } else results = props.route.params.results[0];

  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.closeMessage}>
        Pull down to close
      </Text>
      <ScrollView>
        <View style={styles.mainInfo}>
          <AbilityName alignSelf={"center"} fontSize={48} results={results} />
          <AbilityEffect results={results} />
          <AbilityPokemon navigation={props.navigation} results={results} />
        </View>
        <View style={styles.detailInfo}></View>
      </ScrollView>
    </View>
  );
};

export default AbilityDetailModal;
