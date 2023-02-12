import React, { useContext } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { styles } from "./styles";
import { Context as TeamsContext } from "../../context/TeamContext";
import uuid from "react-native-uuid";
import { Ionicons } from "@expo/vector-icons";
import PokemonSlotCard from "../../components/BuildTeamComponents/PokemonSlotCard";

const TeamDetailScreen = (props) => {
  const { state } = useContext(TeamsContext);

  const id = props.route.params.id;
  const team = state.find((team) => team.id === id);

  const createTeamMember = (el) => {
    if (el[0] !== undefined) {
      return el.map((item) => {
        const id = uuid.v4().toString();
        return (
          <View
            key={id}
            style={{ flexDirection: "row", width: "90%", alignSelf: "center" }}
          >
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("DetailModal", { results: [item] })
              }
            >
              <PokemonSlotCard results={item} />
            </TouchableOpacity>
          </View>
        );
      });
    } else return null;
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => props.navigation.goBack(null)}
          >
            <Ionicons name="ios-chevron-back-outline" size={32} color="#fff" />
            <Text allowFontScaling={false} style={styles.backText}>
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.edit}
            onPress={() => props.navigation.navigate("EditTeam", { id: id })}
          >
            <Ionicons name="ios-create-outline" size={32} color="#fff" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.teamNameContainer}>
            <Text
              allowFontScaling={false}
              adjustsFontSizeToFit={true}
              numberOfLines={1}
              style={styles.teamName}
            >
              {team.name}
            </Text>
          </View>
          <View style={styles.teamInfoContainer}>
            <View style={styles.teamSlotContainer}>
              {createTeamMember(team.content)}
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(TeamDetailScreen);
