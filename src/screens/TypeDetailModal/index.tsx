import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
import TypeNameAndClass from "../../components/TypeDetailComponents/TypeNameAndClass";
import TypeMoves from "../../components/TypeDetailComponents/TypeMoves";
import TypeDamage from "../../components/TypeDetailComponents/TypeDamage";
import TypePokemon from "../../components/TypeDetailComponents/TypePokemon";

const TypeDetailModal = (props) => {
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
          <TypeNameAndClass
            alignSelf={"center"}
            fontSize={48}
            results={results}
          />
          <TypeDamage navigation={props.navigation} results={results} />
          <TypeMoves navigation={props.navigation} results={results} />
          <TypePokemon navigation={props.navigation} results={results} />
        </View>
        <View style={styles.detailInfo}></View>
      </ScrollView>
    </View>
  );
};

export default TypeDetailModal;
