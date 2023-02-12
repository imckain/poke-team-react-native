import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

type Props = {
  searchTerm: string;
  onSearchTermChange: React.Dispatch<React.SetStateAction<string>>;
  onSearchTermSubmit: () => void;
  variant: "Name" | "Ability" | "Move" | "Type";
};

const SearchBar = ({
  searchTerm,
  onSearchTermChange,
  onSearchTermSubmit,
  variant,
}: Props) => {
  let placeHolderText: string;

  switch (variant) {
    case "Name":
      placeHolderText = "Search by Name or ID";
      break;
    case "Ability":
      placeHolderText = "Search by Ability";
      break;
    case "Move":
      placeHolderText = "Search by Move";
      break;
    case "Type":
      placeHolderText = "Search by Type";
      break;
    default:
      placeHolderText = "Search";
  }

  return (
    <View style={styles.searchWrapperStyle}>
      <Ionicons name="ios-search" size={18} color="rgb(175, 175, 175)" />
      <TextInput
        showSoftInputOnFocus={false}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder={placeHolderText}
        placeholderTextColor="rgb(175, 175, 175)"
        value={searchTerm}
        onChangeText={onSearchTermChange}
        onEndEditing={onSearchTermSubmit}
        clearButtonMode="always"
        keyboardAppearance="dark"
        returnKeyType={"search"}
        allowFontScaling={false}
      />
    </View>
  );
};

export default React.memo(SearchBar);
