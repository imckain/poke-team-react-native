import React, { useCallback, useContext, useState, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Context as TeamsContext } from "../../context/TeamContext";
import Tooltip from "react-native-walkthrough-tooltip";
import { Ionicons } from "@expo/vector-icons";
import ViewTeams from "../../components/BuildTeamComponents/ViewTeams";

const TeamsScreen = (props) => {
  const { state } = useContext(TeamsContext);
  const [showTip, setTip] = useState(true);

  const showTeams = useCallback(
    (el) => {
      return (
        <FlatList
          horizontal={false}
          data={el}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            if (item.id !== 0)
              return (
                <View style={styles.teamContainer}>
                  <ViewTeams
                    results={item}
                    id={item.id}
                    height={"auto"}
                    width={"100%"}
                    navigation={props.navigation}
                  />
                </View>
              );
            else return null;
          }}
        />
      );
    },
    [state]
  );

  const createAlert = () => {
    Alert.alert("Max number of Teams", "Delete a team to proceed", null, {
      cancelable: true,
    });
  };

  const checkMaxTeams = () => {
    if (state !== null && state.length > 15) {
      return (
        <TouchableOpacity
          style={{ paddingHorizontal: 18 }}
          onPress={createAlert}
        >
          <Ionicons name="ios-add" size={38} color="#747474" />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={{ paddingHorizontal: 18 }}
          onPress={() => {
            setTip(false);
            return props.navigation.navigate("BuildTeam");
          }}
        >
          <Ionicons name="ios-add" size={38} color="#fff" />
        </TouchableOpacity>
      );
    }
  };

  const showStartMessage = useEffect(() => {
    if (state === null || state.length === 0) {
      return setTip(true);
    } else return setTip(false);
  }, [state]);

  return (
    <View style={styles.container}>
      <View
        style={{
          alignSelf: "flex-end",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <>
          <Text
            style={{
              color: "#fff",
              paddingLeft: 24,
              fontWeight: "600",
              fontSize: 32,
            }}
          >
            Teams
          </Text>
          {showStartMessage}
          <Tooltip
            isVisible={showTip}
            content={
              <View>
                <Text style={styles.label}>Tap to begin</Text>
              </View>
            }
            placement="left"
            onClose={() => setTip(false)}
          >
            {checkMaxTeams()}
          </Tooltip>
        </>
      </View>
      <View style={styles.teamsScrollView}>
        <View style={styles.teamsView}>{showTeams(state)}</View>
      </View>
    </View>
  );
};

export default React.memo(TeamsScreen);
