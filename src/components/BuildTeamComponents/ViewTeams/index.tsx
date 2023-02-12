import React, { useContext } from "react";
import { Animated, Text, View, TouchableOpacity, Alert } from "react-native";
import { Context as TeamsContext } from "../../../context/TeamContext";
import uuid from "react-native-uuid";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import FrontSprite from "../../PokemonDetailComponents/Sprites/FrontSprite";

type Props = {
  results: any;
  id: number;
  height: number | string;
  width: number | string;
  navigation: any;
};

const ViewTeams = ({ id, navigation, results, width, height }: Props) => {
  const { deleteTeam } = useContext(TeamsContext);

  const createTwoButtonAlert = () => {
    Alert.alert(
      "Delete Team",
      "Are you sure you want to delete this team?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => deleteTeam(id),
        },
      ],
      { cancelable: true }
    );
  };

  const showSprite = (el) => {
    return el.map((item) => {
      const id = uuid.v4().toString();
      return <FrontSprite key={id} width={50} height={50} results={item} />;
    });
  };

  const renderRightActions = (_progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [0, 0, 0, 0],
    });
    return (
      <TouchableOpacity
        style={[styles.rightAction, { height }]}
        onPress={createTwoButtonAlert}
      >
        <Animated.Text
          style={[
            styles.delete,
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          <Ionicons name="ios-trash-sharp" size={32} color="#fff" />
        </Animated.Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Swipeable renderRightActions={renderRightActions}>
        <View style={[styles.container, { height, width }]}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("TeamDetail", {
                id: results.id,
                results: results.content,
                name: results.name,
              })
            }
          >
            <View style={styles.labelContainer}>
              <Text
                allowFontScaling={false}
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles.label}
              >
                {results.name}
              </Text>
              <Ionicons
                name="ios-chevron-forward-sharp"
                size={18}
                color="rgba(105, 105, 105, 0.6)"
              />
            </View>
          </TouchableOpacity>
          <View style={styles.spriteContainer}>
            {showSprite(results.content)}
          </View>
        </View>
      </Swipeable>
    </View>
  );
};

export default React.memo(ViewTeams);
