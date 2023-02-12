import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#000000",
    borderRadius: 10,
    width: "auto",
    justifyContent: "center",
  },
  infoContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "600",
    textTransform: "capitalize",
    paddingHorizontal: 12,
    width: "50%",
  },
  emptyName: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
    fontStyle: "italic",
  },
});
