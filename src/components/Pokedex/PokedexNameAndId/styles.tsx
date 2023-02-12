import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  labelContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "rgba(105, 105, 105, 0.6)",
    borderBottomWidth: 1,
    marginLeft: 12,
    flex: 1,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
  },
  name: {
    color: "#fff",
    fontWeight: "600",
    marginVertical: 6,
    textTransform: "capitalize",
  },
  id: {
    color: "rgba(255, 255, 255, 0.5)",
    fontWeight: "600",
    paddingHorizontal: 12,
    marginVertical: 6,
    textTransform: "capitalize",
  },
});
