import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import TypeNameAndClass from "../../TypeDetailComponents/TypeNameAndClass";

type Props = {
  results: any;
};

const ShowAdvancedTypeResult = ({ results }: Props) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.mainCardContainer}>
          <View style={styles.mainInfo}>
            <TypeNameAndClass
              alignSelf={"center"}
              fontSize={36}
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

export default React.memo(ShowAdvancedTypeResult);
