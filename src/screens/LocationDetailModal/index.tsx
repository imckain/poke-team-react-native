import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import { styles } from "./styles";
import DropDownPicker from "react-native-dropdown-picker";

const LocationDetailModal = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("all");
  const [params, setParams] = useState([
    { label: "All Game Versions", value: "all" },
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Gold", value: "gold" },
    { label: "Silver", value: "silver" },
    { label: "Crystal", value: "crystal" },
    { label: "Ruby", value: "ruby" },
    { label: "Sapphire", value: "sapphire" },
    { label: "Emerald", value: "emerald" },
    { label: "Fire Red", value: "firered" },
    { label: "Leaf Green", value: "leafgreen" },
    { label: "Diamond", value: "diamond" },
    { label: "Pearl", value: "pearl" },
    { label: "Platinum", value: "platinum" },
    { label: "Heartgold", value: "heartgold" },
    { label: "Soulsilver", value: "soulsilver" },
    { label: "Black", value: "black" },
    { label: "White", value: "white" },
    { label: "Colosseum", value: "colosseum" },
    { label: "XD", value: "xd" },
    { label: "Black-2", value: "black-2" },
    { label: "White-2", value: "white-2" },
    { label: "X", value: "x" },
    { label: "Y", value: "y" },
    { label: "Omega-Ruby", value: "omega-ruby" },
    { label: "Alpha-Sapphire", value: "alpha-sapphire" },
    { label: "Sun", value: "sun" },
    { label: "Moon", value: "moon" },
    { label: "Ultra-Sun", value: "ultra-sun" },
    { label: "Ultra-Moon", value: "ultra-moon" },
    { label: "Let's Go Pikachu", value: "lets-go-pikachu" },
    { label: "Let's Go Eevee", value: "lets-go-eevee" },
    { label: "Sword", value: "sword" },
    { label: "Shield", value: "shield" },
  ]);

  let results = [];

  if (props.route.params.results[0] === undefined) {
    results = props.route.params.results;
  } else results = props.route.params.results;

  const showVersionEncounters = (el, param) => {
    if (param === "all") return el;
    return el.filter((item) =>
      item.version_details.some((i) => i.version.name === param)
    );
  };

  const locationBox = (el) => {
    return (
      <FlatList
        horizontal={false}
        data={el}
        keyExtractor={(item) => item.location_area.url}
        renderItem={({ item }) => {
          const version = item.version_details.map((i) => {
            return i.version.name + "  ";
          });
          return (
            <View style={styles.encounterContainer}>
              <View style={styles.versionHeader}>
                <Text
                  adjustsFontSizeToFit={true}
                  numberOfLines={2}
                  style={styles.versionText}
                >
                  {version}
                </Text>
              </View>
              <View style={styles.locationBox}>
                <Text style={styles.locationName}>
                  {item.location_area.name}
                </Text>
              </View>
            </View>
          );
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.closeMessage}>
        Pull down to close
      </Text>
      <DropDownPicker
        open={open}
        value={value}
        items={params}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setParams}
        searchable={true}
        searchPlaceholder="Search Versions"
        searchContainerStyle={{ borderWidth: 0 }}
        searchTextInputStyle={{
          color: "#fff",
          paddingLeft: 6,
          fontStyle: "italic",
          fontSize: 20,
        }}
        searchPlaceholderTextColor="rgba(223, 223, 223, 0.377)"
        placeholder="Select a Version"
        style={styles.dropDown}
        textStyle={{
          color: "#fff",
          fontSize: 26,
          paddingLeft: 2,
          fontWeight: "500",
        }}
        dropDownContainerStyle={[
          styles.dropDown,
          { backgroundColor: "#000000", paddingHorizontal: 32 },
        ]}
        itemSeparator={true}
        listItemLabelStyle={{ fontWeight: "400", fontSize: 22 }}
        selectedItemLabelStyle={{ fontWeight: "600" }}
        closeAfterSelecting={true}
        theme="DARK"
      />
      <View>{locationBox(showVersionEncounters(results, value))}</View>
    </View>
  );
};

export default React.memo(LocationDetailModal);
