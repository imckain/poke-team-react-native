import React from "react";
import { Image } from "react-native";

type Props = {
  results: any;
  height: number | string;
  width: number | string;
};

const FrontSprite = ({ results, width, height }: Props) => {
  const sprite = (el) => {
    if (
      el.sprites.versions["generation-v"]["black-white"].animated
        .front_default === null
    ) {
      return el.sprites.front_default;
    } else {
      return el.sprites.versions["generation-v"]["black-white"].animated
        .front_default;
    }
  };

  return (
    <Image
      style={{ width: width, height: height, overflow: "hidden" }}
      resizeMode="contain"
      source={{ uri: sprite(results) }}
    />
  );
};

export default FrontSprite;
