import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 12,
    marginBottom: 6,
  },
  label: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    textShadowColor: "#535353d3",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  labelContainer: {
    paddingVertical: 1,
    borderBottomColor: "rgba(105, 105, 105, 0.6)",
    borderBottomWidth: 1,
    marginLeft: 12,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
