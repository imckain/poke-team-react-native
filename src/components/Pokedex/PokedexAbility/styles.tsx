import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomColor: "rgba(105, 105, 105, 0.6)",
    borderBottomWidth: 1,
  },
  name: {
    marginVertical: 6,
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
    textTransform: "capitalize",
  },
});
