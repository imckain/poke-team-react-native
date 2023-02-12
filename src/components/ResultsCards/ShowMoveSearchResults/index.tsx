import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import MoveNameAndClass from "../../MoveDetailComponents/MoveNameAndClass";
import MoveAttributes from "../../MoveDetailComponents/MoveAttributes";

type Props = {
  results: any;
};

const ShowAdvancedMoveResult = ({ results }: Props) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.mainCardContainer}>
          <View style={styles.mainInfo}>
            <MoveNameAndClass
              param={"card"}
              fontSize={30}
              lines={1}
              typeFontSize={22}
              attributeFontSize={22}
              alignSelf={"flex-start"}
              results={results}
            />
            <MoveAttributes
              fontSize={20}
              alignSelf={"flex-start"}
              results={results}
            />
          </View>
        </View>
        <Text allowFontScaling={false} style={styles.infoNotice}>
          Tap for more info
        </Text>
      </View>
    </View>
  );
};

export default React.memo(ShowAdvancedMoveResult);
