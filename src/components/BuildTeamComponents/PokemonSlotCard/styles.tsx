import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000000",
    width: "100%",
    borderRadius: 10,
    marginVertical: 6,
  },
  infoContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
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
