import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  infoContainer: {
    width: "100%",
    paddingHorizontal: 7,
  },
  baseStatContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 3,
    borderBottomColor: "#ffffff81",
    borderBottomWidth: 1,
  },
  baseStatHeaderText: {
    color: "#fff",
    fontWeight: "600",
  },
  baseStatNameText: {
    color: "#fff",
    textTransform: "capitalize",
  },
  baseStatText: {
    color: "#fff",
    alignSelf: "flex-end",
    fontWeight: "600",
  },
});
