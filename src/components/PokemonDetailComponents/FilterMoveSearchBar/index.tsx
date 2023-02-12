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

const FilterMoveSearchBar = ({
  searchTerm,
  onSearchTermChange,
  onSearchTermSubmit,
}: Props) => {
  return (
    <View style={styles.searchWrapperStyle}>
      <Ionicons name="ios-search" size={18} color="rgba(255, 255, 255, 0.5)" />
      <TextInput
        showSoftInputOnFocus={false}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search Moves"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
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

export default React.memo(FilterMoveSearchBar);
