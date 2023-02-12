import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#000000",
    paddingVertical: 5,
  },
  infoContainer: {
    width: "100%",
    paddingHorizontal: 24,
  },
  baseStatContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 3,
    borderBottomColor: "#ffffff81",
    borderBottomWidth: 1,
  },
  headerWrapper: {
    width: "100%",
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
