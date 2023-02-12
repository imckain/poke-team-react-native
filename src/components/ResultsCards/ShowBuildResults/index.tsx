import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import PokemonNameAndId from "../../PokemonDetailComponents/PokemonNameAndId";
import FrontSprite from "../../PokemonDetailComponents/Sprites/FrontSprite";

type Props = {
  results: any;
};

const ShowBuildResult = ({ results }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <FrontSprite width={80} height={80} results={results} />
        <PokemonNameAndId
          lines={1}
          fontSize={38}
          width={"70%"}
          results={results}
        />
      </View>
      <Text allowFontScaling={false} style={styles.infoNotice}>
        Tap for more info
      </Text>
    </View>
  );
};

export default React.memo(ShowBuildResult);
