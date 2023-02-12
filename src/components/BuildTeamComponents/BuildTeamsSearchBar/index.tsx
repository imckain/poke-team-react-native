import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

type Props = {
  searchTerm: string;
  onSearchTermChange: React.Dispatch<React.SetStateAction<string>>;
  onSearchTermSubmit: () => void;
};

const BuildTeamSearchBar = ({
  searchTerm,
  onSearchTermChange,
  onSearchTermSubmit,
}: Props) => {
  return (
    <View style={styles.searchWrapperStyle}>
      <Ionicons name="ios-search" size={18} color="rgb(175, 175, 175)" />
      <TextInput
        showSoftInputOnFocus={false}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search for a Pokemon to add"
        placeholderTextColor="rgb(175, 175, 175)"
        value={searchTerm}
        onChangeText={onSearchTermChange}
        onEndEditing={onSearchTermSubmit}
        clearButtonMode="never"
        keyboardAppearance="dark"
        returnKeyType={"search"}
        allowFontScaling={false}
      />
    </View>
  );
};

export default React.memo(BuildTeamSearchBar);
