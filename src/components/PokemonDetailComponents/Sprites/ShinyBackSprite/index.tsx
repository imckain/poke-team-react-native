import React from "react";
import { Image } from "react-native";

type Props = {
  results: any;
  height: number | string;
  width: number | string;
};

const ShinyBackSprite = ({ results, width, height }: Props) => {
  const sprite = (el) => {
    if (
      el.sprites.versions["generation-v"]["black-white"].animated.back_shiny ===
      null
    ) {
      return el.sprites.back_shiny;
    } else {
      return el.sprites.versions["generation-v"]["black-white"].animated
        .back_shiny;
    }
  };

  return (
    <Image
      style={[{ width: width, height: height }]}
      resizeMode="contain"
      source={{ uri: sprite(results) }}
    />
  );
};

export default ShinyBackSprite;
