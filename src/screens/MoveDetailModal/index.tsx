import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import MoveNameAndClass from "../../components/MoveDetailComponents/MoveNameAndClass";
import MoveAttributes from "../../components/MoveDetailComponents/MoveAttributes";
import MoveType from "../../components/MoveDetailComponents/MoveType";
import MoveMetaData from "../../components/MoveDetailComponents/MoveMetaData";
import MovePokemon from "../../components/MoveDetailComponents/MovePokemon";
import MoveEffect from "../../components/MoveDetailComponents/MoveEffect";

const MoveDetailModal = (props) => {
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
          <MoveNameAndClass
            attributeFontSize={26}
            param={"modal"}
            alignSelf={"center"}
            textAlign={"center"}
            fontSize={48}
            results={results}
          />
          <MoveAttributes
            alignSelf={"center"}
            fontSize={18}
            results={results}
          />
          <MoveType
            navigation={props.navigation}
            margin={7}
            flexDirection={"column"}
            detailFontSize={24}
            results={results}
          />
          <MoveEffect results={results} />
          <MoveMetaData results={results} />
          <MovePokemon navigation={props.navigation} results={results} />
        </View>
        <View style={styles.detailInfo}></View>
      </ScrollView>
    </View>
  );
};

export default MoveDetailModal;
