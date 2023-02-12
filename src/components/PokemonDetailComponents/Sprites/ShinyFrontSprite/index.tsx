import React from "react";
import { Image } from "react-native";

type Props = {
  results: any;
  height: number | string;
  width: number | string;
};

const ShinyFrontSprite = ({ results, width, height }: Props) => {
  const sprite = (el) => {
    if (
      el.sprites.versions["generation-v"]["black-white"].animated
        .front_shiny === null
    ) {
      return el.sprites.front_shiny;
    } else {
      return el.sprites.versions["generation-v"]["black-white"].animated
        .front_shiny;
    }
  };

  return (
    <Image
      style={[{ width: width, height: height, overflow: "hidden" }]}
      resizeMode="contain"
      source={{ uri: sprite(results) }}
    />
  );
};

export default ShinyFrontSprite;
